import sql from '../../../../services/metadata-db'

const DEFAULT_METADATA = {
  name: `Condom For Your Wallet`,
  description: `Something big is coming

Condoms for your wallet were distributed for free starting May 1, 2022 to commemorate your participation in the wrap of Season Zero of Proof of Love, an interactive dating show where you decide who (and what) happens.

This condom is our way of giving our growing, local community their first NFT and limited summer 2022 access to Mad Realities festivities, and is our way of knowing who has participated in the universe we've created this Spring.

if u hold this ur sexy, we don't make the rules`,
  image: 'ipfs://QmQxjDGdfqb88kCc4tfrxTo3DZgrBFrj1omi63oynJkE2n',
  animation_url: 'ipfs://QmQRu24FiPGvuZ3u7nx9ZfV52koPuW5CuMLkdTo2uzhPao',
  properties: {
    Status: 'Broken',
    Interaction: 'Powers Dormant',
  },
}

export default async function handler(req, res) {
  const { id } = req.query

  const idNumber = parseInt(id, 10)

  const metadataValue = {
    ...DEFAULT_METADATA,
    name: `${DEFAULT_METADATA.name} #${id}`,
  }

  res.send({
    ...metadataValue,
    properties: {
      Status: 'Sexy',
      Interaction: 'Powers Unlocked',
    },
  })
  return

  if (!sql) {
    res.send(metadataValue)
    return
  }

  const result = await sql`
    select nft_id from public."Submission" where nft_id = ${idNumber} limit 1;
  `

  if (result && result.length > 0) {
    res.send({
      ...metadataValue,
      properties: {
        Status: 'Sexy',
        Interaction: 'Powers Unlocked',
      },
    })
    return
  }

  res.send(metadataValue)
}
