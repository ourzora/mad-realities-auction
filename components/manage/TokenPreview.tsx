import { css } from '@emotion/react'
import { NFTPreview, PreviewComponents } from '@zoralabs/nft-components'

export const TokenPreview = ({
  tokenContract,
  tokenId,
  children,
}: {
  tokenContract: string
  tokenId: string
  children?: React.ReactNode
}) => {
  return (
    <div
      css={css`
        position: relative;
        width: 100%;
        display: flex;
        justify-content: space-between;
      `}
    >
      <NFTPreview id={tokenId} contract={tokenContract} useBetaIndexer={true}>
        <PreviewComponents.MediaThumbnail />
        {children}
      </NFTPreview>
    </div>
  )
}
