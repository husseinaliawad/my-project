import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ContactContainer = styled.div`
  opacity: 0;
  transform: translateY(50px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const FormInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
`;

const SubmitButton = styled.button`
  background-color: #333;
  color: #fff;
  padding: 10px;
  border: none;
  cursor: pointer;
`;

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const contactContainer = contactRef.current;

    gsap.to(contactContainer, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: contactContainer,
        start: 'top 80%',
        end: '+=100',
        scrub: true,
      },
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <ContactContainer ref={contactRef}>
      <Title>Contact</Title>
      <ContactForm onSubmit={handleSubmit}>
        <FormInput type="text" placeholder="Name" />
        <FormInput type="email" placeholder="Email" />
        <FormInput type="text" placeholder="Subject" />
        <FormInput as="textarea" rows="4" placeholder="Message" />
        <SubmitButton type="submit">Submit</SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;