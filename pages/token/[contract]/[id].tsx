import { css } from '@emotion/react'
import { NFTFullPage, FullComponents } from '@zoralabs/nft-components'
import { AuctionManager } from '@zoralabs/manage-auction-hooks'
import { getToken, TokenProps } from '../../../services/getToken'
import { Head } from '../../../components/HeadMeta'
import { PageWrapper } from '../../../styles/components'
import { TokenPreview } from '../../../components/manage'
import { funkyWrapper } from '../../../styles/mixins'

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
          contract={contract as string}
          id={id as string}
          options={{initialData}}
        >
          <AuctionManager renderMedia={TokenPreview}>
            <FullComponents.MediaFull />
            <div css={css`
              ${funkyWrapper}
            `}>
              <FullComponents.MediaInfo />
              <FullComponents.AuctionInfo />
              {/* <BidButton /> */}
              <FullComponents.ProofAuthenticity />
              <FullComponents.NFTProperties />
              <FullComponents.BidHistory />
            </div>
          </AuctionManager>
        </NFTFullPage>
      </PageWrapper>
    </>
  )
}

export const getServerSideProps = getToken
