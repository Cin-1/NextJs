import React from "react";
import styled from "@emotion/styled";
import Buscar from "../ui/Buscar";
import Nav from "./Nav";
import Link from "next/link";

const ContenedorHeader = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Logo = styled.a`
  color: var(--naranja);
  font-size: 4rem;
  line-height: 0;
  font-weight: 700;
  font-family: "Roboto Slab", serif;
  margin-right: 2rem;
`;
const Header = () => {
  return (
    <ContenedorHeader>
      <div>
        <div>
          <p>P</p>
          <Buscar />
          <Nav />
        </div>
        <div>
          <p>Hola Cin</p>
          <button type="button">Cerrar Sesión</button>
          <Link href="/">Login</Link>
          <Link href="/">Crear Cuenta</Link>
        </div>
      </div>
    </ContenedorHeader>
  );
};

export default Header;
