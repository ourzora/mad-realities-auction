import { css } from '@emotion/react';
import { NavLink } from './utils/NavLink'
import { ConnectWallet } from './ConnectWallet'
import { APP_TITLE, HOSTED_BID_FLOW } from "../utils/env-vars";

export const Header = () => {
  return (
    <>
      <header>
        <div className='flex-row' css={css`width: 100%; justify-content: space-between;`}>
          <NavLink passHref href='/'>
            <div css={css`
              width: 350px;
              img {
                width: 100%;
                height: auto;
              }
            `}>
              <img src="mr-logo-chunky.png" alt={APP_TITLE} />
            </div>
          </NavLink>
          <NavLink passHref href='/about'>
            <a>About</a>
          </NavLink>
        </div>
        {!HOSTED_BID_FLOW && <ConnectWallet />}
      </header>
    </>
  )
}
