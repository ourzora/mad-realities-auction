import { NavLink } from './utils/NavLink'
import { ConnectWallet } from './ConnectWallet'
import { APP_TITLE } from "../utils/env-vars";

export const Header = () => {
  return (
    <>
      <header>
        <div className='flex-row'>
          <NavLink passHref href='/'>
            <a>{APP_TITLE}</a>
          </NavLink>
          <NavLink passHref href='/about'>
            <a>About</a>
          </NavLink>
        </div>
        <div className='flex-row'>
          <NavLink passHref href='/manage'>
            <a>Manage</a>
          </NavLink>
          <ConnectWallet />
        </div>
      </header>
    </>
  )
}
