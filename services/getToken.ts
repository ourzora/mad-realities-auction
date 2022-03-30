import { GetServerSideProps } from 'next'
import {
  NetworkIDs,
} from '@zoralabs/nft-hooks'
import { prepareJson } from '@zoralabs/nft-hooks/dist/fetcher/NextUtils'
import { addIPFSGateway } from '../utils/addIPFSGateway'
import { ZoraV2IndexerStrategy } from '@zoralabs/nft-hooks/dist/strategies'

export type TokenProps = {
  id: string
  contract: string
  name: string
  description: string
  image: string
  initialData: any
  props?: any
}

export const getToken: GetServerSideProps = async ({ params }) => {
  if (!params?.id || Array.isArray(params.id)) {
    return { notFound: true }
  }
  if (!params?.contract || Array.isArray(params.contract)) {
    return { notFound: true }
  }

  const id = params.id as string
  const contract = params.contract as string

  const networkId = process.env.NEXT_PUBLIC_NETWORK_ID as NetworkIDs
  const strategy = new ZoraV2IndexerStrategy(networkId);
  const nft = await strategy.fetchNFT(contract, id)

  let tokenImage = null
  try {
    tokenImage = addIPFSGateway(nft.metadata?.image)
  } catch (err) {
    console.log(err)
  }

  return {
    props: {
      id,
      contract,
      name: nft.metadata?.name || null,
      description: nft.metadata?.description || null,
      image: tokenImage,
      initialData: prepareJson(nft),
    },
  }
}
