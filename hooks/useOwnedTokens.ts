/* Show user owned tokens of a contract */
import useSWR from 'swr'
import { useWalletButton } from '@zoralabs/simple-wallet-provider'

export const useOwnedTokens = () => {
  const { account } = useWalletButton()

  const { data, error } = useSWR(
    `/api/ownedItems?owner=${account?.address}`,
    (url: string) => fetch(url).then((res) => res.json())
  )

  return {
    data,
    error,
  }
}
