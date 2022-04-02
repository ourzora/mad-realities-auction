import { css } from "@emotion/react"

export function NoAuctionHero() {
  return (
    <div css={css`
      width: 100%;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
    `}>
      <h1 className="display-font">
        No Live Auction!<br/>Check back L8R
      </h1>
      <div css={css`
        width: 100%;
        border-radius: var(--space-md);
        overflow: hidden;
        img {
          width: 100%;
        }
      `}>
        <img src="/mad_house_link_preview.png" alt="" />
      </div>
    </div>
  )
}