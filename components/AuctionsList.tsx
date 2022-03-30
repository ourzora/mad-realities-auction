import { FetchStaticData } from '@zoralabs/nft-hooks'
import { NFTPreview } from '@zoralabs/nft-components'
import { useRouter } from 'next/router'
import { css } from '@emotion/react'

export const AuctionsList = ({ tokens }: { tokens: any[] }) => {
  const router = useRouter()

  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        justify-content: center;
        gap: var(--space-md);
      `}
    >
      {tokens &&
        tokens.map((token) => {
          const tokenInfo = FetchStaticData.getIndexerServerTokenInfo(token)
          return (
            <div
              key={`${tokenInfo.tokenContract}-${tokenInfo.tokenId}`}
              css={css`
                position: relative;
                width: 100%;
                max-width: 720px;
              `}
            >
              <NFTPreview
                initialData={token}
                id={tokenInfo.tokenId}
                contract={tokenInfo.tokenContract}
                useBetaIndexer
                onClick={() =>
                  router.push(
                    `/token/${tokenInfo.tokenContract}/${tokenInfo.tokenId}`
                  )
                }
              />
            </div>
          )
        })}
    </div>
  )
}
