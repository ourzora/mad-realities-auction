import { css } from '@emotion/react'
import { getStaticTokens } from '../services/getStaticTokens'
import { PageWrapper } from '../styles/components'
import { Head } from '../components/HeadMeta'
import { useCountdown } from '../hooks/useCountdown'
import { useTokens } from '../hooks/useTokens'
import { funkyHeader } from '../styles/mixins'
import { useCallback, useEffect, useState } from 'react'
import { MintModal } from '../components/mint/MintModal'
import { AnimatePresence } from 'framer-motion'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'

export default function Home({
  metaImage,
  metaDescription,
  metaTitle,
}: {
  metaImage: string | undefined
  metaDescription: string | undefined
  metaTitle: string | undefined
}) {
  const [accountData] = useAccount()
  const [shouldMint, setShouldMint] = useState(false)
  const [showMintModal, setShowMintModal] = useState(false)

  const { countdownText } = useCountdown(new Date(1651634876374).toString())
  const [{ isLoading: tokensLoading, tokens }] = useTokens({
    url: `/api/metadata/`,
    reverse: false,
    start: 0,
    end: 10,
  })

  const handlePromptRainbow = useCallback((cb: () => void) => {
    setShouldMint(true)
    cb()
  }, [])

  useEffect(() => {
    if (!shouldMint || !accountData?.data?.address) {
      return
    }

    if (!showMintModal) {
      setShowMintModal(true)
      setShouldMint(false)
    }
  }, [accountData?.data?.address, shouldMint, showMintModal])

  return (
    <PageWrapper>
      <Head
        title={metaTitle}
        description={metaDescription}
        ogImage={metaImage}
      />
      <div className='drop-wrapper'>
        <div className='drop-header'>
          <div>
            <img src='/connie.png' css={{ marginBottom: '-30px' }} />
          </div>
          <div className='flex-between-col'>
            <div>
              <h2
                className='drop-header-header full-justify bold'
                css={{ padding: 0 }}
              >
                <span>LOSE</span> <span>&nbsp;YOUR</span>
              </h2>
              <h2
                className='drop-header-header full-justify bold'
                css={{ padding: 0 }}
              >
                <span>NFT</span>
                <span>&nbsp;VIRGINITY</span>
              </h2>
              <h2
                className='drop-header-subheader full-justify bold'
                css={{ paddingBottom: 0 }}
              >
                a condom for your wallet.
              </h2>
            </div>
            <br />
            <br />
            <div className='flex-row full-justify'>
              <dl className='text-02'>
                <dt>PRICE</dt>
                <dd>Free. Just pay gas.</dd>
                <dt>№ MINTED</dt>
                <dd>6,969</dd>
              </dl>
              <div>
                {accountData.data?.address ? (
                  <button
                    onClick={() => setShowMintModal(true)}
                    style={{
                      border: 0,
                      display: 'block',
                      position: 'relative',
                      bottom: '-16px',
                      maxWidth: '180px',
                      cursor: 'pointer',
                    }}
                  >
                    <img src='/button.png' />
                  </button>
                ) : (
                  <ConnectButton.Custom>
                    {({ openConnectModal }) => (
                      <button
                        onClick={() => handlePromptRainbow(openConnectModal)}
                        style={{
                          border: 0,
                          display: 'block',
                          position: 'relative',
                          bottom: '-16px',
                          maxWidth: '180px',
                          cursor: 'pointer',
                        }}
                      >
                        <img src='/button.png' />
                      </button>
                    )}
                  </ConnectButton.Custom>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className='center'>
          <h2
            css={css`
                ${funkyHeader};
                opacity: 1;
                transform: rotate(0deg);
                text-align: center;
                font-size: 10vw;
              }
              .zora-fullPageHistoryList {
                margin-top: var(--space-sm);
              }
            `}
          >
            {countdownText}
          </h2>
          <p>(mint only open for a limited window)</p>
        </div>

        <div className='center'>
          <h2 className='text-05 bold' css={{ paddingBottom: 0 }}>
            OWN A PART OF THE SHOW
          </h2>
          <h3 className='text-03'>
            we are making Proof of Love S0 CC0. it belongs to you, baby.{' '}
            <a href='#'>learn more here</a>
          </h3>
        </div>

        <div className='token-grid'>
          {tokensLoading
            ? 'Loading...'
            : tokens.map((token: any) => (
                <div className='token-grid-token'>
                  <a href={`/api/metadata/${token.tokenId}`}>MINT</a>
                  <img
                    src={token.image.replace(
                      'ipfs://',
                      'https://cloudflare-ipfs.com/ipfs/'
                    )}
                  />
                </div>
              ))}
        </div>

        <div className='drop-footer'>
          <div>
            <img src='/now_thats_a_mad_reality.png' />
            <h2 className='drop-footer-phone bold' css={{ padding: 0 }}>
              text MAD +1 (917) 810-3314 for updates
            </h2>
          </div>
          <div className='drop-footer-socials'>
            <a href='#'>
              {/* prettier-ignore */}
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M22.0049 10.719C15.762 10.719 10.7264 15.7557 10.7264 22C10.7264 28.2443 15.762 33.281 22.0049 33.281C28.2479 33.281 33.2834 28.2443 33.2834 22C33.2834 15.7557 28.2479 10.719 22.0049 10.719ZM22.0049 29.3342C17.9706 29.3342 14.6724 26.0451 14.6724 22C14.6724 17.9549 17.9607 14.6658 22.0049 14.6658C26.0491 14.6658 29.3374 17.9549 29.3374 22C29.3374 26.0451 26.0393 29.3342 22.0049 29.3342ZM36.3755 10.2575C36.3755 11.7204 35.1975 12.8888 33.7448 12.8888C32.2822 12.8888 31.1141 11.7106 31.1141 10.2575C31.1141 8.80442 32.292 7.62624 33.7448 7.62624C35.1975 7.62624 36.3755 8.80442 36.3755 10.2575ZM43.8454 12.928C43.6785 9.40333 42.8736 6.28116 40.292 3.7088C37.7202 1.13645 34.5988 0.331362 31.0748 0.154636C27.4429 -0.0515452 16.5571 -0.0515452 12.9252 0.154636C9.41104 0.321544 6.28957 1.12663 3.70798 3.69898C1.12638 6.27134 0.331288 9.39351 0.154601 12.9182C-0.0515337 16.5509 -0.0515337 27.4392 0.154601 31.072C0.321472 34.5967 1.12638 37.7188 3.70798 40.2912C6.28957 42.8635 9.40123 43.6686 12.9252 43.8454C16.5571 44.0515 27.4429 44.0515 31.0748 43.8454C34.5988 43.6785 37.7202 42.8734 40.292 40.2912C42.8638 37.7188 43.6687 34.5967 43.8454 31.072C44.0515 27.4392 44.0515 16.5607 43.8454 12.928ZM39.1534 34.9698C38.3877 36.8941 36.9055 38.3767 34.9718 39.1523C32.0761 40.301 25.2049 40.0359 22.0049 40.0359C18.8049 40.0359 11.9239 40.2912 9.03804 39.1523C7.11411 38.3865 5.6319 36.9039 4.85644 34.9698C3.70798 32.0734 3.97301 25.2007 3.97301 22C3.97301 18.7993 3.71779 11.9168 4.85644 9.03024C5.62209 7.10588 7.10429 5.62334 9.03804 4.84771C11.9337 3.69898 18.8049 3.96407 22.0049 3.96407C25.2049 3.96407 32.0859 3.7088 34.9718 4.84771C36.8957 5.61352 38.3779 7.09606 39.1534 9.03024C40.3018 11.9266 40.0368 18.7993 40.0368 22C40.0368 25.2007 40.3018 32.0832 39.1534 34.9698Z" fill="white"/> </svg>
            </a>
            <a href='#'>
              {/* prettier-ignore */}
              <svg width="51" height="41" viewBox="0 0 51 41" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M45.7577 10.2179C45.7901 10.6663 45.7901 11.1149 45.7901 11.5633C45.7901 25.2406 35.273 41 16.0508 41C10.1288 41 4.62757 39.3023 0 36.3555C0.841404 36.4516 1.65033 36.4836 2.52411 36.4836C7.41047 36.4836 11.9086 34.8501 15.5007 32.0633C10.9055 31.9672 7.05456 28.9883 5.72776 24.8883C6.37503 24.9843 7.02219 25.0484 7.70183 25.0484C8.64025 25.0484 9.57877 24.9202 10.4525 24.6961C5.66311 23.7351 2.07099 19.5711 2.07099 14.5422V14.4141C3.46244 15.1828 5.0806 15.6633 6.79558 15.7273C3.98021 13.8694 2.13573 10.6984 2.13573 7.11087C2.13573 5.18903 2.65341 3.42731 3.55956 1.8898C8.7049 8.16792 16.4391 12.2678 25.1116 12.7164C24.9499 11.9476 24.8527 11.1469 24.8527 10.3461C24.8527 4.64448 29.5127 0 35.3052 0C38.3147 0 41.033 1.24922 42.9423 3.26719C45.3045 2.81877 47.5697 1.95388 49.5762 0.768756C48.7994 3.17115 47.1491 5.18912 44.981 6.47029C47.0844 6.24618 49.1232 5.66949 51 4.86878C49.5764 6.9187 47.7965 8.74441 45.7577 10.2179Z" fill="white"/> </svg>
            </a>
            <a href='#'>
              {/* prettier-ignore */}
              <svg width="36" height="47" viewBox="0 0 36 47" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M23.8834 22.325C23.8834 23.7585 22.9577 24.9335 21.7851 24.9335C20.6331 24.9335 19.6869 23.7585 19.6869 22.325C19.6869 20.8915 20.6126 19.7165 21.7851 19.7165C22.9577 19.7165 23.8834 20.8915 23.8834 22.325ZM14.2766 19.7165C13.104 19.7165 12.1783 20.8915 12.1783 22.325C12.1783 23.7585 13.1246 24.9335 14.2766 24.9335C15.4491 24.9335 16.3749 23.7585 16.3749 22.325C16.3954 20.8915 15.4491 19.7165 14.2766 19.7165ZM36 4.841V47C30.8174 41.7681 32.4749 43.5 26.4549 37.1065L27.5451 41.454H4.21714C1.89257 41.454 0 39.292 0 36.613V4.841C0 2.162 1.89257 0 4.21714 0H31.7829C34.1074 0 36 2.162 36 4.841ZM30.1371 27.119C30.1371 19.552 27.1749 13.4185 27.1749 13.4185C24.2126 10.8805 21.3943 10.951 21.3943 10.951L21.1063 11.327C24.6034 12.549 26.2286 14.3115 26.2286 14.3115C21.342 11.252 15.6018 11.2515 10.8617 13.63C10.1006 14.0295 9.648 14.3115 9.648 14.3115C9.648 14.3115 11.3554 12.455 15.0583 11.233L14.8526 10.951C14.8526 10.951 12.0343 10.8805 9.072 13.4185C9.072 13.4185 6.10971 19.552 6.10971 27.119C6.10971 27.119 7.83771 30.5265 12.384 30.691C12.384 30.691 13.1451 29.6335 13.7623 28.7405C11.1497 27.8475 10.1623 25.9675 10.1623 25.9675C10.4649 26.2095 10.9639 26.5231 11.0057 26.555C14.4779 28.7763 19.4101 29.5041 23.8423 27.3775C24.5623 27.072 25.3646 26.6255 26.208 25.991C26.208 25.991 25.1794 27.918 22.4846 28.7875C23.1017 29.6805 23.8423 30.691 23.8423 30.691C28.3886 30.5265 30.1371 27.119 30.1371 27.119Z" fill="white"/> </svg>
            </a>
            <a href='#'>
              {/* prettier-ignore */}
              <svg width="44" height="47" viewBox="0 0 44 47" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7962 0.119741C11.1964 1.05855 3.87193 7.3176 1.13629 16.0654C-1.02772 22.9851 -0.0694096 30.5295 3.74304 36.5888C6.46816 40.9199 10.4228 44.141 15.0352 45.7864C21.514 48.0977 28.5778 47.0741 34.2511 43.0023C38.3062 40.0917 41.3221 35.868 42.8627 30.9417C45.0264 24.023 44.0728 16.508 40.2579 10.4147C35.762 3.23397 27.8294 -0.757227 19.7962 0.119741ZM23.5533 9.69958C23.8823 10.0017 23.8993 10.0758 23.958 11.4557L24.0192 12.8966L24.5543 13.31C25.4519 14.0032 27.1247 15.794 27.908 16.9001C29.4228 19.0395 29.9095 20.9226 29.3973 22.6619C29.0917 23.6994 28.1879 25.128 27.0031 26.4462L26.0051 27.5564H24.9815H23.958V28.7983V30.0403H25.4961C26.3826 30.0403 27.1475 29.9787 27.3016 29.8949C27.4486 29.8151 27.9595 29.3405 28.4369 28.8404L29.3048 27.9312L32.6539 26.8939C34.4959 26.3235 36.1021 25.8568 36.2231 25.8568C36.4152 25.8568 36.4434 25.9797 36.4434 26.8175V27.7781L35.9237 28.0268C35.6379 28.1635 35.082 28.5045 34.6884 28.7845C34.058 29.2329 33.8082 29.5603 32.5937 31.5299C31.1832 33.8171 30.5089 34.6274 29.5702 35.1624L29.0378 35.4658L22.3789 35.5028C16.0426 35.5381 15.6727 35.5271 14.744 35.2762C12.6871 34.7208 10.9478 33.2214 10.0141 31.199C9.48533 30.0534 9.10906 28.4899 9.17136 27.6969L9.20809 27.2295L12.602 27.1948L15.996 27.16L16.052 27.4562C16.0829 27.6191 16.1366 27.9785 16.1714 28.2549C16.2503 28.8815 16.7133 29.5447 17.2679 29.8258C17.6022 29.9952 18.0796 30.0403 19.5392 30.0403H21.3875V28.7983V27.5564H19.735C17.812 27.5564 17.8201 27.5642 18.5539 26.4052C19.3034 25.2216 20.0182 23.7516 20.3481 22.7155C21.0849 20.4023 20.5145 17.0345 18.6951 12.9554C18.3043 12.0793 18.0098 11.3357 18.0406 11.3028C18.0714 11.27 18.7958 11.4423 19.6501 11.6858C20.5047 11.9294 21.2452 12.1289 21.2956 12.1292C21.3461 12.1294 21.3894 11.7326 21.3917 11.2472C21.3942 10.7618 21.4691 10.2242 21.5583 10.0523C21.9266 9.34242 22.9645 9.159 23.5533 9.69958ZM17.5917 16.0176C18.2688 18.0054 18.4806 19.0291 18.4916 20.366C18.5027 21.7083 18.4044 22.049 17.4827 23.8653L17.067 24.6845L13.9332 24.6497C11.1524 24.6188 10.801 24.5913 10.8132 24.4062C10.8251 24.2285 12.9877 20.5405 15.9776 15.5994C16.765 14.2979 16.7657 14.2973 16.9835 14.5847C17.1034 14.7428 17.3771 15.3877 17.5917 16.0176Z" fill="white"/> </svg>
            </a>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {showMintModal && <MintModal onClose={() => setShowMintModal(false)} />}
      </AnimatePresence>
    </PageWrapper>
  )
}

export const getStaticProps = getStaticTokens
