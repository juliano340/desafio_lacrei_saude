import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin,  } from 'react-icons/fa';
import { CiMail } from "react-icons/ci";


const FooterContainer = styled.footer`
  background-color: #018762; /* Fundo verde */
  color: #ffffff; /* Texto branco */
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  flex-wrap: wrap;
`;

const Section = styled.div`
  flex: 1;
  padding: 10px;
  min-width: 200px;
`;

const Logo = styled.h1`
  font-size: 24px;
  color: #ffffff; /* Texto branco */
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const NavLink = styled.a`
  color: #ffffff; /* Texto branco */
  text-decoration: none;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  font-size: 24px;
`;

const SocialLink = styled.a`
  color: #ffffff; /* Ícones brancos */

  &:hover {
    color: #d4f3e5; /* Cor mais clara ao passar o mouse */
  }
`;

const ContactInfo = styled.p`
  margin: 5px 0;
  font-size: 18px;
  color: #ffffff; /* Texto branco */
`;

const Copyright = styled.div`
  margin-top: 20px;
  font-size: 14px;
  color: #d4f3e5; /* Texto branco mais claro */
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <Section>
          <Logo>Lacrei Saúde</Logo>
          <p>Atendimento de qualidade e inclusivo para toda a comunidade.</p>
        </Section>
        <Section>
          <h3>Navegação</h3>
          <Nav>
            <NavLink href="#">Início</NavLink>
            <NavLink href="#">Sobre</NavLink>
            <NavLink href="#">Serviços</NavLink>
            <NavLink href="#">Contato</NavLink>
          </Nav>
        </Section>
        <Section>
          <h3>Contato com o Desenvolvedor</h3>
          <ContactInfo>Rua Doutor Ernesto de Primio Beck, 105</ContactInfo>
          <ContactInfo>Porto Alegre, RS</ContactInfo>
          <ContactInfo>Email: juliano340@gmail.com</ContactInfo>
          <ContactInfo>Telefone: (51) 99237-1527</ContactInfo>
        </Section>
        <Section>
          <h3>Siga-nos</h3>
          <SocialIcons>
            <SocialLink href="https://www.facebook.com/lacrei.saude/" target="_blank" rel="noopener noreferrer"><FaFacebook /></SocialLink>
            <SocialLink href="contato@lacreisaude.com.br" target="_blank" rel="noopener noreferrer"><CiMail /></SocialLink>
            <SocialLink href="https://www.instagram.com/lacrei.saude" target="_blank" rel="noopener noreferrer"><FaInstagram /></SocialLink>
            <SocialLink href="https://www.linkedin.com/company/lacrei" target="_blank" rel="noopener noreferrer"><FaLinkedin /></SocialLink>
          </SocialIcons>
        </Section>
      </FooterContent>
      <Copyright>© 2024 Lacrei Saúde. Todos os direitos reservados.</Copyright>
    </FooterContainer>
  );
}
