import { css } from '@emotion/react'
import { AuctionManager } from '@zoralabs/manage-auction-hooks'
import { TokenPreview, BidButton } from '../components/manage'
import { media } from '../styles/mixins'
import { NFTFullPage, FullComponents } from '@zoralabs/nft-components'
import { CONTRACT_ADDRESSES } from '../utils/env-vars'

export function HeroToken({token}: {token: any}) {
  return (
    <NFTFullPage
      contract={CONTRACT_ADDRESSES as string}
      id={token?.nft?.tokenId as string}
      options={{token}}
    >
      <AuctionManager renderMedia={TokenPreview}>
        <div css={css`
          display: grid;
          grid-template-columns: 1fr;
        `}>
          <div css={
          css`
            position: relative;
            width: 100%;
            max-width: 960px;
            margin: auto;
          `}>
            <div css={css`
              height: 55vh;
              position: relative;
              z-index: 10;
              &:after {
                content: '';
                background-color: var(--color-b);
                height: 100%;
                width: 50%;
                position: absolute;
                top: 0;
                right: 0;
                z-index: 0;
              }
            `}>
              <div css={css`
                position: relative;
                z-index: 100;
                height: 100%;
                width: 100%;
                .zora-fullMediaWrapper {
                  width: 100%;
                  margin: 0;
                  height: 100%;
                  img, video {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                  }
                }
              `}>
                <FullComponents.MediaFull />
              </div>
            </div>
            {/* <BidButton /> */}
          <a
            className='button'
            href={`https://zora.co/collections/${CONTRACT_ADDRESSES}/${token?.nft?.tokenId}`}
            target="_blank"
            rel="noreferrer"
            css={css`
              background-color: pink;
              font-size: var(--text-04);
              font-family: var(--display-font)!important;
              width: 100%;
              max-width: 400px;
              border: 0;
              box-shadow: var(--funky-shadow);
              padding-bottom: 15px;
              z-index: 100;
              ${media.hover`
                background-color: #e7435f;
              `}
            `}
          >
            View on Zora
          </a>
          </div>
          <div
            css={css`
              background-color: var(--color-b);
              width: 100%;
              max-width: 960px;
              margin: auto;
              background-color: #ff1f8c;
              padding: var(--space-md);
              border-radius: var(--space-md);
              margin-top: var(--space-lg);
              gap: var(--space-sm);
              * {
                font-size: var(--text-01)!important;
                color: white;
                opacity: 1!important;
                ${media.laptop`
                  font-size: var(--text-01)!important;
                `}
              }
              .zora-fullItemInfo {
                padding: var(--space-sm);
                border-bottom: 4px solid var(--color-a);
                * {
                  line-height: 1.15;
                  ${media.laptop`
                    font-size: var(--text-02)!important;
                  `}
                }
              }
              .zora-fullCreatorOwnerSection {
                display: none;
              }
            `}
          >
            <FullComponents.MediaInfo />
            <FullComponents.AuctionInfo />
            <FullComponents.NFTProperties />
          {/* 
            <div css={css`
            margin-top: var(--space-md);
            .zora-fullLabel {
              padding-bottom: var(--space-sm);
              border-bottom: 1px dashed var(--color-a);
              margin-bottom: var(--space-sm);
            }
          `}>
            <FullComponents.BidHistory />
          </div>
          */}
          </div>
          
        </div>
      </AuctionManager>
    </NFTFullPage>
  )
}