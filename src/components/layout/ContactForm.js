import React, { useState } from "react"
import axios from "axios"
import styled from "styled-components"
import { H1, MediumText } from "../styles/TextStyles"
import Losenge from "../buttons/losenge"

const ContactForm = props => {
  const { isOpen } = props
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
    <FormWrapper isOpen={isOpen}>
      <InnerWrapper>
        <TextWrapper>
          <Title>Let's book you in</Title>
          <Subtitle>
            Flick us your details and our team will get back to you ASAP
          </Subtitle>
        </TextWrapper>
        <form
          onSubmit={handleOnSubmit}
          // action="https://getform.io/f/ccb0f400-fb48-4670-9022-eabf72706a6f"
        >
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" required="required">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputName">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="exampleInputName"
              placeholder="Enter your name"
              required="required"
            />
          </div>
          <FormGroup>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Preferred day</label>
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                name="Day"
                required="required"
              >
                <option selected="selected">Select day</option>
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect2">Time slot</label>
              <select
                className="form-control"
                id="exampleFormControlSelect2"
                name="Time"
                required="required"
              >
                <option selected="selected">Choose time</option>
                <option>Morning 8am-12pm</option>
                <option>Noon 12pm-1pm</option>
                <option>Arvo 1pm-5pm</option>
                <option>Night 6pm-8pm</option>
              </select>
            </div>
          </FormGroup>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={serverState.submitting}
          >
            GOOD TO GO
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
  position: fixed;
  top: 100px;
  left: 32%;
  background: rgba(21, 53, 73, 0.9);
  box-shadow: 0px 17px 20px -13px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  width: 588px;
  margin: auto;
  padding: 80px 80px;
  justify-content: center;
  display: grid;
  gap: 16px;
  border: 2px solid #789bb6;

  opacity: ${props => (props.isOpen ? 1 : 0)};
  transition: 0.3s ease-in-out;
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};

  @media (max-width: 1354px) {
    position: fixed;
    top: 150px;
    left: 14%;
  }

  @media (max-width: 480px) {
    position: fixed;
    top: 60px;
    left: 0px;
    width: 100%;
    padding: 24px 24px;
  }
`

const FormGroup = styled.div`
  display: grid;
  grid-template-columns: 48% 48%;
  gap: 16px;
  @media (max-width: 480px) {
    font-size: 24px;
    grid-template-columns: auto;
  }
`

const InnerWrapper = styled.div``

const TextWrapper = styled.div`
  grid-template-columns: auto;
  display: grid;
  gap: 16px;
  justify-content: center;
  text-align: center;
`

const Title = styled(H1)`
  color: white;
  font-size: 42px;
  @media (max-width: 480px) {
    font-size: 24px;
  }
`
const Subtitle = styled(MediumText)`
  color: white;
  @media (max-width: 480px) {
    font-size: 14px;
  }
`
