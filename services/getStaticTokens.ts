import {
  CONTRACT_ADDRESSES,
  NETWORK_ID,
  LANDING_HERO_TOKEN,
  AUCTION_LIVE
} from '../utils/env-vars'
import {
  GetStaticProps
} from 'next'
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

  let nft = null
  let metaImage = null
  let metaDescription = null
  let metaTitle = null

  if (
    (LANDING_HERO_TOKEN !== null && LANDING_HERO_TOKEN !== undefined)
    && AUCTION_LIVE === 'true')
  {
    try {
      nft = await FetchStaticData.fetchZoraIndexerItem(fetchAgent, {
        tokenId: LANDING_HERO_TOKEN,
        collectionAddress: contractAddress,
      })
      const tokenMetadata = FetchStaticData.getIndexerServerTokenInfo(nft)
      metaImage = "condom_gold.mp4" //tokenMetadata?.metadata?.image
      metaDescription = `Text to vote in the finale of Proof of Love S0 to claim your condom NFT.`
      metaTitle = `A condom for your wallet by Mad Realities`
    } catch (err) {
      console.log(err)
    }
  }

  return {
    props: {
      landingToken: nft,
      tokens: tokens,
      metaImage: metaImage,
      metaDescription: metaDescription,
      metaTitle: metaTitle,
    },
    revalidate: 30,
  }

  /*
  return {
    props: {
      tokens,
    },
    revalidate: 60,
  }
  */
}

/*
PreRelease NFT Hooks service:

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

  const strategy = new ZoraV2IndexerStrategy(networkId);
  
  let nft = null
  let metaImage = null
  let metaDescription = null
  let metaTitle = null
  
  console.log(AUCTION_LIVE)

  if (
    (LANDING_HERO_TOKEN !== null && LANDING_HERO_TOKEN !== undefined)
    && AUCTION_LIVE === 'true')
  {
    try {
      const nftData = await strategy.fetchNFT(contractAddress, LANDING_HERO_TOKEN)
      nft = prepareJson(nftData)
      metaImage = nft?.metadata?.image
      metaDescription = `Auction for ${nft?.metadata.name} ends 9pm ET live on the Proof of Love aftershow. Winner can put any contestant in and sponsor the next episode.`
      metaTitle = `New Auction for ${nft?.metadata.name} is LIVE and ends Sun 9pm ET at Mad House`
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
      metaTitle: metaTitle,
    },
    revalidate: 60,
  }
}
*/
