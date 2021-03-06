import { css } from '@emotion/react'
import { NFTFullPage, FullComponents } from '@zoralabs/nft-components'
import { AuctionManager } from '@zoralabs/manage-auction-hooks'
import { getToken, TokenProps } from '../../../services/getToken'
import { Head } from '../../../components/HeadMeta'
import { PageWrapper } from '../../../styles/components'
import { TokenPreview } from '../../../components/manage'
import { funkyHeader, funkyWrapper } from '../../../styles/mixins'
import { NFTDescription } from '../../../components/NFTDescription'

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
          useBetaIndexer
          contract={contract as string}
          id={id as string}
          initialData={initialData}
          // NFT Components pre config: options={{initialData}}
        >
          <AuctionManager renderMedia={TokenPreview}>
            <div className="hero-image-wrapper">
              <FullComponents.MediaFull />
            </div>
            <div css={css`${funkyWrapper}`}>
              <NFTDescription>
                <div css={css`
                  .zora-infoContainer {
                    background-color: yellow;
                    border-radius: var(--space-md);
                    padding: var(--space-sm);
                    box-shadow: var(--light-shadow);
                    * {
                      color: var(--black);
                      justify-content: center;
                      text-align: center;
                    }
                    .zora-addressLink {
                      position: relative;
                      margin: 0 auto;
                      display: flex;
                    }
                  }
                `}>
                  <div>
                    <FullComponents.AuctionInfo />
                    <a
                      className="funky-button"
                      href={`https://zora.co/collections/${contract}/${id}`}
                      target="_blank"
                      rel="noreferrer"
                      css={css`
                        margin-top: var(--space-sm);
                      `}
                    >
                      Bid on Zora
                    </a>
                  </div>
                </div>
              </NFTDescription>
              <div css={css`
                .zora-fullLabel {
                  ${funkyHeader};
                  opacity: 1;
                  transform: rotate(0deg);
                  text-align: center;
                }
                .zora-fullPageHistoryList {
                  margin-top: var(--space-sm);
                }
              `}>
                <div
                  css={css`
                    display: flex;
                    flex-direction: column;
                  `}
                > 
                  <FullComponents.ProofAuthenticity />
                  {/* 
                  <a
                    href={`https://zora.co/collections/${contract}/${id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="zora-fullProofLink"
                    css={{

                    }}
                  >
                    Bid on Zora
                  </a>
                  */}
                </div>
                <FullComponents.NFTProperties />
                <FullComponents.BidHistory />
              </div>
            </div>
          </AuctionManager>
        </NFTFullPage>
      </PageWrapper>
    </>
  )
}

export const getServerSideProps = getToken
