/* Only show tokens of a certain contract that have market activity */
import { useMemo } from 'react'

export const useLiveAuction = (tokens: any) => {
  
  const liveAuctions = useMemo(() => {
    console.log(tokens)
    let auctionTokens = tokens.filter((token: any) => {
      return (
        token?.nft.auctionData && token?.nft.auctionData.status === 'Active'
      )
    })
    console.log(auctionTokens)
    return auctionTokens
  }, [tokens])

  return liveAuctions
}
