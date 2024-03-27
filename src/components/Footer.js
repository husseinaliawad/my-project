import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #2d3748;
  padding: 16px 0;
`;

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
`;

const Text = styled.p`
  color: #fff;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Text>&copy; 2024 My App. All rights reserved.</Text>
      </Container>
    </StyledFooter>
  );
};

export default Footer;