import React from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';

import ContactItem from '../components/ContactItem';
import config from '../../config';

export const ContactUniversalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}`;

const InputAndTextareaStyle = css`
  width: 100%;
  padding-left: 5px 0;
  font-size: 16px;
  margin: 10px 0;
  border: none;
  border-bottom: 2px solid #333;
  outline: none;
  resize: none;
`;

const SpanStyle = css`
  color: #e91e63;
  font-size: 12px;
  transform: translateY(-20px);
`;

const StyledContactSection = styled.section`
  padding: 50px 100px;
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #343a40;

  @media (max-width: 991px) {
    padding: 50px;
  }
`;

const StyledContactH2 = styled.h2`
  color: #f8f9fa;
`;

const StyledContactInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 3rem;

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const StyledContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 1rem;

  @media (max-width: 991px) {
    margin-bottom: 40px;
    width: 100%;
  }
`;

const StyledContactFormContainer = styled.div`
  width: 40%;
  padding: 40px;
  background: #fff;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const StyledContactFormHeading = styled.h2`
  font-size: 30px;
  color: #333;
  font-weight: 500;
`;

const StyledContactInputBox = styled.div`
  position: relative;
  width: 100%;
  margin-top: 10px;
`;

const StyledContactInput = styled.input`
  ${InputAndTextareaStyle}

  &:focus ~ span, &:valid ~ span {
    ${SpanStyle}
  }
`;

const StyledContactTextarea = styled.textarea`
  ${InputAndTextareaStyle}

  &:focus ~ span, &:valid ~ span {
    ${SpanStyle}
  }
`;

const StyledContactSpan = styled.span`
  position: absolute;
  left: 0;
  padding: 5px 0;
  font-size: 16px;
  margin: 10px 0;
  pointer-events: none;
  transition: 0.5s;
  color: #666;
`;

const StyledContactSubmit = styled.input`
  width: 100px;
  background: #00bcd4;
  color: #fff;
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 18px;
`;

export default function ContactPage() {
  return (
    <>
      <ContactUniversalStyle />
      <StyledContactSection id="contact">
        <StyledContactH2>Contact us</StyledContactH2>

        <StyledContactInfoContainer className="container">
          <StyledContactInfo>
            {config.contact.map(function (item, index) {
              return (
                <ContactItem
                  key={index}
                  title={item.title}
                  logoName={item.icon}
                  content={item.text}
                ></ContactItem>
              );
            })}
          </StyledContactInfo>

          <StyledContactFormContainer>
            <form
              method="post"
              netlify-honeypot="bot-field"
              data-netlify="true"
              name="contact"
            >
              <StyledContactFormHeading>Send Message</StyledContactFormHeading>
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              <StyledContactInputBox>
                <StyledContactInput
                  type="text"
                  name="name"
                  required="required"
                ></StyledContactInput>
                <StyledContactSpan>Full name</StyledContactSpan>
              </StyledContactInputBox>
              <StyledContactInputBox>
                <StyledContactInput
                  type="text"
                  name="email"
                  required="required"
                ></StyledContactInput>
                <StyledContactSpan>Email</StyledContactSpan>
              </StyledContactInputBox>
              <StyledContactInputBox>
                <StyledContactTextarea
                  name="message"
                  required="required"
                ></StyledContactTextarea>
                <StyledContactSpan>Type Message . . .</StyledContactSpan>
              </StyledContactInputBox>
              <StyledContactInputBox>
                <StyledContactSubmit
                  type="submit"
                  name=""
                  value="Send"
                ></StyledContactSubmit>
              </StyledContactInputBox>
            </form>
          </StyledContactFormContainer>
        </StyledContactInfoContainer>
      </StyledContactSection>
    </>
  );
}
