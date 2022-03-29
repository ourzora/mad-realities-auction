import { Fragment, useContext, useState, useEffect } from 'react'
import { css } from '@emotion/react'
import { useManageAuction } from '@zoralabs/manage-auction-hooks'
import { useWalletButton } from '@zoralabs/simple-wallet-provider'
import { NFTDataContext } from '@zoralabs/nft-components'
import { HOSTED_BID_FLOW } from '../../utils/env-vars'

export const ManageAuctionButton = () => {
  const { nft } = useContext(NFTDataContext)
  const { openManageAuction, openBidAuction } = useManageAuction()

  const { account } = useWalletButton()
  const [isOwner, setIsOwner] = useState(false)

  useEffect(() => {
    /* @ts-ignore */
    const auctions = nft?.data?.zoraIndexerResponse?.auctions
    if (auctions && auctions.length) {
      setIsOwner(auctions[auctions.length - 1].tokenOwner === account?.address)
    }
  }, [nft, account])

  if (
    !nft.data ||
    !nft.data.pricing.reserve ||
    (nft.data.pricing.reserve.current.likelyHasEnded && !HOSTED_BID_FLOW)
  ) {
    return <Fragment />
  }

  return (
    <>
      {nft.data.pricing.reserve.id && (
        <div
          css={css`
            display: flex;
            flex-direction: row;
            width: 100%;
            padding: var(--space-sm) 0;
          `}
        >
          <button
            className='button'
            onClick={() => {
              openBidAuction(
                /* @ts-ignore */
                parseInt(`${nft.data.pricing.reserve.id}`) as number
              )
            }}
          >
            Place Bid
          </button>
          {isOwner && (
            <button
              className='button'
              onClick={() => {
                openManageAuction(
                  /* @ts-ignore */
                  parseInt(`${nft.data.pricing.reserve.id}`) as number
                )
              }}
            >
              Manage Auction
            </button>
          )}
        </div>
      )}
    </>
  )
}
