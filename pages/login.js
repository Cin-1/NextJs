import React, { useState } from "react";
import Layout from "../components/layouts/Layout";
import { css } from "@emotion/core";
import validarLogin from "../validar/validarLogin";
import {
  Formulario,
  Campo,
  InputSubmit,
  Error,
} from "../components/ui/Formulario";
import useValid from "../hooks/useValid";
import firebase from "../firebase";
import Router from "next/router";

const STATE_INICIAL = {
  email: "",
  password: "",
};

export default function Login() {
  const [error, guardarError] = useState(false);

  const {
    valores,
    errores,
    submitform,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useValid(STATE_INICIAL, validarLogin, login);
  const { email, password } = valores;

  async function login() {
    try {
      await firebase.login(email, password);
      Router.push("/");
    } catch (error) {
      console.log("Hubo un error al autenticar al usuario", error.message);
      guardarError(error.message);
    }
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
            Iniciar Sesión{" "}
          </h1>
          <Formulario onSubmit={handleSubmit} noValidate>
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
            {error && <Error>{error}</Error>}

            {errores.password && <Error>{errores.password}</Error>}

            <InputSubmit type="submit" value="Iniciar Sesión" />
          </Formulario>
        </>
      </Layout>
    </div>
  );
}
