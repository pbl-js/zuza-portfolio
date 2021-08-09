import React, { useState } from "react"
import { useFormik } from "formik"
import axios from "axios"
import {
  StyledForm,
  StyledWrapper,
  InnerWrapper,
  Description,
} from "./DownloadMedia.style"
import { StyledH1 } from "../About/About.style"

const DownloadMedia = ({
  fileToDownload: {
    websiteHeaderTitle,
    websiteHeaderMessage,
    emailSubject,
    emailMessage,
    file,
  },
}) => {
  const [submiting, setSubmiting] = useState(false)
  const [messageConfirm, setMessageConfirm] = useState("")

  const initialValues = {
    email: "",
  }

  const messageObject = {
    subject: emailSubject,
    text: `${emailMessage}: ${file.url}`,
  }

  const onSubmit = values => {
    setSubmiting(true)
    setMessageConfirm("")
    axios
      .post(
        "https://us-central1-zuza-portfolio.cloudfunctions.net/sendLinkToDownload",
        { ...messageObject, email: formik.values.email }
      )
      .then(res => {
        setSubmiting(false)
        setMessageConfirm("Email succesfully sent")
      })
      .catch(err => {
        setSubmiting(false)
        setMessageConfirm(
          "Message error. Write to me: zuzanazarukwrites@gmail.com"
        )
      })
  }

  const validate = values => {
    let errors = {}

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
    <StyledWrapper>
      <StyledH1 stroke="stroke">
        <span>{websiteHeaderTitle}</span>
      </StyledH1>

      <Description>{websiteHeaderMessage}</Description>

      <StyledForm onSubmit={formik.handleSubmit}>
        <InnerWrapper>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />

          <button type="submit">{submiting ? "Sending" : "Send"}</button>
        </InnerWrapper>

        {formik.errors.email && formik.touched.email && (
          <div>{formik.errors.email}</div>
        )}
        {messageConfirm && <div>{messageConfirm}</div>}
      </StyledForm>
    </StyledWrapper>
  )
}

export default DownloadMedia
