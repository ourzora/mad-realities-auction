import { getStaticTokens } from '../services/getStaticTokens'
import { AuctionsList } from '../components/AuctionsList'
import { PageWrapper } from '../styles/components'
import { Head } from '../components/HeadMeta'
import { useLiveAuction } from '../hooks/useLiveAuction'
import { useBidAggregate } from '../hooks/useBidAggregate'
import { RawDisplayer } from '../components/utils/RawDisplayer'

export default function Home({ tokens }: { tokens: any }) {
  const { liveAuctions } = useLiveAuction(tokens)
  const allBids = useBidAggregate(tokens)
  console.log(allBids)
  return (
    <PageWrapper>
      <Head />
      <AuctionsList tokens={liveAuctions} />
      <RawDisplayer data={allBids} />
    </PageWrapper>
  )
}

export const getStaticProps = getStaticTokens
