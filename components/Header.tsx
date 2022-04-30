import { css } from '@emotion/react'
import { NavLink } from './utils/NavLink'
import { APP_TITLE } from '../utils/env-vars'
import { ConnectButton } from '@rainbow-me/rainbowkit'

export const Header = () => {
  return (
    <>
      <header>
        <NavLink passHref href='/'>
          <div
            css={css`
              width: 350px;
              img {
                width: 100%;
                height: auto;
              }
            `}
          >
            <img src='/mr-logo-chunky.png' alt={APP_TITLE} />
          </div>
        </NavLink>
        <div
          css={css`
            display: flex;
            gap: 20px;
          `}
        >
          <NavLink passHref href='/about'>
            <a>About</a>
          </NavLink>
          <ConnectButton chainStatus='none' accountStatus='full' />
        </div>
      </header>
    </>
  )
}
