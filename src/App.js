import React, { useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import Contact from './components/Contact';
import './App.css';

// Animation keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledNav = styled.nav`
  background-color: #f0f0f0;
  padding: 10px;
  display: flex;
  justify-content: center;
  animation: ${fadeIn} 0.5s ease-in-out;

  &:hover {
    animation: ${keyframes`
      from {
        opacity: 0.8;
      }
      to {
        opacity: 1;
      }
    `} 0.3s ease-in-out;
  }
`;

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
`;

const StyledLi = styled.li`
  margin-right: 10px;
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 16px;
  color: #333;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #666;
  }
`;

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const heroSectionRef = useRef(null);

  const handleSectionChange = (section) => {
    setActiveSection(section);

    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (section === 'hero') {
      heroSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'features') {
      const featuresSection = document.getElementById('features-section');
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (section === 'pricing') {
      const pricingSection = document.getElementById('pricing-section');
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (section === 'contact') {
      const contactSection = document.getElementById('contact-section');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div>
      <StyledNav>
        <StyledUl>
          <StyledLi>
            <StyledButton onClick={() => handleSectionChange('home')}>Home</StyledButton>
          </StyledLi>
          <StyledLi>
            <StyledButton onClick={() => handleSectionChange('hero')}>Hero</StyledButton>
          </StyledLi>
          <StyledLi>
            <StyledButton onClick={() => handleSectionChange('features')}>Features</StyledButton>
          </StyledLi>
          <StyledLi>
            <StyledButton onClick={() => handleSectionChange('pricing')}>Pricing</StyledButton>
          </StyledLi>
          <StyledLi>
            <StyledButton onClick={() => handleSectionChange('contact')}>Contact</StyledButton>
          </StyledLi>
        </StyledUl>
      </StyledNav>
      <div ref={heroSectionRef}>
        <HeroSection />
      </div>
      <div id="features-section">
        <FeaturesSection />
      </div>

      <div id="pricing-section">
        <PricingSection />
      </div>

     

      <div id="contact-section">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;