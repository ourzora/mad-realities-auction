import { CONTRACT_ADDRESSES, NETWORK_ID, LANDING_HERO_TOKEN } from '../utils/env-vars'
import { GetStaticProps } from 'next'
import { ZoraIndexerV1DataSource } from '@zoralabs/nft-hooks/dist/backends'
import { prepareJson } from '@zoralabs/nft-hooks/dist/fetcher/NextUtils'
import { NetworkIDs } from '@zoralabs/nft-hooks'
import { ZoraV2IndexerStrategy } from '@zoralabs/nft-hooks/dist/strategies'

export const getStaticTokens: GetStaticProps = async () => {
  const contractAddress = CONTRACT_ADDRESSES as string
  const networkId = NETWORK_ID as NetworkIDs
  
  const dataSource = new ZoraIndexerV1DataSource(networkId, 4)
  
  const nfts = await dataSource.fetchNFTSForQuery(
    contractAddress ? contractAddress.split(',') : [],
    '', // curator address
    null,
    false,
    40,
    0
  )

  /* Hero Token */
  const strategy = new ZoraV2IndexerStrategy(networkId);
  
  let nft = null

  try {
    nft = LANDING_HERO_TOKEN && await strategy.fetchNFT(contractAddress, LANDING_HERO_TOKEN)
  } catch (err) {
    console.log(err)
  }

  let metaNFT = null

  try {
    metaNFT = LANDING_HERO_TOKEN && await strategy.fetchNFT(contractAddress, LANDING_HERO_TOKEN)
    console.log(metaNFT)
  } catch (err) {
    console.log(err)
  }

  return {
    props: {
      landingToken: nft ? prepareJson(nft) : null,
      tokens: prepareJson(nfts),
    },
    revalidate: 60,
  }
}
