/* Only show tokens of a certain contract that have market activity */
import { useMemo } from 'react'

export type BidAggregateType = {
  tokenId: string,
  tokenName: string,
  bidder: any,
  bidType: string,
  amount: string,
  tx: string,
}

export const useBidAggregate = (tokens: any) => {
  /* Would like pricing object auctionData seems to be a bit different */
  const auctionList = useMemo(() => {
    try {
      const allBids = tokens.map((token: any) => {
        return (
          token?.nft.auctionData?.previousBids.map((item: BidAggregateType) => ({
            tokenId: token?.nft?.tokenData?.tokenId,
            tokenName: token?.nft?.tokenData?.metadata?.json?.name,
            bidder: item?.bidder?.id,
            bidType: item?.bidType,
            amount: item?.amount,
            tx: `https://etherscan.io/tx/${item?.transactionHash}`,
          }))
        )
      }).flat()
      return allBids.filter((x: any) => x !== undefined)
    } catch (err) {
      console.log(err)
      return []
    }
  }, [tokens])

  return auctionList
}
