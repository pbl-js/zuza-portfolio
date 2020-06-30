import styled, { css } from "styled-components"
import { fontSize, fontWeight } from "utils/typography"

const InfoBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  padding: 15px;
  background-color: var(--primary-color);
  border: 2px solid var(--secondary-color);
  color: var(--secondary-color);
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
    background-color: var(--secondary-color);
    /* border: 4px solid var(--secondary-color); */
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
    background-color: var(--secondary-color);
  }

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: var(--secondary-color);
      color: var(--primary-color);

      &::after {
        position: absolute;
        bottom: calc(-15px - 2px);
        left: 6px;
        height: 15px;
        width: calc(100% + 4px);
        transform: skewX(45deg);
        content: "";
        display: block;
        background-color: var(--primary-color);
        border: 2px solid var(--secondary-color);
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
        background-color: var(--primary-color);
        border: 2px solid var(--secondary-color);
      }
    `}
`

export default InfoBox
