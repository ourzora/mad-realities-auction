/* Only show tokens of a certain contract that have market activity */
import { useEffect, useState } from 'react'

export const useTokensWithMarket = (tokens: any) => {
  const [marketTokens, setMarketTokens] = useState<any>(undefined)

  useEffect(() => {
    let auctionTokens = tokens.filter(function (token: any) {
      return (
        token?.nft.auctionData && token?.nft.auctionData.status !== 'Finished'
      )
    })
    setMarketTokens(auctionTokens)
  }, [tokens])

  return {
    marketTokens,
  }
}
