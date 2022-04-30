import '../styles/reset.css'
import '@rainbow-me/rainbowkit/styles.css'
import '@reach/dialog/styles.css'
import type { AppProps } from 'next/app'
import NProgress from 'next-nprogress-emotion'
import { NetworkIDs } from '@zoralabs/nft-hooks'
import { MediaConfiguration } from '@zoralabs/nft-components'
import { mediaConfigurationStyles } from '../styles/theme'
import GlobalStyles from '../styles/GlobalStyles'
import { NETWORK_ID, RPC_URL } from '../utils/env-vars'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import {
  Chain,
  connectorsForWallets,
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit'
import { chain, WagmiProvider } from 'wagmi'
import { providers } from 'ethers'

const provider = () => new providers.JsonRpcProvider(RPC_URL)

const chains: Chain[] =
  NETWORK_ID === '1'
    ? [{ ...chain.mainnet, name: 'Ethereum' }]
    : [{ ...chain.rinkeby, name: 'Rinkeby' }]

const wallets = getDefaultWallets({
  chains,
  appName: 'Mad Realities',
  jsonRpcUrl: RPC_URL || '',
})

const connectors = connectorsForWallets(wallets)

export default function CreateMarketplaceApp({
  Component,
  pageProps,
}: AppProps) {
  return (
    <WagmiProvider autoConnect connectors={connectors} provider={provider}>
      <RainbowKitProvider chains={chains} theme={darkTheme()}>
        <GlobalStyles />
        <MediaConfiguration
          networkId={NETWORK_ID as NetworkIDs}
          style={mediaConfigurationStyles}
        >
          <Header />
          <NProgress color='#000000' showAfterMs={300} spinner={false} />
          <main>
            <Component {...pageProps} />
          </main>
          <Footer />
        </MediaConfiguration>
      </RainbowKitProvider>
    </WagmiProvider>
  )
}
