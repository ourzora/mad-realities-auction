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
  metaTitle
}: {
  tokens: any[],
  landingToken: any,
  metaImage: string | undefined,
  metaDescription: string | undefined,
  metaTitle: string | undefined,
}) {
  return (
    <PageWrapper>
      <Head
        /* if you want this to be dynamic then check the getStaticTokens service
        */
        title={metaTitle}
        description={metaDescription}
        ogImage={metaImage}
      />
      {landingToken
        ? <>
            <h1 className="display-font">
              Live Auction
            </h1>
            <h4 className="subhead">
              Put in a contestant and sponsor the next episode. <br/> Proceeds increase finale jackpot size.
            </h4>
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
      {/* <h4 className="subhead">
        Every week, we auction a unique NFT that gives special interactivity powers in the Proof of Love Genesis Season and contributes to the season finale jackpot prize.
      </h4> */}
      <AuctionsList tokens={tokens} />
      <BidList tokens={tokens} />
    </PageWrapper>
  )
}

export const getStaticProps = getStaticTokens
