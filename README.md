
# Projeto Lacrei Saúde - Desafio

Este é um projeto desenvolvido como parte de um desafio técnico para demonstrar habilidades em desenvolvimento web utilizando Next.js e styled-components. O objetivo é criar uma interface moderna, responsiva e acessível, seguindo as diretrizes fornecidas pela Lacrei Saúde.

## 📋 Visão Geral

O projeto consiste em uma aplicação web que inclui:

- **Header**: Com logotipo responsivo e links para diferentes seções, incluindo uma nova página dedicada ao desafio.
- **Footer**: Personalizado com esquema de cores em verde e branco, contendo links de navegação, informações de contato e ícones de redes sociais.
- **Página de Desafio**: Explica o contexto do desafio e as habilidades aplicadas no projeto.

## 🚀 Tecnologias Utilizadas

- **Next.js**: Framework React para renderização híbrida (SSR e SSG).
- **TypeScript**: Superconjunto do JavaScript que adiciona tipagem estática ao código.
- **Styled-components**: Biblioteca para estilização de componentes utilizando CSS-in-JS.
- **React Icons**: Biblioteca para ícones baseados em React.

## 📦 Estrutura do Projeto

A estrutura do projeto segue a organização abaixo:

```
.
├── cypress
│   └── e2e
│       └── desafio.cy.cs
├── public
│   ├── favicon.ico
│   ├── next.svg
│   └── vercel.svg
├── src
│   ├── components
│   │   ├── CallToAction.tsx
│   │   ├── Footer.tsx
│   │   └── Header.tsx
│   ├── pages
│   │   ├── api
│   │   │   └── hello.ts
│   │   ├── desafio.tsx
│   │   ├── index.tsx
│   │   ├── _app.tsx
│   │   └── _document.tsx
│   └── styles
│       └── globals.css
├── .eslintrc.json
├── .gitignore
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

## 🔧 Configuração e Execução

Siga os passos abaixo para configurar e executar o projeto em sua máquina local:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/juliano340/desafio_lacrei_saude.git
   ```

2. **Navegue até o diretório do projeto:**

   ```bash
   desafio_lacrei_saude
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

5. **Acesse o projeto no navegador:**

   Abra `http://localhost:3000` no seu navegador para visualizar o projeto.

## 🛠️ Funcionalidades

- **Responsividade:** O projeto foi desenvolvido com foco em dispositivos móveis e telas de diferentes tamanhos.
- **Navegação:** Links de navegação no header e footer, incluindo a página de desafio.
- **Estilização Dinâmica:** Uso de `styled-components` para criar componentes estilizados e reutilizáveis.

## ✨ Personalização

- **Cores:** O esquema de cores foi ajustado para utilizar verde e branco.
- **Tipografia:** A fonte Nunito foi integrada e aplicada globalmente.

## 💡 Inspirações

Este projeto foi inspirado pelas diretrizes de design e experiência de usuário da Lacrei Saúde.

## 📄 Licença

Este projeto é apenas para fins educacionais e de demonstração. Sinta-se à vontade para utilizá-lo como referência.

## 🧪 Testes End-to-End (E2E) com Cypress

Este projeto inclui testes end-to-end (E2E) usando o Cypress. Esses testes simulam interações do usuário com a interface do projeto e garantem que todas as partes da aplicação funcionem corretamente de ponta a ponta.

O teste que foi criado verifica se a página "Desafio" é carregada com sucesso após a inicialização do projeto.

### Executando os Testes E2E

Para executar os testes do Cypress sem a interface gráfica, você pode usar o seguinte comando no terminal:

```bash
npx cypress run
```

Este comando irá rodar todos os testes definidos na pasta `cypress/e2e` em modo headless, ou seja, sem abrir uma janela do navegador.

### Especificando Testes e Navegadores

- Para rodar um teste específico, use o seguinte comando:

  ```bash
  npx cypress run --spec "cypress/e2e/desafio.cy.ts"
  ```

- Para rodar os testes em um navegador específico, como o Chrome, use:

  ```bash
  npx cypress run --browser chrome
  ```

### Relatórios e Resultados

Após a execução, o Cypress gerará relatórios que mostram quais testes passaram ou falharam. Se necessário, você pode configurar o Cypress para gerar vídeos ou capturas de tela dos testes.

Os testes E2E com Cypress ajudam a garantir que toda a aplicação funcione conforme esperado do ponto de vista do usuário final, validando o comportamento em diferentes navegadores e situações.

---

Desenvolvido com 💚 por [Juliano Pereira](https://github.com/juliano340)