import { CONTRACT_ADDRESSES, NETWORK_ID } from '../utils/env-vars'
import { GetStaticProps } from 'next'
import { ZoraIndexerV1DataSource } from '@zoralabs/nft-hooks/dist/backends'
import { prepareJson } from '@zoralabs/nft-hooks/dist/fetcher/NextUtils'
import { NetworkIDs } from '@zoralabs/nft-hooks'

export const getStaticTokens: GetStaticProps = async () => {
  const contractAddress = CONTRACT_ADDRESSES as string
  const network = NETWORK_ID as NetworkIDs
  const dataSource = new ZoraIndexerV1DataSource(network, 4)
  const nfts = await dataSource.fetchNFTSForQuery(
    contractAddress ? contractAddress.split(',') : [],
    '', // curator address
    null,
    false,
    40,
    0
  )

  return {
    props: {
      tokens: prepareJson(nfts),
    },
    revalidate: 60,
  }
}
