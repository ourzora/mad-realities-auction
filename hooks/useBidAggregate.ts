/* Only show tokens of a certain contract that have market activity */
import { useMemo } from 'react'
import { formatCryptoVal } from '../utils/numbers'
import { FetchStaticData } from '@zoralabs/nft-hooks'

export type BidAggregateType = {
  tokenId: string,
  tokenName: string,
  bidder: any,
  bidType: string,
  amount: string,
  tx: any,
}

export const useBidAggregate = (tokens: any) => {
  const auctionList = useMemo(() => {
    try {
      const allBids = tokens.map((token: any) => {        
        if (token?.nft?.auctionData?.previousBids) {
          const tokenInfo = FetchStaticData.getIndexerServerTokenInfo(token)
          return (
            token?.nft.auctionData?.previousBids.map((item: any) => (
              {
                tokenId: tokenInfo?.tokenId,
                tokenName: tokenInfo?.metadata?.name,
                bidder: item?.bidder?.id,
                amount: `${formatCryptoVal(item?.amount)} ETH`,
                tx: `https://etherscan.io/tx/${item?.transactionHash}`,
              }
            ))
          )
        } else {
          return undefined
        }
      }).flat()
      return allBids.filter((x: any) => x !== undefined)
    } catch (err) {
      return []
    }
  }, [tokens])

  return auctionList
}

/*
export type BidAggregateType = {
  tokenId: string,
  tokenName: string,
  bidder: any,
  bidType: string,
  amount: string,
  tx: any,
}

export const useBidAggregate = (tokens: any) => {
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
      // console.log(err)
      return []
    }
  }, [tokens])

  return auctionList
}
*/
