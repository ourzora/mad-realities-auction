import { GetServerSideProps } from 'next'
import {
  MediaFetchAgent,
  NetworkIDs,
  FetchStaticData,
} from '@zoralabs/nft-hooks'
import { addIPFSGateway } from '../utils/addIPFSGateway'

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

  const fetchAgent = new MediaFetchAgent(
    process.env.NEXT_PUBLIC_NETWORK_ID as NetworkIDs
  )
  const data = await FetchStaticData.fetchZoraIndexerItem(fetchAgent, {
    tokenId: id,
    collectionAddress: contract,
  })

  const tokenInfo = FetchStaticData.getIndexerServerTokenInfo(data)

  let tokenImage = null
  try {
    tokenImage = addIPFSGateway(tokenInfo.metadata?.image)
  } catch (err) {
    console.log(err)
  }

  return {
    props: {
      id,
      contract,
      name: tokenInfo.metadata?.name || null,
      description: tokenInfo.metadata?.description || null,
      image: tokenImage,
      initialData: data,
    },
  }
}
