import { css } from '@emotion/react'
import { returnBreakpoint } from './breakpoints'

export const media = {
  mobile: (...args: [TemplateStringsArray]) => css`
    @media (min-width: ${returnBreakpoint('mobile')}) {
      ${css(...args)}
    }
  `,
  tablet: (...args: [TemplateStringsArray]) => css`
    @media (min-width: ${returnBreakpoint('tablet')}) {
      ${css(...args)}
    }
  `,
  laptop: (...args: [TemplateStringsArray]) => css`
    @media (min-width: ${returnBreakpoint('laptop')}) {
      ${css(...args)}
    }
  `,
  desktop: (...args: [TemplateStringsArray]) => css`
    @media (min-width: ${returnBreakpoint('desktop')}) {
      ${css(...args)}
    }
  `,
  xl: (...args: [TemplateStringsArray]) => css`
    @media (min-width: ${returnBreakpoint('xl')}) {
      ${css(...args)}
    }
  `,
  hover: (...args: [TemplateStringsArray]) => css`
    @media (hover: hover) {
      &:hover {
        ${css(...args)}
      }
    }
  `,
  canHover: (...args: [TemplateStringsArray]) => css`
    @media (hover: hover) {
      ${css(...args)}
    }
  `,
  noHover: (...args: [TemplateStringsArray]) => css`
    @media (hover: none) {
      ${css(...args)}
    }
  `,
}

export const absoluteCentered = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto !important;
`

export const absoluteFullCentered = css`
  width: 100%;
  height: 100%;
  ${absoluteCentered};
`

export const buttonInit = css`
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-appearance: none;
  border: 0;
  background-color: rgba(255, 255, 255, 0);
  text-decoration: none;
  cursor: pointer;
`

export const buttonStyle = css`
  ${buttonInit};
  color: var(--black);
  background: var(--green-gradient);
  margin: 0 auto;
  position: relative;
  display: block;
  padding: var(--base-unit) var(--space-md);
  font-size: var(--text-01);
  border-radius: 50rem;
  text-align: center;
  ${media.hover`
    background: linear-gradient(90deg, rgba(29,246,253,1) 30%, rgba(166,252,69,1) 100%);
  `}
`

export const smallPillButton = css`
  ${buttonInit};
  border: 2px solid var(--color-a);
  font-size: var(--text-01);
  font-family: var(--helvetica);
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  background-color: transparent;
  color: var(--color-b);
  background-color: var(--color-a);
  text-transform: uppercase;
  transition: all 0ms!important;
  ${media.hover`
    color: var(--color-a);
    background-color: var(--color-b);
  `}
`

export const pixelScaleImage = css`
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
`

export const funkyWrapper = css`
  width: 100%;
  max-width: 960px;
  margin: auto;
  background-color: var(--color-a);
  padding: var(--space-sm) var(--space-md) var(--space-md);
  border-radius: var(--space-md);
  margin-top: var(--space-lg);
  gap: var(--space-sm);
  display: flex;
  flex-direction: column;
  box-shadow: var(--dark-shadow);
`

// FORM ELEMENTS
export const inputStyle = css`
  appearance: none;
  width: 100%;
  border: none;
  color: inherit;
  opacity: 1;
  font-size: 20px;
  font-weight: 500;
  line-height: 1;
  &::placeholder {
    color: inherit;
    opacity: 0.65;
  }
  &:focus {
    outline: none;
    &::placeholder {
      opacity: 1;
    }
  }
`

export const funkyHeader = css`
  font-size: var(--text-04);
  font-family: var(--display-font)!important;
  text-shadow: var(--funky-text-shadow);
  margin: 0;
  padding-top: 0;
  transform: rotate(-2deg);
`
