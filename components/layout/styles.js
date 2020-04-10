import styled, { css } from "styled-components"

export const LayoutStyled = styled.main`
  margin: 0;
  font-family: Roboto, system-ui, sans-serif;
  width: 100%;
  margin: 0 auto;
`

export const LayoutBodyStyled = styled.main`
  min-height: calc(100vh - 80px);
  max-width: calc(1048px + 40px);
  margin: 0 auto;
  padding: 0 20px;
  padding-bottom: 1px;
  ${({ splitView }) =>
    splitView &&
    css`
      @media all and (min-width: 768px) {
        display: flex;
      }
    `}
`
