import React, { useState } from "react"
import { useFormik } from "formik"
import axios from "axios"

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
  const [submiting, setSubmiting] = useState(false)
  const [messageConfirm, setMessageConfirm] = useState("")

  const initialValues = {
    email: "",
    message: "",
  }

  const onSubmit = values => {
    setSubmiting(true)
    setMessageConfirm("")
    axios
      .post(
        "https://us-central1-zuza-portfolio.cloudfunctions.net/sendEmail",
        formik.values
      )
      .then(res => {
        setSubmiting(false)
        setMessageConfirm("Message succesfully sent")
      })
      .catch(err => {
        setSubmiting(false)
        setMessageConfirm("Message error. Use contact data")
      })
  }

  const validate = values => {
    let errors = {}

    if (!values.message) {
      errors.message = "Message is required"
    }

    if (!values.email) {
      errors.email = "Email is required"
    }

    return errors
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  })

  return (
    <SectionWrapper id={id} color={color} forwardRef={forwardRef}>
      <MainWrapper>
        <InnerWrapper>
          <HeadingWrapper>
            <StyledHeading stroke="stroke">Contact data</StyledHeading>
            <p>
              Message me for details on pricing and available content packages.
              I reply within two working days
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
            {/* <p>
              Zostaw nam krótką wiadomość, a oddzwonimy do Ciebie w dogodnym dla
              Ciebie terminie.
            </p> */}
          </HeadingWrapper>

          <StyledForm onSubmit={formik.handleSubmit}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
            />
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              onChange={formik.handleChange}
              value={formik.values.message}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email && (
              <div>{formik.errors.email}</div>
            )}
            {formik.errors.message && formik.touched.message && (
              <div>{formik.errors.message}</div>
            )}
            <button type="submit">{submiting ? "Sending" : "Send"}</button>

            {messageConfirm && <div>{messageConfirm}</div>}
          </StyledForm>
        </InnerWrapper>
      </MainWrapper>
    </SectionWrapper>
  )
}

export default Contact
