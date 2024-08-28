'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #fff;
  height: 96px;
  margin: 0px 122px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    margin: 0px 20px;
    height: 80px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    height: auto;
    margin: 10px;
  }
`;

const Logo = styled.img`
  width: 187px;
  height: 24px;

  @media (max-width: 768px) {
    width: 134px;
    height: 16px;
  }

  @media (max-width: 480px) {
    width: 120px;
    height: 14px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 10px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    gap: 10px;
    margin-top: 10px;
  }
`;

const Button = styled(Link)`
  background-color: #fff;
  color: #007756;
  border: 2px solid #007756;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 8px 0;
    font-size: 14px;
  }

  &:hover {
    background-color: #007756;
    color: #fff;
  }
`;

const Header: React.FC = () => {
  const [logoSrc, setLogoSrc] = useState(
    'https://lacreisaude.com.br/_next/static/media/logo_lacrei_desktop.7ae004ab.svg'
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setLogoSrc('https://lacreisaude.com.br/_next/static/media/logo_lacrei_mobile.1f3a65cb.svg');
      } else {
        setLogoSrc('https://lacreisaude.com.br/_next/static/media/logo_lacrei_desktop.7ae004ab.svg');
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <StyledHeader>
      <Link href="/">
        <Logo src={logoSrc} alt="Logo da Lacrei Saúde" />
      </Link>
      <ButtonContainer>
        <Button href="https://paciente.lacreisaude.com.br/">Para pacientes</Button>
        <Button href="https://profissional.lacreisaude.com.br/">Para profissionais</Button>
        <Button href="/desafio">Desafio</Button> 
      </ButtonContainer>
    </StyledHeader>
  );
};

export default Header;
