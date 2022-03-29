import { FetchStaticData } from '@zoralabs/nft-hooks'
import { NFTPreview } from '@zoralabs/nft-components'
import { useRouter } from 'next/router'
import { css } from '@emotion/react'

export const AuctionsList = ({ tokens }: { tokens: any[] }) => {
  const router = useRouter()

  return (
    <>
      {tokens &&
        tokens.map((token) => {
          const tokenInfo = FetchStaticData.getIndexerServerTokenInfo(token)
          return (
            <div
              key={`${tokenInfo.tokenContract}-${tokenInfo.tokenId}`}
              css={css`
                position: relative;
                width: 100%;
                display: flex;
                justify-content: space-between;
              `}
            >
              <NFTPreview
                initialData={token}
                id={tokenInfo.tokenId}
                contract={tokenInfo.tokenContract}
                useBetaIndexer={true}
                onClick={(evt) =>
                  router.push(
                    `/token/${tokenInfo.tokenContract}/${tokenInfo.tokenId}`
                  )
                }
              />
            </div>
          )
        })}
    </>
  )
}
