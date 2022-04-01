/* Only show tokens of a certain contract that have market activity */
import { useMemo } from 'react'
import { useENSAddress } from '@zoralabs/nft-hooks'

export type BidAggregateType = {
  tokenId: string,
  tokenName: string,
  bidder: any,
  bidType: string,
  amount: string,
  tx: any,
}

export const useBidAggregate = (tokens: any) => {
  /* Would like pricing object auctionData seems to be a bit different */
  const auctionList = useMemo(() => {
    try {
      const allBids = tokens.map((token: any) => {
        if (token?.markets[0]) {
          return (
            token?.markets[0].bids.map((item: any) => ({
              tokenId: token?.nft?.tokenId,
              tokenName: token?.metadata?.name,
              bidder: item?.creator,
              amount: `${item?.amount?.prettyAmount} ${item?.amount?.symbol}`,
              tx: `https://etherscan.io/tx/${item?.created?.transactionHash}`,
            }))
          )
        } else {
          return {}
        }
      }).flat()

      return allBids.filter((x: any) => x !== undefined)
    } catch (err) {
      console.log(err)
      return []
    }
  }, [tokens])

  return auctionList
}
