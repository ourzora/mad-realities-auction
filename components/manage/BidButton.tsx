import { useContext, Fragment } from 'react'
import { NFTDataContext } from '@zoralabs/nft-components'
import { Button } from '@zoralabs/nft-components/dist/components/Button'
import { useManageAuction } from '@zoralabs/manage-auction-hooks'
import { HOSTED_BID_FLOW } from '../../utils/env-vars'

export const BidButton = () => {
  const { openBidAuction } = useManageAuction()
  const {
    nft: { data },
  } = useContext(NFTDataContext)

  if (
    !data ||
    !data.pricing.reserve ||
    data.pricing.reserve.current.likelyHasEnded
  ) {
    return <Fragment />
  }
  return (
    <Fragment>
      {HOSTED_BID_FLOW ? (
        <Button
          primary={true}
          href={[
            'https://zora.co/auction',
            data.nft.contract.address,
            data.nft.tokenId,
            'bid',
          ].join('/')}
        >
          Place Bid
        </Button>
      ) : (
        <button
          className='button'
          onClick={() => {
            /* @ts-ignore */
            openBidAuction(parseInt(`${data.pricing.reserve.id}`) as number)
          }}
        >
          Place Bid
        </button>
      )}
    </Fragment>
  )
}
