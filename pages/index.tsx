import { css } from '@emotion/react'
import { getStaticTokens } from '../services/getStaticTokens'
import { AuctionsList } from '../components/AuctionsList'
import { PageWrapper } from '../styles/components'
import { Head } from '../components/HeadMeta'
import { useLiveAuction } from '../hooks/useLiveAuction'
import { BidList } from '../components/BidList'
import { HeroToken } from '../components/HeroToken'

export default function Home({
  tokens,
  landingToken,
  allTokens,
}: {
  tokens: any,
  landingToken: any,
  allTokens: any[]
}) {
  return (
    <PageWrapper>
      <Head />
      <h1 className="display-font">Live Auction</h1>
      <HeroToken token={landingToken} />
      <BidList tokens={allTokens} />
      <h1 className="display-font">Past Auctions</h1>
      <AuctionsList tokens={tokens} />
    </PageWrapper>
  )
}

export const getStaticProps = getStaticTokens
