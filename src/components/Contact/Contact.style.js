import styled from "styled-components"
import { SIZES } from "utils/mediaQueries"
import { fontSize, fontWeight } from "utils/typography"
import { strokeText } from "utils/styledMixins"
import Mail from "images/mail.svg"
import Phone from "images/phone.svg"
import Linkedin from "images/linkedin.svg"

export const MainWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 100px;
  grid-template-columns: 1fr;

  @media ${SIZES.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`

export const HeadingWrapper = styled.div`
  color: ${({ theme }) => theme.dark};
  font-size: ${fontSize.s};
  font-weight: ${fontWeight.medium};
  margin-bottom: 40px;
`

export const StyledHeading = styled.h1`
  ${strokeText};
  font-size: ${fontSize.xxl};
`

export const InnerWrapper = styled.div``

export const StyledList = styled.ul`
  list-style: none;
  li {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.dark};
    font-size: ${fontSize.s};
    font-weight: ${fontWeight.medium};

    a {
      font-size: ${fontSize.s};
      font-weight: ${fontWeight.medium};
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.dark};
    }

    svg {
      width: 50px;
      height: 50px;
      margin-right: 20px;
      fill: ${({ theme }) => theme.light};
      background-color: ${({ theme }) => theme.dark};
      padding: 10px;
    }
  }
`

export const StyledMail = styled(Mail)``
export const StyledPhone = styled(Phone)``
export const StyledLinkedin = styled(Linkedin)``

export const StyledForm = styled.form`
  display: grid;
  grid-gap: 20px;
  color: ${({ theme }) => theme.dark};

  input {
    width: 100%;
    padding: 15px;
    background: transparent;
    border: 2px solid ${({ theme }) => theme.dark};
    color: ${({ theme }) => theme.dark};
    font-size: ${fontSize.s};
    font-weight: ${fontWeight.regular};
    ::placeholder {
      color: ${({ theme }) => theme.dark};
      font-size: ${fontSize.s};
      font-weight: ${fontWeight.regular};
    }
  }

  textarea {
    height: 300px;
    width: 100%;
    padding: 15px;
    background: transparent;
    border: 2px solid ${({ theme }) => theme.dark};
    color: ${({ theme }) => theme.dark};
    font-size: ${fontSize.s};
    font-weight: ${fontWeight.regular};
    ::placeholder {
      color: ${({ theme }) => theme.dark};
      font-size: ${fontSize.s};
      font-weight: ${fontWeight.regular};
    }
    resize: none;
  }

  button {
    padding: 15px;
    width: 150px;
    background-color: ${({ theme }) => theme.dark};
    color: ${({ theme }) => theme.light};
    font-size: ${fontSize.s};
    font-weight: ${fontWeight.regular};
    border: 0;
    cursor: pointer;
  }
`
