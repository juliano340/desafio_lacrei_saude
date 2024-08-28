'use client';

import React from 'react';
import styled from 'styled-components';
import { FaHandshake, FaHeart, FaShieldAlt } from 'react-icons/fa';

const Container = styled.section`
  background-color: #F9F3FF;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2.5em;
  color: #000;
  margin-bottom: 10px;
  text-align: center;
`;

const Subtitle = styled.h3`
  font-size: 1.5em;
  color: #018762;
  margin-bottom: 40px;
  text-align: center;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 50px;
  max-width: 1200px;
  width: 100%;
`;

const Card = styled.div`
  background-color: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 30px;
  flex: 1 1 300px;
  max-width: 350px;
  text-align: center;
`;

const IconWrapper = styled.div`
  font-size: 3em;
  color: #018762;
  margin-bottom: 20px;
`;

const CardTitle = styled.h4`
  font-size: 1.5em;
  color: #000;
  margin-bottom: 15px;
`;

const CardText = styled.p`
  font-size: 1em;
  color: #686A68;
  line-height: 1.5;
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  margin-bottom: 40px;
`;

const Description = styled.div`
  max-width: 800px;
  text-align: center;
  margin-bottom: 40px;
`;

const DescriptionText = styled.p`
  font-size: 1.2em;
  color: #686A68;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const Button = styled.a`
  background-color: #018762;
  color: #fff;
  padding: 15px 40px;
  text-decoration: none;
  font-size: 1.2em;
  border-radius: 8px;
  transition: background-color 0.2s ease;
  font-weight: 700;

  &:hover {
    background-color: #007756;
  }
`;

export default function CallToAction() {
  return (
    <Container>
      <Title>Conheça o jeito Lacrei Saúde de cuidar</Title>
      <Subtitle>Atendimento de qualidade e inclusivo</Subtitle>

      <CardsContainer>
        <Card>
          <IconWrapper>
            <FaHandshake />
          </IconWrapper>
          <CardTitle>Inclusão</CardTitle>
          <CardText>
            Nossa plataforma digital é acessível e atende toda a comunidade LGBTQIAPN+.
          </CardText>
        </Card>

        <Card>
          <IconWrapper>
            <FaHeart />
          </IconWrapper>
          <CardTitle>Acolhimento</CardTitle>
          <CardText>
            Profissionais da saúde que entendem e respeitam as necessidades da comunidade LGBTQIAPN+.
          </CardText>
        </Card>

        <Card>
          <IconWrapper>
            <FaShieldAlt />
          </IconWrapper>
          <CardTitle>Segurança</CardTitle>
          <CardText>
            Protegemos seus dados e garantimos a validação de pacientes e profissionais da saúde.
          </CardText>
        </Card>
      </CardsContainer>

      <Image src="https://lacreisaude.com.br/_next/static/media/people-holding-flag.8d096827.png" alt="Pessoas sorridentes levantando a bandeira LGBTQIAPN+" />

      <Description>
        <DescriptionText>
          <strong>O que é a Lacrei Saúde?</strong> Nosso papel é construir a conexão entre pessoas da comunidade LGBTQIAPN+ que precisam de atendimento clínico e profissionais da saúde qualificados.
        </DescriptionText>
        <DescriptionText>
          Oferecemos segurança, inclusão e representatividade, surgindo da esperança de proporcionar um atendimento clínico qualificado, seguro e empático para todas as pessoas.
        </DescriptionText>
      </Description>

      <Button href="https://lacreisaude.com.br" target="_blank" rel="noopener noreferrer">
        Conheça a Lacrei Saúde
      </Button>
    </Container>
  );
}
