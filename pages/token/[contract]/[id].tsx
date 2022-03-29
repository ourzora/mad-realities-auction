import { NFTFullPage, FullComponents } from '@zoralabs/nft-components'
import { AuctionManager } from '@zoralabs/manage-auction-hooks'
import { getToken, TokenProps } from '../../../services/getToken'
import { Head } from '../../../components/HeadMeta'
import { PageWrapper } from '../../../styles/components'
import { RenderNFTData } from '../../../components/utils/RenderNFTData'
import { TokenPreview, BidButton } from '../../../components/manage'

export default function Token({
  id,
  contract,
  name,
  description,
  image,
  initialData,
}: TokenProps) {
  return (
    <>
      <Head title={name} description={description} ogImage={image} />
      <PageWrapper>
        <NFTFullPage
          useBetaIndexer={true}
          contract={contract as string}
          id={id as string}
          initialData={initialData}
        >
          <AuctionManager renderMedia={TokenPreview}>
            <FullComponents.MediaFull />
            <FullComponents.MediaInfo />
            <FullComponents.AuctionInfo />
            <BidButton />
            <FullComponents.ProofAuthenticity />
            <FullComponents.NFTProperties />
            <FullComponents.BidHistory />
            <RenderNFTData />
          </AuctionManager>
        </NFTFullPage>
      </PageWrapper>
    </>
  )
}

export const getServerSideProps = getToken
