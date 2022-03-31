import { css } from '@emotion/react'
import { useMemo } from 'react'
import { gradientForAddress } from './../utils/gradient'

export interface ZorbProps {
  address?: string
  size?: string | number
}

export const Zorb = ({
  address,
  size = 35,
}: ZorbProps) => {

  const background = useMemo(() => {
    if (address) {
      const gradient = gradientForAddress(address)
      return `radial-gradient(75.29% 75.29% at 64.96% 24.36%, ${gradient[0]} 15.62%, ${gradient[1]} 39.58%, ${gradient[2]} 72.92%, ${gradient[3]} 90.62%, ${gradient[4]} 100%)`
    } else {
      return `transparent`
    }
  }, [address])

  return (
    <div
      css={css`
        height: ${size}px;
        width: ${size}px;
        background: ${background};
        position: relative;
        overflow: hidden;
        border-radius: 300px;
        display: block;
      `}
    />
  )
}
