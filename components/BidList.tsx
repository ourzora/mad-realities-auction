import { css } from '@emotion/react';
import { useEffect, useMemo } from 'react';
import { useBidAggregate, BidAggregateType } from '../hooks/useBidAggregate'
import { useENSAddress } from '@zoralabs/nft-hooks'

const PREFIX_ADDRESS = "0x";

function BidInfo({bid}: {bid: BidAggregateType}) {
  const ens = useENSAddress(bid.bidder);

  useEffect(() => {console.log('ENS', ens)}, [ens])

  const trimmedETHAddress = useMemo(() => {
    console.log(bid?.bidder)
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
      gap: var(--space-md);
      padding-top: var(--space-lg);
      margin: 0 auto var(--space-lg);
    `}>
      <h2 className="display-font text-05">If u bid ur sexy</h2>
      <div css={css`
        width: 100%;
        max-width: 960px;
        background: var(--warm-gradient);
        padding: var(--space-md);
        border-radius: var(--space-md);
        box-shadow: var(--dark-shadow);
      `}>
        <table css={css`
          width: 100%;
          display: table;
          th {
            font-family: var(--display-font)!important;
            font-size: var(--text-03);
            padding-bottom: var(--space-md);
            text-shadow: var(--funky-text-shadow);
          }
          td {
            padding: 5px;
            width: calc(100% / 3);
          }
          tr {
            text-align: center;
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
    </div>
  )
}