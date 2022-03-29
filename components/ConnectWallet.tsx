import { useWalletButton } from '@zoralabs/simple-wallet-provider'

// Add ENS, username etc...
export const ConnectWallet = () => {
  const { buttonAction, actionText, account, active } = useWalletButton()
  return (
    <div>
      <button className='button' onClick={() => buttonAction()}>
        {active ? account?.addressShortened : actionText}
      </button>
    </div>
  )
}
