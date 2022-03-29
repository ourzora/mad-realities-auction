import { CONTRACT_ADDRESSES, NETWORK_ID } from '../utils/env-vars'
import { GetStaticProps } from 'next'
import {
  FetchStaticData,
  MediaFetchAgent,
  NetworkIDs,
} from '@zoralabs/nft-hooks'

export const getStaticTokens: GetStaticProps = async () => {
  const fetchAgent = new MediaFetchAgent(
    NETWORK_ID as NetworkIDs
  )

  const contractAddress = CONTRACT_ADDRESSES as string

  const tokens = await FetchStaticData.fetchZoraIndexerList(fetchAgent, {
    collectionAddresses: contractAddress
      ? contractAddress.split(',')
      : undefined,
    limit: 40,
    offset: 0,
  })

  return {
    props: {
      tokens,
    },
    revalidate: 60,
  }
}
