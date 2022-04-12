import React, { useState } from "react"
import axios from "axios"
import styled from "styled-components"
import { SmallText2 } from "../styles/TextStyles"
import Losenge from "../buttons/losenge"

const ContactForm = props => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
    }
  }
  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    axios({
      method: "post",
      url: "https://getform.io/f/ccb0f400-fb48-4670-9022-eabf72706a6f",
      data: new FormData(form),
    })
      .then(r => {
        handleServerResponse(
          true,
          <Losenge
            tagTitle="Sorted! We'll get back you soon"
            icon="/images/icons/verified.svg"
          />,
          form
        )
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }
  return (
    <FormWrapper>
      <InnerWrapper>
      <Subtitle>Register for early access today</Subtitle>
        <form
          onSubmit={handleOnSubmit}
          // action="https://getform.io/f/ccb0f400-fb48-4670-9022-eabf72706a6f"
        >
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email address"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={serverState.submitting}
          >
            Sign me up
          </button>
          {serverState.status && (
            <p className={!serverState.status.ok ? "errorMsg" : ""}>
              {serverState.status.msg}
            </p>
          )}
        </form>
      </InnerWrapper>
    </FormWrapper>
  )
}

export default ContactForm

// const Wrapper = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100vh;
//   background-color: rgba(15, 32, 40, 0.8);
//   justify-content: center;
//   align-items: center;
//   display: flex;
//   opacity: ${props => (props.isOpen ? 1 : 0)};
//   transition: 0.3s ease-in-out;
//   visibility: ${props => (props.isOpen ? "visible" : "hidden")};
// `

const FormWrapper = styled.div`
width: 100%;
@media (max-width: 1354px) {
  width: 454px;
  margin: auto;
  }

@media (max-width: 480px) {
  width: 345px;
  margin: auto;
  }
`

const InnerWrapper = styled.div``

const Subtitle = styled(SmallText2)`
  color: #E8B247;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
  text-align: center;
  margin-bottom: 16px;
`
