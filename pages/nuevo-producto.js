import React, { useContext, useState } from "react";
import Layout from "../components/layouts/Layout";
import { css } from "@emotion/core";
import validarCrearPro from "../validar/validarCrearProd";
import {
  Formulario,
  Campo,
  InputSubmit,
  Error,
} from "../components/ui/Formulario";
import useValid from "../hooks/useValid";
import firebase, { FirebaseContext } from "../firebase";
import Router, { useRouter } from "next/router";
import FileUploader from "react-firebase-file-uploader";
import E404 from "../components/layouts/404";

const STATE_INICIAL = {
  nombre: "",
  empresa: "",
  //imagen: "",
  url: "",
  descripcion: "",
};
export default function NuevoProducto() {
  const [error, guardarError] = useState(false);

  const [nombreimg, guardarNombreImg] = useState("");
  const [subiendo, guardarSubiendo] = useState(false);
  const [progreso, guardarProgreso] = useState(0);
  const [urlimg, guardarUrlImg] = useState("");

  const {
    valores,
    errores,
    submitform,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useValid(STATE_INICIAL, validarCrearPro, crearProducto);
  const { nombre, empresa, imagen, url, descripcion } = valores;
  const router = useRouter();

  const { usuario, firebase } = useContext(FirebaseContext);

  async function crearProducto() {
    if (!usuario) {
      return router.push("/login");
    }
    const producto = {
      nombre,
      empresa,
      url,
      urlimg,
      descripcion,
      votos: 0,
      comentarios: [],
      creado: Date.now(),
      creador: {
        id: usuario.uid,
        nombre: usuario.displayName,
      },
      haVotado: [],
    };
    firebase.db.collection("productos").add(producto);
    return router.push("/");
  }

  const handleUploadStart = () => {
    guardarProgreso(0);
    guardarSubiendo(true);
  };

  const handleProgress = (progreso) => guardarProgreso({ progreso });

  const handleUploadError = (error) => {
    guardarSubiendo(error);
    console.error(error);
  };

  const handleUploadSuccess = (nombre) => {
    guardarProgreso(100);
    guardarSubiendo(false);
    guardarNombreImg(nombre);
    firebase.storage
      .ref("productos")
      .child(nombre)
      .getDownloadURL()
      .then((url) => {
        guardarUrlImg(url);
      });
  };
  return (
    <div>
      <Layout>
        {!usuario ? (
          <E404 />
        ) : (
          <>
            <h1
              css={css`
                text-align: center;
                margin-top: 5rem;
              `}
            >
              Nuevo Producto{" "}
            </h1>
            <Formulario onSubmit={handleSubmit} noValidate>
              <fieldset>
                <legend>Información General</legend>
                <Campo>
                  <label htmlFor="nombre">Nombre</label>
                  <input
                    type="text"
                    id="nombre"
                    placeholder="Nombre del Producto"
                    name="nombre"
                    value={nombre}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Campo>
                {errores.nombre && <Error>{errores.nombre}</Error>}
                <Campo>
                  <label htmlFor="empresa">Empresa</label>
                  <input
                    type="text"
                    id="empresa"
                    placeholder="Nombre de la empresa"
                    name="empresa"
                    value={empresa}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Campo>
                {errores.empresa && <Error>{errores.empresa}</Error>}

                <Campo>
                  <label htmlFor="imagen">Imagen</label>
                  <FileUploader
                    accept="image/*"
                    id="imagen"
                    name="imagen"
                    randomizeFilename
                    storageRef={firebase.storage.ref("productos")}
                    onUploadStart={handleUploadStart}
                    onUploadError={handleUploadError}
                    onUploadSuccess={handleUploadSuccess}
                    onProgress={handleProgress}
                  />
                </Campo>
                <Campo>
                  <label htmlFor="url">URL</label>
                  <input
                    type="url"
                    id="url"
                    placeholder="URL de tu producto"
                    name="url"
                    value={url}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Campo>
                {errores.url && <Error>{errores.url}</Error>}
              </fieldset>
              <fieldset>
                <legend>Sobre tu Producto</legend>
                <Campo>
                  <label htmlFor="descripcion">Descripción</label>
                  <textarea
                    id="descripcion"
                    name="descripcion"
                    value={descripcion}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Campo>
                {errores.descripcion && <Error>{errores.descripcion}</Error>}
              </fieldset>
              {error && <Error>{error}</Error>}

              <InputSubmit type="submit" value="Crear Producto" />
            </Formulario>
          </>
        )}
      </Layout>
    </div>
  );
}
