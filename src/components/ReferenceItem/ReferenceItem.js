import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"

const StyledWrapper = styled.div`
  height: 100%;
  width: 300px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    color: var(--secondary-color);
    padding-bottom: 20px;
    opacity: 0.6;
  }

  div {
    color: var(--secondary-color);
    border-top: 1px solid;
    display: flex;
    align-items: center;
    padding-top: 20px;
    width: 100%;
    div {
      border: 0;
    }
  }

  h4 {
    margin-left: 20px;
    color: var(--secondary-color);
  }
`

const ReferenceItem = ({ children, companyname, image }) => {
  return (
    <StyledWrapper>
      <p>{children}</p>
      <div>
        <Image fixed={image.fixed} />
        <h4>{companyname} </h4>
      </div>
    </StyledWrapper>
  )
}

export default ReferenceItem
