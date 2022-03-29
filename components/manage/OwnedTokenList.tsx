import { Fragment } from 'react'
import { css } from '@emotion/react'
import { FetchStaticData } from '@zoralabs/nft-hooks'
import { useOwnedTokens } from '../../hooks/useOwnedTokens'
import { TokenPreview } from './TokenPreview'
import { ListButton } from './ListButton'

export const OwnedTokenList = () => {
  const { data, error } = useOwnedTokens()

  if (!data) {
    return <Fragment />
  }
  if (error) {
    return <Fragment />
  }

  if (data.tokens.length === 0) {
    return (
      <div
        css={css`
          display: flex;
          justify-content: center;
          width: 100%;
          text-align: center;
          padding-top: var(--space-sm);
        `}
      >
        <h2>We couldn’t find any NFTs you own 😢</h2>
        <p>Make sure you’ve connected the correct wallet</p>
      </div>
    )
  } else {
    return (
      <Fragment>
        {data.tokens.map((token: any) => {
          const tokenInfo = FetchStaticData.getIndexerServerTokenInfo(token)
          return (
            <TokenPreview
              key={`${tokenInfo.tokenContract}-${tokenInfo.tokenId}`}
              tokenContract={tokenInfo.tokenContract}
              tokenId={tokenInfo.tokenId}
            >
              <ListButton />
              <br />
            </TokenPreview>
          )
        })}
      </Fragment>
    )
  }
}
