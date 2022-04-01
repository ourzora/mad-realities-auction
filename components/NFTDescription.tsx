import { css } from '@emotion/react'
import { NFTDataContext } from '@zoralabs/nft-components'
import { useContext, useMemo } from 'react'
import { MarkDown } from './utils'

export function NFTDescription() {
  const { data } = useContext(NFTDataContext)

  const description = useMemo(() => {
    try {
      return data?.metadata?.description?.trim().replace(/^ +/gm, '')
    } catch (err) {
      return data?.metadata?.description
    }
  }, [data])

  if (!description) {
    return null
  }

  return (
    <div css={css`
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
    `}>
      <h2 className='funky-header'>{data?.metadata?.name}</h2>
      <MarkDown
        markdown={description}
        styleOverrides={css`
          padding: 0 var(--space-md);
          * {
            color: var(--white);
            font-size: var(--text-01);
          }
        `}
      />
    </div>
  )
}
