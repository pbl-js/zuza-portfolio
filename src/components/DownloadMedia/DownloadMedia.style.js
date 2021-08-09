import styled from "styled-components"
import { fontSize, fontWeight } from "utils/typography"
import { SIZES } from "utils/mediaQueries"

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
`

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`

export const Description = styled.div`
  max-width: 800px;
  margin: 0 20px 0 20px;
  margin-top: 10px;
  text-align: center;
  color: var(--secondary-color);

  font-size: ${fontSize.xs};
  font-weight: ${fontWeight.medium};

  @media ${SIZES.tablet} {
    font-size: ${fontSize.m};
    font-weight: ${fontWeight.medium};
  }
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  max-width: 500px;
  margin-top: 20px;
  margin-bottom: 50px;
  color: var(--secondary-color);

  input {
    width: 100%;
    padding: 15px;
    margin-right: 20px;
    background: transparent;
    border: 2px solid var(--secondary-color);
    color: var(--secondary-color);
    font-size: ${fontSize.s};
    font-weight: ${fontWeight.regular};
    ::placeholder {
      color: var(--secondary-color);
      font-size: ${fontSize.s};
      font-weight: ${fontWeight.regular};
    }
  }

  button {
    padding: 15px;
    width: 150px;
    background-color: var(--secondary-color);
    color: var(--primary-color);
    font-size: ${fontSize.s};
    font-weight: ${fontWeight.regular};
    border: 0;
    cursor: pointer;
  }
`
