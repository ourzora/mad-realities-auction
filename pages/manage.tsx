import { css } from '@emotion/react'
import { AuctionManager } from '@zoralabs/manage-auction-hooks'
import { useWalletButton } from '@zoralabs/simple-wallet-provider'
import { Head } from '../components/HeadMeta'
import { PageWrapper } from './../styles/components'
import { TokenPreview, OwnedTokenList } from '../components/manage'
import { APP_TITLE } from '../utils/env-vars'

export default function Manage() {
  const { account } = useWalletButton()
  return (
    <>
      <Head title='Manage' />
      <AuctionManager
        renderMedia={TokenPreview}
        strings={{
          LIST_MEDIA_HEADER: 'List your NFT',
          LIST_MEDIA_DESCRIPTION: `Set the reserve price to list your NFT on ${APP_TITLE}`,
        }}
      >
        {account === undefined && (
          <PageWrapper
            css={css`
              max-width: var(--content-width-md);
              text-align: center;
            `}
          >
            <h1>Connect Your Wallet To Manage Your NFTs</h1>
          </PageWrapper>
        )}
        <PageWrapper grid>
          <OwnedTokenList />
        </PageWrapper>
      </AuctionManager>
    </>
  )
}
