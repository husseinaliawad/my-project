import React from 'react';
import styled, { keyframes } from 'styled-components';

const StyledPricingSection = styled.section`
  background-color: #edf2f7;
  padding: 48px 0;
`;

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
  font-weight: bold;
  margin-bottom: 16px;
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PricingCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const PricingTitle = styled.h3`
  font-size: 20px;
  color: #333;
  font-weight: bold;
  margin-bottom: 16px;
`;

const PricingDescription = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 16px;
`;

const PricingPrice = styled.p`
  font-size: 18px;
  color: #333;
  font-weight: bold;
  margin-bottom: 16px;
`;

const PricingButton = styled.button`
  background-color: #3b82f6;
  color: #fff;
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
`;

const PricingSection = () => {
  return (
    <StyledPricingSection>
      <Container>
        <Title>Pricing Section</Title>
        <PricingGrid>
          <PricingCard>
            <PricingTitle>Basic</PricingTitle>
            <PricingDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</PricingDescription>
            <PricingPrice>Price: $9.99/month</PricingPrice>
            <PricingButton>Buy Now</PricingButton>
          </PricingCard>
          <PricingCard>
            <PricingTitle>Standard</PricingTitle>
            <PricingDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</PricingDescription>
            <PricingPrice>Price: $19.99/month</PricingPrice>
            <PricingButton>Buy Now</PricingButton>
          </PricingCard>
          <PricingCard>
            <PricingTitle>Premium</PricingTitle>
            <PricingDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</PricingDescription>
            <PricingPrice>Price: $29.99/month</PricingPrice>
            <PricingButton>Buy Now</PricingButton>
          </PricingCard>
        </PricingGrid>
      </Container>
    </StyledPricingSection>
  );
};

export default PricingSection;