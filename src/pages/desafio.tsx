import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  flex: 1; /* Faz o container crescer e ocupar o espaço disponível */
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: #007756;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 1.2em;
  color: #686A68;
  line-height: 1.6;
`;

const Desafio: React.FC = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Container>
          <Title>Desafio Lacrei Saúde</Title>
          <Text>
            Este é um desafio para demonstrar habilidades em desenvolvimento web usando Next.js e styled-components.
            A proposta é criar um projeto com uma interface moderna e responsiva, seguindo as diretrizes fornecidas pela Lacrei Saúde.
          </Text>
          <Text>
            O objetivo é criar componentes reutilizáveis, aplicar estilos consistentes e garantir uma experiência de usuário
            fluida e acessível em diferentes dispositivos. Este projeto serve como uma oportunidade para mostrar habilidades técnicas
            em um cenário realista.
          </Text>
        </Container>
        <Footer />
      </Wrapper>
    </>
  );
};

export default Desafio;
