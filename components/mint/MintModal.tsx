import { useCallback, useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { DialogContent, DialogOverlay } from '@reach/dialog'
import { useContractWrite, useWaitForTransaction } from 'wagmi'
import DropsContractABI from '../../abis/DropsContractABI.json'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { CONDOM_CONTRACT_ADDRESS, NETWORK_ID } from '../../utils/env-vars'
import { Cross1Icon } from '@radix-ui/react-icons'
import SquareLoader from "react-spinners/SquareLoader";

console.log({ NETWORK_ID })
export const ETHERSCAN_BASE_URL =
  NETWORK_ID === '1' ? 'https://etherscan.io' : 'https://rinkeby.etherscan.io'

interface MintModalProps {
  onClose: () => void
}

const loadingColors = [
  '#4AACE9',
  '#6FC43B',
  '#EC3F8B'
]

export function MintModal({ onClose }: MintModalProps) {
  const [loadingColorStateIndex, setLoadingColorStateIndex] = useState(0);
  useEffect(() => {
    const id = setTimeout(
      () => setLoadingColorStateIndex((loadingColorStateIndex + 1) % loadingColors.length),
      1400
    );
    return () => {
      clearInterval(id); // removes React warning when gets unmounted
    };
  }, [loadingColorStateIndex]);

  const [purchaseData, purchase] = useContractWrite(
    {
      addressOrName: CONDOM_CONTRACT_ADDRESS,
      contractInterface: DropsContractABI.abi,
    },
    'purchase'
  )

  const [transactionData] = useWaitForTransaction({
    hash: purchaseData.data?.hash,
    confirmations: 1,
  })

  const txError = useMemo(
    () =>
      purchaseData?.error?.message?.includes('Too many')
        ? 'You can only mint 1 nft per wallet'
        : purchaseData?.error?.message ||
          'An unknown error has occurred, try again.',
    [purchaseData]
  )

  const handlePurchase = useCallback(async () => {
    try {
      await purchase({
        args: [1],
      })
    } catch (e) {
      console.error(e)
    }
  }, [purchase])

  useEffect(() => {
    if (purchaseData.loading) {
      return
    }
    handlePurchase().then()
  }, [])

  return (
    <MotionDialogOverlay
      isOpen
      onDismiss={onClose}
      initial={{
        opacity: 0,
      }}
      transition={{
        type: 'spring',
      }}
      animate={{
        opacity: 1,
        transition: {
          when: 'beforeChildren',
          duration: 0.15,
        },
      }}
      exit={{
        transition: {
          duration: 0.1,
        },
        opacity: 0,
      }}
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        padding: 0,
        margin: 0,
        zIndex: 999,
        overflow: 'auto',
        background: 'rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(5px)',
        display: 'flex',
      }}
    >
      <MotionDialogContent
        initial={{ opacity: 0, transform: 'scale(0.8s5)' }}
        animate={{
          opacity: 1,
          transform: 'scale(1)',
          transition: {
            type: 'linear',
            duration: 0.1,
          },
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.1,
          },
        }}
        transition={{ duration: 0.1, type: 'tween' }}
        style={{
          display: 'flex',
          flex: 'auto',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          width: '100%',
          margin: 'auto',
          borderRadius: 10,
          padding: 20,
          maxWidth: 400,
          minHeight: 250,
          background: '#1E1E1E',
          position: 'relative',
          boxShadow:
            '0px 2.7px 3px -2.5px rgba(0, 0, 0, 0.1), 0px 1.1px 1.2px -1.3px rgba(0, 0, 0, 0.1), 0px 0.7px 0.8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div
          css={css`
            width: 100%;
            height: 100%;
            position: relative;
            flex: 1 0 auto;
          `}
        >
          <div
            css={css`
              width: 100%;
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              margin-bottom: 20px;
            `}
          >
            {purchaseData.loading
              ? 'Approve Minting Request'
              : purchaseData.error
              ? 'Transaction Failed'
              : transactionData.loading
              ? 'Transaction Pending'
              : 'Thank you for participating in Proof of Love S0 by Mad Realities! ur sexy'}
            {!transactionData.data && (
              <button
                onClick={onClose}
                css={css`
                  border: none;
                  :hover {
                    cursor: pointer;
                  }
                `}
              >
                <Cross1Icon height={15} width={15} />
              </button>
            )}
          </div>
          {purchaseData.loading ? (
            <>
              <ModalDescription>
                We sent a request to mint your nft onto the Ethereum blockchain.
                Approve the request in your wallet to continue.
              </ModalDescription>
              <LoadingCondom>
                <SquareLoader color={loadingColors[loadingColorStateIndex]} loading={true} size={35} />
              </LoadingCondom>
              <ModalDescription
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 0,
                  width: '100%',
                }}
              >
              
                Gas fees apply when minting.
                <button type="button" className="bg-indigo-500 ..." disabled>
                  <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
                  Processing...
                </button>
              </ModalDescription>

            </>
          ) : purchaseData.error ? (
            <>
              <ModalDescription>
                An error occurred from the blockchain:
                <div> {txError}</div>
              </ModalDescription>
              <ModalButton onClick={handlePurchase}>Retry</ModalButton>
            </>
          ) : transactionData.loading ? (
            <>
              <ModalDescription>
                Your transaction has been broadcast onto the Ethereum
                blockchain. Please wait for your transaction to confirm.
              </ModalDescription>
              <LoadingCondom>
                <SquareLoader color={loadingColors[loadingColorStateIndex]} loading={true} size={35} />
              </LoadingCondom>
              <EtherscanLink
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 0,
                  width: '100%',
                  color: "#5DADE2",
                  textDecoration: 'underline'
                }}
                href={`${ETHERSCAN_BASE_URL}/tx/${purchaseData.data?.hash}`}
                target='_blank'
              >
                View your transaction {'->'}
              </EtherscanLink>
            </>
          ) : (
            <>
              <div>
                <img
                  src='/connie.png'
                  css={{ height: 'auto', width: '70%' }}
                />
              </div>
              <ModalDescription css={{ marginBottom: 20 }}>
                A token of appreciation from us to you. This condom NFT is the first step down the Mad Realities rabbithole. It is your key to drops and events for summer 2022 and is our way of knowing who has participated in our universe so far. While Proof of Love may be coming to an end, this is just the start of Mad Realities. Crypto responsibly, kids.
                {/* Make sure to vote by texting our hotline to unlock your condom's powers. <br/>
                <br/>
                CHLOE or HARRISON <br/>
                ALEX or NATALIE <br/>
                DYLAN or PETER <br/>
                MOLLY or ANNALISA <br/>
                <br/>
                to +1 (917) 810-3314
                <br /> */}
              </ModalDescription>
              <ModalButton css={{ position: 'relative' }} onClick={onClose}>
                Close
              </ModalButton>
            </>
          )}
        </div>
      </MotionDialogContent>
    </MotionDialogOverlay>
  )
}

const MotionDialogOverlay = motion(DialogOverlay)
const MotionDialogContent = motion(DialogContent)
const ModalDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  font-style: normal;
  font-weight: lighter;
  font-size: 15px;
  line-height: 25px;
  color: #999999;
`
const EtherscanLink = styled.a`
  width: 100%;
  padding: 0;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 25px;
  color: #616161;
  text-transform: uppercase;
`

const LoadingCondom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 5;
  margin: 5;
  font-style: normal;
  font-weight: lighter;
  font-size: 15px;
  line-height: 25px;
  color: #999999;
  align-items: center;
`

const ModalButton = styled.button`
  background: #333333;
  cursor: pointer;
  border-radius: 4px;
  padding: 10px;
  width: 100%;
  color: #fff;
  text-align: center;
  font-style: normal;
  font-weight: 600;
  border: 0;
  font-size: 16px;
  line-height: 25px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`