import { css } from '@emotion/react'
import { getStaticTokens } from '../services/getStaticTokens'
import { AuctionsList } from '../components/AuctionsList'
import { PageWrapper } from '../styles/components'
import { Head } from '../components/HeadMeta'
import { useLiveAuction } from '../hooks/useLiveAuction'
import { BidList } from '../components/BidList'

export default function Home({
  tokens,
  landingToken
}: {
  tokens: any,
  landingToken: any
}) {
  const liveAuctions = useLiveAuction(tokens)
  console.log('landingToken', landingToken)
  
  return (
    <PageWrapper>
      <Head />
      <h1 className="display-font">Current Auction</h1>
      <AuctionsList tokens={tokens} />
      <BidList tokens={tokens} />
    </PageWrapper>
  )
}

export const getStaticProps = getStaticTokens
