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
          const tokenInfo = token;
          return (
            <div
              key={`${tokenInfo.nft.contract.address}-${tokenInfo.nft.tokenId}`}
              css={css`
                position: relative;
                width: 100%;
                max-width: 720px;
              `}
            >
              <NFTPreview
                options={{initialData: token}}
                id={tokenInfo.tokenId}
                contract={tokenInfo.tokenContract}
                onClick={(evt) =>
                  router.push(
                    `/token/${tokenInfo.nft.contract.address}/${tokenInfo.nft.tokenId}`
                  )
                }
              />
            </div>
          )
        })}
    </div>
  )
}
