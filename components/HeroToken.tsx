import { css } from '@emotion/react'
import { AuctionManager } from '@zoralabs/manage-auction-hooks'
import { TokenPreview, BidButton } from '../components/manage'
import { PricingComponent } from '@zoralabs/nft-components/dist/nft-preview/PricingComponent'
import { funkyWrapper, media } from '../styles/mixins'
import { NFTFullPage, FullComponents } from '@zoralabs/nft-components'
import { CONTRACT_ADDRESSES } from '../utils/env-vars'
import { useHoverPerspective } from '../hooks/useHoverPerspective'
import { useEffect } from 'react'

export function HeroToken({token}: {token: any}) {
  const { position } = useHoverPerspective()
  
  useEffect(() => {console.log(position)}, [position])

  return (
    <NFTFullPage
      contract={CONTRACT_ADDRESSES as string}
      id={token?.nft?.tokenId as string}
      options={{ token }}
    >
      <AuctionManager renderMedia={TokenPreview}>
        <div css={css`
          display: grid;
          grid-template-columns: 1fr;
        `}>
          <div css={css`
            position: relative;
            width: 100%;
            max-width: 960px;
            margin: auto;
            display: flex;
            flex-direction: column;
            gap: var(--space-sm);
          `}>
            <div css={css`
              height: 50vh;
              position: relative;
              z-index: 10;
              filter: drop-shadow(0px 0px 15px #4c015f);
            `}>
              <FullComponents.MediaFull />
            </div>
            <div css={css`
              margin: 0 auto;
              width: 100%;
              max-width: 600px;
              padding: var(--space-sm);
              background: var(--warm-gradient);
              border-radius: var(--space-sm);
              box-shadow: var(--dark-shadow);
              margin: var(--space-sm) auto;
              .zora-cardAuctionPricing {
                border-top: 0;
                font-size: var(--text-02);
                * {
                  opacity: 1;
                }
                text-align: center;
              }
            `}>
              <PricingComponent />
            </div>
            {/* <BidButton /> */}
          <a
            className='button'
            href={`https://zora.co/collections/${CONTRACT_ADDRESSES}/${token?.nft?.tokenId}`}
            target="_blank"
            rel="noreferrer"
            css={css`
              font-size: var(--text-04);
              font-family: var(--display-font)!important;
              width: 100%;
              max-width: 400px;
              border: 0;
              padding-bottom: 20px;
              z-index: 100;
              background-color: pink;
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
              ${funkyWrapper}
              * {
                color: white;
                opacity: 1!important;
              }
              .zora-fullTitle {
                font-size: var(--text-03)!important;
                font-family: var(--display-font)!important;
                text-shadow: var(--funky-text-shadow);
                margin: 0;
                padding-top: 0;
              }
              .zora-fullDescription {
                font-size: var(--text-01)!important;
              }
              .zora-fullItemInfo {
                padding: var(--space-sm);
                border-bottom: 4px solid var(--color-a);
                * {
                  line-height: 1.35;
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