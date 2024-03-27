import React, { useState } from 'react';
import styled from 'styled-components';

const StyledFeaturesSection = styled.section`
  background-color: #f9fafb;
  padding: 48px 0;
`;

const Container = styled.div`
  max-width: 640px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
  font-weight: bold;
  margin-bottom: 16px;
`;

const FeaturesContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`;

const FeatureItem = styled.div`
  background-color: #fff;
  padding: 24px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.span`
  display: block;
  font-size: 24px;
  color: #3b82f6;
  margin-bottom: 16px;
`;

const FeatureTitle = styled.h3`
  font-size: 18px;
  color: #333;
  font-weight: bold;
  margin-bottom: 12px;
`;

const FeatureDescription = styled.p`
  font-size: 16px;
  color: #666;
`;

const FeaturesSection = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const handleFeatureClick = (feature) => {
    if (feature === selectedFeature) {
      setSelectedFeature(null); // Deselect the currently selected feature
    } else if (feature === 'contact') {
      window.location.href = '/contact'; // Redirect to the contact page or appropriate URL
    } else {
      setSelectedFeature(feature); // Select the clicked feature item
    }
  };

  return (
    <StyledFeaturesSection>
      <Container>
        <Title>Features Section</Title>
        <FeaturesContent>
          <FeatureItem
            onClick={() => handleFeatureClick('search')}
            isSelected={selectedFeature === 'search'}
          >
            <FeatureIcon>🔍</FeatureIcon>
            <FeatureTitle>Search Functionality</FeatureTitle>
            <FeatureDescription>Search and find what you need quickly and efficiently.</FeatureDescription>
          </FeatureItem>
          <FeatureItem
            onClick={() => handleFeatureClick('customizable')}
            isSelected={selectedFeature === 'customizable'}
          >
            <FeatureIcon>⚙️</FeatureIcon>
            <FeatureTitle>Customizable Options</FeatureTitle>
            <FeatureDescription>Personalize and tailor the settings to suit your preferences.</FeatureDescription>
          </FeatureItem>
          <FeatureItem
            onClick={() => handleFeatureClick('contact')}
            isSelected={selectedFeature === 'contact'}
          >
            <FeatureIcon>📞</FeatureIcon>
            <FeatureTitle>Contact Us</FeatureTitle>
            <FeatureDescription>Get in touch with us for any inquiries or support.</FeatureDescription>
          </FeatureItem>
          {/* Add more feature items as needed */}
        </FeaturesContent>
      </Container>
    </StyledFeaturesSection>
  );
};

export default FeaturesSection;