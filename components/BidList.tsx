import { css } from '@emotion/react';
import { useEffect, useMemo } from 'react';
import { useBidAggregate, BidAggregateType } from '../hooks/useBidAggregate'
import { useENSAddress } from '@zoralabs/nft-hooks'
import { media } from '../styles/mixins';

const PREFIX_ADDRESS = "0x";

function BidTableRow({
  token,
  bidder,
  amount,
}: {
  token: string,
  bidder: string,
  amount: string,
}) {
  return (
    <>
      <tr css={css`
        display: none;
        ${media.tablet`
          display: table-row;
        `}
      `}>
        <td>{token}</td>
        <td>{bidder}</td>
        <td>{amount}</td>
      </tr>
      <div css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        padding-bottom: var(--space-sm);
        &:last-of-type {
          padding-bottom: 0;
        }
        ${media.tablet`
          display: none;
        `}
      `}>
        <span>{token}</span>
        <span>{bidder}</span>
        <span>{amount}</span>
      </div>
    </>
  )
}

function BidInfo({bid}: {bid: BidAggregateType}) {
  const ens = useENSAddress(bid.bidder);

  useEffect(() => {console.log('ENS', ens)}, [ens])

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
      <BidTableRow 
        token={bid.tokenName}
        bidder={ens.data}
        amount={bid.amount}
      />
    )
  } else {
    return (
      <BidTableRow 
        token={bid.tokenName}
        bidder={trimmedETHAddress}
        amount={bid.amount}
      />
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
      padding-top: var(--space-lg);
      margin: 0 auto var(--space-lg);
    `}>
      <h1 className="display-font text-05">If u bid ur sexy</h1>
      <h4 className="subhead">
      We’re taking notes on who’s participating 🔥 and bidders will get special gifts sent as a thank you 🎁
      </h4>
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
          display: none;
          ${media.tablet`
            display: table;
          `}
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
        <div
          css={css`
            width: 100%;
            display: flex;
            flex-direction: column;
            ${media.tablet`
              display: none;
            `}
          `}
        >
          <div css={css`
            * {
              font-family: var(--display-font)!important;
            }
            font-size: var(--text-03);
            padding-bottom: var(--space-md);
            text-shadow: var(--funky-text-shadow);
            display: flex;
            width: 100%;
            justify-content: space-between;
          `}
          >
            <span>NFT</span>
            <span>Bidder</span>
            <span>Amount</span>
          </div>
          {allBids.map((bid: any) =>
            <BidInfo bid={bid} key={bid.tx}/>
          )}
        </div>
      </div>
    </div>
  )
}