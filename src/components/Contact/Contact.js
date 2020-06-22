import React from "react"

import SectionWrapper from "components/SectionWrapper/SectionWrapper"
import {
  MainWrapper,
  HeadingWrapper,
  StyledHeading,
  InnerWrapper,
  StyledList,
  StyledMail,
  StyledPhone,
  StyledLinkedin,
  StyledForm,
} from "./Contact.style"

const Contact = ({ id, color, forwardRef, contactData }) => {
  console.log(contactData)
  return (
    <SectionWrapper id={id} color={color} forwardRef={forwardRef}>
      <MainWrapper>
        <InnerWrapper>
          <HeadingWrapper>
            <StyledHeading stroke="stroke">Contact data</StyledHeading>
            <p>
              Zostaw nam krótką wiadomość, a oddzwonimy do Ciebie w dogodnym dla
              Ciebie terminie.
            </p>
          </HeadingWrapper>

          <StyledList>
            <li>
              <a href={`mailto:${contactData.email}`}>
                <StyledMail />
                {contactData.email}
              </a>
            </li>

            <li>
              <a href={`tel:${contactData.phone}`}>
                <StyledPhone />
                {contactData.phone}
              </a>
            </li>

            <li>
              <a href={contactData.linkedin} target="_blank">
                <StyledLinkedin />
                Show profile
              </a>
            </li>
          </StyledList>
        </InnerWrapper>

        <InnerWrapper>
          <HeadingWrapper>
            <StyledHeading stroke="stroke">Write to me</StyledHeading>
            <p>
              Zostaw nam krótką wiadomość, a oddzwonimy do Ciebie w dogodnym dla
              Ciebie terminie.
            </p>
          </HeadingWrapper>

          <StyledForm>
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message" />
            <button>Send</button>
          </StyledForm>
        </InnerWrapper>
      </MainWrapper>
    </SectionWrapper>
  )
}

export default Contact
