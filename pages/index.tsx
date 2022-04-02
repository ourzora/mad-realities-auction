import { css } from '@emotion/react'
import { getStaticTokens } from '../services/getStaticTokens'
import { AuctionsList } from '../components/AuctionsList'
import { PageWrapper } from '../styles/components'
import { Head } from '../components/HeadMeta'
import { BidList } from '../components/BidList'
import { HeroToken } from '../components/HeroToken'
import { NoAuctionHero } from '../components/NoAuctionHero'

export default function Home({
  tokens,
  landingToken,
  metaImage,
  metaDescription,
}: {
  tokens: any[],
  landingToken: any,
  metaImage: string | undefined,
  metaDescription: string | undefined,
}) {
  return (
    <PageWrapper>
      <Head
        description={metaDescription}
        ogImage={metaImage}
      />
      {landingToken
        ? <>
            <h1 className="display-font">
              Live Auction
            </h1>
            <h2 className="subhead">
              SWEETEN THE POT, SPICE UP THE PLOT. Winner gets two special powers: put anyone in as a contestant and sponsor the season finale. Proceeds increase finale jackpot size.
            </h2>
            <HeroToken token={landingToken} />
          </>
        : <NoAuctionHero />
      }
      <h1
        className="display-font"
        css={css`
          padding-top: var(--space-md);
        `}
      >
        Mad House
      </h1>
      <h3 className="subhead">
        Every week, we auction a unique NFT that gives special interactivity powers in the Proof of Love Genesis Season and contributes to the season finale jackpot prize.
      </h3>
      <AuctionsList tokens={tokens} />
      <BidList tokens={tokens} />
    </PageWrapper>
  )
}

export const getStaticProps = getStaticTokens
