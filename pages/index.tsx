import { getStaticTokens } from '../services/getStaticTokens'
import { AuctionsList } from '../components/AuctionsList'
import { PageWrapper } from '../styles/components'
import { Head } from '../components/HeadMeta'

export default function Home({ tokens }: { tokens: any }) {
  return (
    <PageWrapper grid>
      <Head />
      <AuctionsList tokens={tokens} />
    </PageWrapper>
  )
}

export const getStaticProps = getStaticTokens
