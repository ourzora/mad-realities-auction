import { css } from '@emotion/react'
import { AuctionManager } from '@zoralabs/manage-auction-hooks'
import { TokenPreview } from '../components/manage'
import { PricingComponent } from '@zoralabs/nft-components/dist/nft-preview/PricingComponent'
import { NFTFullPage, FullComponents } from '@zoralabs/nft-components'
import { CONTRACT_ADDRESSES } from '../utils/env-vars'
import Link from 'next/link'

export function HeroToken({token}: {token: any}) {
  // const { position } = useHoverPerspective()
  // useEffect(() => {console.log(position)}, [position])

  return (
    <NFTFullPage
      contract={CONTRACT_ADDRESSES as string}
      id={token?.nft?.tokenId as string}
      options={{ token }}
    >
      <AuctionManager renderMedia={TokenPreview}>
        <div css={css`
          position: relative;
          width: 100%;
          max-width: 960px;
          margin: auto;
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
          padding-bottom: var(--space-md);
        `}>
          <Link
            href={`/token/${CONTRACT_ADDRESSES}/${token?.nft?.tokenId}`}
            passHref
          >
            <a css={css`
              height: 50vh;
              position: relative;
              z-index: 10;
              filter: drop-shadow(0px 0px 15px #4c015f);
            `}>
              <FullComponents.MediaFull />
            </a>
          </Link>
          <div css={css`
            width: 100%;
            max-width: 600px;
            background: var(--warm-gradient);
            border-radius: var(--space-sm);
            box-shadow: var(--dark-shadow);
            margin: var(--space-sm) auto;
            padding: calc(var(--space-sm) / 2);
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
          <div
            className="flex-row"
            css={css`
              flex-wrap: wrap;
              justify-content: center;
            `}
          >
            <a
              className="funky-button"
              href={`https://zora.co/collections/${CONTRACT_ADDRESSES}/${token?.nft?.tokenId}`}
              target="_blank"
              rel="noreferrer"
            >
              Bid on Zora
            </a>
            <Link
              href={`/token/${CONTRACT_ADDRESSES}/${token?.nft?.tokenId}`}
              passHref
            >
              <a className="funky-button">
                More Info
              </a>
            </Link>
          </div>
        </div>
      </AuctionManager>
    </NFTFullPage>
  )
}