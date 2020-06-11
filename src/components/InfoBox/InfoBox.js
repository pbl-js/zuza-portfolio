import styled, { css } from "styled-components"
import { fontSize, fontWeight } from "utils/typography"

const InfoBox = styled.div`
  position: relative;
  width: 50%;
  max-width: 400px;
  padding: 15px;
  background-color: ${({ theme }) => theme.light};
  border: 2px solid ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.dark};
  margin: auto 0;
  font-size: ${fontSize.l};
  font-weight: ${fontWeight.semiBold};
  box-shadow: 5px 5px 5px black;

  &::after {
    position: absolute;
    bottom: calc(-15px - 2px);
    left: 6px;
    height: 15px;
    width: calc(100% + 4px);
    transform: skewX(45deg);
    content: "";
    display: block;
    background-color: ${({ theme }) => theme.dark};
    /* border: 4px solid ${({ theme }) => theme.dark}; */
  }

  &::before {
    position: absolute;
    top: 6px;
    right: calc(-15px - 2px);
    height: calc(100% + 4px);
    width: 15px;
    transform: skewY(45deg);
    content: "";
    display: block;
    background-color: ${({ theme }) => theme.dark};
    /* border: 4px solid ${({ theme }) => theme.dark}; */
  }

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.dark};
      color: ${({ theme }) => theme.light};

      &::after {
        position: absolute;
        bottom: calc(-15px - 2px);
        left: 6px;
        height: 15px;
        width: calc(100% + 4px);
        transform: skewX(45deg);
        content: "";
        display: block;
        background-color: ${({ theme }) => theme.light};
        border: 2px solid ${({ theme }) => theme.dark};
      }

      &::before {
        position: absolute;
        top: 6px;
        right: calc(-15px - 2px);
        height: calc(100% + 4px);
        width: 15px;
        transform: skewY(45deg);
        content: "";
        display: block;
        background-color: ${({ theme }) => theme.light};
        border: 2px solid ${({ theme }) => theme.dark};
      }
    `}
`

export default InfoBox
