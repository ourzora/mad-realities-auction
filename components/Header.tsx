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
            <a>{APP_TITLE}</a>
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
