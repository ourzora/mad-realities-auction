export const NETWORK_ID = process.env.NEXT_PUBLIC_NETWORK_ID
if (!NETWORK_ID) {
  throw new Error('NetworkID is required.')
}

export const CURATOR_ID = process.env.NEXT_PUBLIC_CURATOR_ID

export const CONTRACT_ADDRESSES =
  process.env.NEXT_PUBLIC_NETWORK_ID === '1'
    ? (process.env.NEXT_PUBLIC_MAINNET_CONTRACTS as string)
    : (process.env.NEXT_PUBLIC_TESTNET_CONTRACTS as string)

export const CONDOM_CONTRACT_ADDRESS =
  process.env.NEXT_PUBLIC_NETWORK_ID === '1'
    ? (process.env.NEXT_PUBLIC_CONDOM_MAINNET_CONTRACT_ADDRESS as string)
    : (process.env.NEXT_PUBLIC_CONDOM_TESTNET_CONTRACT_ADDRESS as string)

if (!CURATOR_ID && !CONTRACT_ADDRESSES) {
  throw new Error('At least one of curator id or contract address is required')
}

export const APP_TITLE = process.env.NEXT_PUBLIC_APP_TITLE
export const APP_DESCRIPTION = process.env.NEXT_PUBLIC_DEFAULT_DESCRIPTION || ''
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || ''
export const DEFAULT_OG_CARD = `${BASE_URL}/mad_house_link_preview.png`
export const FAVICON = `${BASE_URL}/mad-icon.png`

export const RPC_URL: string | undefined = process.env.NEXT_PUBLIC_RPC_URL
export const INFURA_ID: string | undefined = process.env.NEXT_PUBLIC_INFURA_ID

export const LANDING_HERO_TOKEN =
  process.env.NEXT_PUBLIC_FEATURED_AUCTION_ID === undefined
    ? undefined
    : process.env.NEXT_PUBLIC_FEATURED_AUCTION_ID

export const AUCTION_LIVE =
  process.env.NEXT_PUBLIC_AUCTION_LIVE === undefined
    ? false
    : process.env.NEXT_PUBLIC_AUCTION_LIVE
