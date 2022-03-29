import { useContext, Fragment } from 'react'
import { NFTDataContext } from '@zoralabs/nft-components'
import { useManageAuction } from '@zoralabs/manage-auction-hooks'
import { css } from '@emotion/react'

export const ListButton = () => {
  const {
    nft: { data },
  } = useContext(NFTDataContext)

  const { openManageAuction, openListAuction } = useManageAuction()

  if (!data || !data.nft) {
    return <Fragment />
  }

  if (
    data.pricing.reserve?.status === 'Active' ||
    data.pricing.reserve?.status === 'Pending'
  ) {
    return (
      <button
        className='button'
        onClick={() => {
          const reserveId = data.pricing.reserve?.id
          if (reserveId) {
            openManageAuction(parseInt(reserveId, 10))
          }
        }}
      >
        Manage
      </button>
    )
  }

  return (
    <button
      className='button'
      onClick={() => {
        openListAuction(data.nft.contract.address, data.nft.tokenId)
      }}
    >
      List
    </button>
  )
}
