import { CONTRACT_ADDRESSES, NETWORK_ID, LANDING_HERO_TOKEN, AUCTION_LIVE } from '../utils/env-vars'
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
  let metaImage = null
  let metaDescription = null
  
  console.log(AUCTION_LIVE)

  if (
    (LANDING_HERO_TOKEN !== null && LANDING_HERO_TOKEN !== undefined)
    && AUCTION_LIVE === 'true')
  {
    try {
      const nftData = await strategy.fetchNFT(contractAddress, LANDING_HERO_TOKEN)
      nft = prepareJson(nftData)
      metaImage = nft?.metadata?.image
      metaDescription = nft?.metadata.name
    } catch (err) {
      console.log(err)
    }
  }

  return {
    props: {
      landingToken: nft,
      tokens: prepareJson(nfts),
      metaImage: metaImage,
      metaDescription: metaDescription,
    },
    revalidate: 60,
  }
}
