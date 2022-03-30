import styled from '@emotion/styled'

interface PageWrapperProps {
  grid?: boolean
}

export const PageWrapper = styled.section<PageWrapperProps>`
  margin: 0 auto;
  width: 100%;
  max-width: '100%';
  position: relative;
  padding: var(--space-sm);
  display: flex;
  flex-direction: column;
  margin-bottom: var(--footer-height);
`
