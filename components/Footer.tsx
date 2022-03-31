import { css } from "@emotion/react"
import { Zorb } from "./Zorb"
import { CONTRACT_ADDRESSES } from "../utils/env-vars"
import { useCallback, useState } from "react"

export const Footer = () => {
  const [isHovered, setIsHovered] = useState(false)
  
  const hoverHandler = useCallback((state: boolean) => {
    setIsHovered(state)
  }, [isHovered])

  return (
    <footer className='flex-row' css={css`
      align-items: center;
    `}>
      <a
        target='_blank'
        href='https://zora.co'
        rel='noreferrer'
        className='zora-branding'
        onMouseEnter={() => hoverHandler(true)}
        onMouseLeave={() => hoverHandler(false)}
      >
        <Zorb address={CONTRACT_ADDRESSES} />
      </a>
      <span
        className="text-01"
        css={css`
          pointer-events: none;
          opacity: ${isHovered ? '1' : '0'};
          transition: all 300ms ease-in;
        `}
        style={{transform: `translateX(${isHovered ? '0' : '15px'})`}}
      >
        Powered by Zora
      </span>
    </footer>
  )
}
