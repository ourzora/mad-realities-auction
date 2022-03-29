/* Only show tokens of a certain contract that have market activity */
import { useMemo } from 'react'

export const useBidAggregate = (tokens: any) => {
  const auctionList = useMemo(() => {
    
    const allBids = tokens.map((token: any) => (
      token?.nft.auctionData?.previousBids
    )).flat()

    const filteredBids = allBids.filter((x: any) => x !== undefined)

    return filteredBids.map((bid: any) => {
      return ({
        bidder: bid?.bidder?.id,
        amount: bid?.amount,
        tx: `https://etherscan.io/tx/${bid?.transactionHash}`
      })
    })
  }, [tokens])

  return auctionList
}
