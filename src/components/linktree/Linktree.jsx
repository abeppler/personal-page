import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #e5e5e5;
    font-family: Arial, sans-serif;
  }
`;

const Header = styled.header`
  background-color: #0d1b2a;
  color: #ffffff;
  padding: 20px;
`;

const H1 = styled.h1`
  margin: 0;
  font-size: 36px;
`;

const Nav = styled.nav`
  background-color: #ffffff;
  padding: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Li = styled.li`
  margin: 10px 0;
`;

const A = styled.a`
  display: inline-block;
  width: 200px;
  padding: 10px 20px;
  border: 1px solid #0d1b2a;
  background-color: #ffffff;
  color: #0d1b2a;
  text-decoration: none;
  font-weight: bold;
  border-radius: 10px;
  text-align: center;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;

  @media only screen and (max-width: 600px) {
    width: 175px;
  }

  &:hover {
    background-color: #0d1b2a;
    color: #ffffff;
    border-color: #ffffff;
  }
`;

const Footer = styled.footer`
  background-color: #0d1b2a;
  color: #ffffff;
  padding: 20px;
  margin-top: 20px;
  text-align: center;
`;

function Linktree() {
  return (
    <>
      <GlobalStyle />
      <Header>
        <H1>Meu Linktree</H1>
      </Header>
      <Nav>
        <Ul>
          <Li>
            <A href="#">Home</A>
          </Li>
          <Li>
            <A href="#">Sobre</A>
          </Li>
          <Li>
            <A href="#">Serviços</A>
          </Li>
          <Li>
            <A href="#">Contato</A>
          </Li>
        </Ul>
      </Nav>
      <Footer>
        <p>Meu Linktree - Todos os direitos reservados</p>
      </Footer>
    </>
  );
}

export default Linktree;
