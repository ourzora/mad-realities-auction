import { css } from '@emotion/react';
import { useMemo } from 'react';
import { useBidAggregate, BidAggregateType } from '../hooks/useBidAggregate'
import { useENSAddress } from '@zoralabs/nft-hooks'

const PREFIX_ADDRESS = "0x";

function BidInfo({bid}: {bid: BidAggregateType}) {
  const ens = useENSAddress(bid.bidder);
  
  const trimmedETHAddress = useMemo(() => {
    try {
      const addressFirst = bid.bidder.slice(0, 4 + PREFIX_ADDRESS.length);
      const addressLast = bid.bidder.slice(bid.bidder.length - 4);
      return `${addressFirst}...${addressLast}`
    } catch (err) {
      return bid.bidder
    }
  },[bid])

  if (ens.data) {
    return (
      <tr>
        <td>{bid.tokenName}</td>
        <td>{ens.data}</td>
        <td>{bid.amount}</td>
      </tr>
    )
  } else {
    return (
      <tr>
        <td>{bid.tokenName}</td>
        <td>{trimmedETHAddress}</td>
        <td>{bid.amount}</td>
      </tr>
    )
  }
}

export function BidList({tokens}: {tokens?: any[]}) {
  const allBids = useBidAggregate(tokens)
  return (
    <div css={css`
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center; 
    `}>
      <h2>All Bids</h2>
      <table css={css`
        width: 100%;
        display: table;
        max-width: 960px;
        td {
          padding: 5px;
        }
      `}>
        <tr>
          <th>NFT</th>
          <th>Bidder</th>
          <th>Amount</th>
        </tr>
        {allBids.map((bid: any) =>
          <BidInfo bid={bid} key={bid.tx}/>
        )}
      </table>
    </div>
  )
}