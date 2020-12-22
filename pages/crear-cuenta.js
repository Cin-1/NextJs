import React from "react";
import Layout from "../components/layouts/Layout";
import { css } from "@emotion/react";
import validarCrearCuenta from "../validar/validarCrearCuenta";
import {
  Formulario,
  Campo,
  InputSubmit,
  Error,
} from "../components/ui/Formulario";
import useValid from "../hooks/useValid";

export default function CrearCuenta() {
  const STATE_INICIAL = {
    nombre: "",
    email: "",
    password: "",
  };
  const {
    valores,
    errores,
    submitform,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useValid(STATE_INICIAL, validarCrearCuenta, CrearCuenta);
  const { nombre, email, password } = valores;

  function CrearCuenta() {
    return console.log("Creando cuenta...");
  }
  return (
    <div>
      <Layout>
        <>
          <h1
            css={css`
              text-align: center;
              margin-top: 5rem;
            `}
          >
            Crear Cuenta{" "}
          </h1>
          <Formulario onSubmit={handleSubmit} noValidate>
            <Campo>
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                placeholder="Tu nombre"
                name="nombre"
                value={nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Campo>
            {errores.nombre && <Error>{errores.nombre}</Error>}
            <Campo>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Tu email"
                name="email"
                value={email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Campo>
            {errores.email && <Error>{errores.email}</Error>}

            <Campo>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Tu password"
                name="password"
                value={password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Campo>
            {errores.password && <Error>{errores.password}</Error>}

            <InputSubmit type="submit" value="Crear Cuenta" />
          </Formulario>
        </>
      </Layout>
    </div>
  );
}
