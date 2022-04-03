import { css } from '@emotion/react'
import { NFTDataContext } from '@zoralabs/nft-components'
import { useContext, useMemo, ReactNode } from 'react'
import { MarkDown } from './utils'
import { media } from '../styles/mixins'

export function NFTDescription({
  children
}: {
  children?: ReactNode
}) {
  const {
    nft: { data },
  } = useContext(NFTDataContext)

  const description = useMemo(() => {
    try {
      /* @ts-ignore */
      const nftResponse = data?.zoraIndexerResponse?.metadata?.json
      return nftResponse?.description?.trim().replace(/^ +/gm, '')
    } catch (err) {
      /* @ts-ignore */
      return nftResponse?.description
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
      <h2 className='funky-header'>{
        /* @ts-ignore */
        data?.zoraIndexerResponse?.metadata?.json?.name
      }</h2>
      {children}
      <MarkDown
        markdown={description}
        styleOverrides={css`
          
          * {
            color: var(--white);
            font-size: var(--text-01);
          }
        `}
      />
    </div>
  )
}
