import styled from '@emotion/styled'
import { media } from './mixins'

interface PageWrapperProps {
  grid?: boolean
}

export const PageWrapper = styled.section<PageWrapperProps>`
  margin: 0 auto;
  width: 100%;
  max-width: '100%';
  position: relative;
  padding: 0 var(--space-md);
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
  ${media.laptop`
    margin-bottom: calc(var(--footer-height) * 2);
  `}
`
