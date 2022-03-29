/* Only show tokens of a certain contract that have market activity */
import { useMemo } from 'react'

export const useLiveAuction = (tokens: any) => {

  const liveAuctions = useMemo(() => {
    let auctionTokens = tokens.filter((token: any) => {
      console.log(token)
      return (
        token?.nft.auctionData && token?.nft.auctionData.status !== 'Finished'
      )
    })
    return auctionTokens
  }, [tokens])

  return {
    liveAuctions,
  }
}
