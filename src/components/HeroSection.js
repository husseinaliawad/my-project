import React from 'react';
import styled from 'styled-components';

const StyledHeroSection = styled.section`
  background-color: #3b82f6;
  padding: 48px 0;
`;

const Container = styled.div`
  max-width: 640px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 32px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 18px;
  color: #fff;
  margin-bottom: 24px;
`;

const Button = styled.button`
  background-color: #fff;
  color: #3b82f6;
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
`;

const HeroSection = () => {
  return (
    <StyledHeroSection>
      <Container>
        <Title>Welcome to the Hero Section</Title>
        <Description>This is the introductory text for the hero section.</Description>
        <Button>Get Started</Button>
      </Container>
    </StyledHeroSection>
  );
};

export default HeroSection;