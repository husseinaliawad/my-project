import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import FeaturesSection from './FeaturesSection';
import HeroSection from './HeroSection';
import PricingSection from './PricingSection';
import Contact from './Contact';

const StyledHeader = styled(motion.header)`
  background-color: #333;
  padding: 20px;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-right: 10px;

      a {
        color: #fff;
        text-decoration: none;
        transition: color 0.3s;

        &:hover {
          color: #ff6b6b;
        }
      }
    }
  }
`;

const Header = ({ activeSection, onSectionChange, heroSectionRef }) => {
  const handleNavItemClick = (section) => {
    onSectionChange(section);

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
      // Scroll to the Contact component or any other desired action for the "Contact" link
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  };

  return (
    <StyledHeader
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Nav>
        <ul>
         
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="#" onClick={() => handleNavItemClick('hero')}>Hero</a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="#" onClick={() => handleNavItemClick('features')}>Features</a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a href="#" onClick={() => handleNavItemClick('pricing')}>Pricing</a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <a href="#" onClick={() => handleNavItemClick('contact')}>Contact</a>
          </motion.li>
        </ul>
      </Nav>
    </StyledHeader>
  );
};

export default Header;