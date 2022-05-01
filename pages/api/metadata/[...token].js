import { existsSync } from 'fs'

const path = require('path')
const fsp = require('fs').promises

const privateDirectory = path.resolve(process.cwd(), 'private')
const validate = async (id, file) => {
  try {
    // Verify file exists
    if (!existsSync(file)) {
      throw 'File missing'
    }
  } catch (e) {
    return false
  }
  return true
}

export default function handler(req, res) {
  const { token } = req.query
  const ids = token.pop()
  const dirs = token.splice(-1)

  let idsArr = []
  if (ids.indexOf('...') > -1) {
    const [start, end] = ids.split('...')
    idsArr = Array.from({ length: end - start + 1 }, (_, i) =>
      String(i + Number(start))
    )
  } else {
    idsArr = ids.split(',').map((x) => x.replace('.json', ''))
  }

  return new Promise(async () => {
    let data
    try {
      data = await Promise.all(
        idsArr.map(async (id) => {
          const f = path.join(privateDirectory, ...dirs, `${id}.json`)
          if (await validate(id, f)) {
            const file = await fsp.readFile(f, 'utf8')
            return JSON.parse(file)
          } else {
            return null
          }
        })
      )
    } catch (e) {
      console.log(e)
    }
    let result = data.filter((x) => x !== null)

    if (!!result.length) {
      res.setHeader('Cache-Control', `public, max-age=5000`)
      res.setHeader('Content-type', 'application/json')
      if (result && result.length === 1) result = result[0]
      res.status(200).json(result)
    } else {
      res.status(404).end()
    }
  })
}
