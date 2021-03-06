import React, { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import { FirebaseContext } from "../../firebase";
import E404 from "../../components/layouts/404";
import Layout from "../../components/layouts/Layout";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";
import { Campo, InputSubmit } from "../../components/ui/Formulario";
import Boton from "../../components/ui/Boton";

const ContenedorProducto = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 2rem;
  }
`;
const CreadorProducto = styled.p`
  padding: 0.5rem 2rem;
  background-color: #da552f;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  display: inline-block;
  text-align: center;
`;

const Producto = () => {
  const [producto, guardarProducto] = useState({});
  const [error, guardarError] = useState(false);
  const [comentario, guardarComentario] = useState({});
  const [consultar, guardarConsultar] = useState(true);

  const router = useRouter();
  const {
    query: { id },
  } = router;

  const { firebase, usuario } = useContext(FirebaseContext);

  useEffect(() => {
    if (id && consultar) {
      const obtenerProducto = async () => {
        const productoQuery = await firebase.db.collection("productos").doc(id);
        const producto = await productoQuery.get();
        if (producto.exists) {
          guardarProducto(producto.data());
          guardarConsultar(false);
        } else {
          guardarError(true);
          guardarConsultar(false);
        }
      };
      obtenerProducto();
    }
  }, [id]);

  if (Object.keys(producto).length === 0 && !error) return "Cargando...";

  const {
    comentarios,
    creado,
    descripcion,
    empresa,
    nombre,
    url,
    urlimg,
    votos,
    creador,
    haVotado,
  } = producto;

  const votarProducto = () => {
    if (!usuario) {
      return router.push("/login");
    }
    const nuevoTotal = votos + 1;

    if (haVotado.includes(usuario.uid)) return;
    const yaVotaron = [...haVotado, usuario.uid];
    firebase.db
      .collection("productos")
      .doc(id)
      .update({ votos: nuevoTotal, haVotado: yaVotaron });
    guardarProducto({
      ...producto,
      votos: nuevoTotal,
    });
    guardarConsultar(true);
  };

  const comentarioChange = (e) => {
    guardarComentario({
      ...comentario,
      [e.target.name]: e.target.value,
    });
  };

  const esCreador = (id) => {
    if (creador.id == id) {
      return true;
    }
  };
  const agregarComentario = (e) => {
    e.preventDefault();
    if (!usuario) {
      return router.push("/login");
    }
    comentario.usuarioId = usuario.uid;
    comentario.usuarioNombre = usuario.displayName;

    const nuevosComentarios = [...comentarios, comentario];

    firebase.db
      .collection("productos")
      .doc(id)
      .update({ comentarios: nuevosComentarios });
    guardarProducto({
      ...producto,
      comentarios: nuevosComentarios,
    });
    guardarConsultar(true);
  };
  const authBorrar = () => {
    if (!usuario) {
      return false;
    }
    if (creador.id === usuario.uid) {
      return true;
    }
  };
  const eliminarProducto = async () => {
    if (!usuario) {
      return router.push("/login");
    }
    if (creador.id !== usuario.uid) {
      return router.push("/");
    }
    try {
      await firebase.db.collection("productos").doc(id).delete();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <>
        {error ? (
          <E404 />
        ) : (
          <div
            style={{
              padding: "5rem 0",
              maxWidth: "1200px",
              margin: "0 auto",
              width: "85%",
            }}
          >
            <h1
              css={css`
                text-align: center;
                margin-top: 5rem;
              `}
            >
              {nombre}
            </h1>
            <ContenedorProducto>
              <div>
                {" "}
                <p>
                  Publicado hace:{" "}
                  {formatDistanceToNow(new Date(creado), { locale: es })}{" "}
                </p>
                <p>
                  Por {creador.nombre} de {empresa}
                </p>
                <img
                  style={{
                    maxWidth: "50%",
                  }}
                  src={urlimg}
                />
                <p>{descripcion}</p>
                {usuario && (
                  <>
                    <h2>Agrega tu comentario</h2>

                    <form onSubmit={agregarComentario}>
                      <Campo>
                        <input
                          type="text"
                          name="mensaje"
                          onChange={comentarioChange}
                        />
                      </Campo>

                      <InputSubmit type="submit" value="agregar comentario" />
                    </form>
                  </>
                )}
                <h2
                  css={css`
                    margin: 2rem 0;
                  `}
                >
                  Comentarios{" "}
                </h2>
                {comentarios.length === 0 ? (
                  "Aún no hay comentarios"
                ) : (
                  <ul>
                    {comentarios.map((comentario, i) => (
                      <li
                        key={`${comentario.usuarioId}-${i}`}
                        css={css`
                          border: 1px solid #e1e1e1;
                          padding: 2rem;
                        `}
                      >
                        <p>{comentario.mensaje}</p>
                        <p>
                          Escrito por:{" "}
                          <span
                            css={css`
                              font-weight: bold;
                            `}
                          >
                            {" "}
                            {comentario.usuarioNombre}
                          </span>
                        </p>
                        {esCreador(comentario.usuarioId) && (
                          <CreadorProducto>OP</CreadorProducto>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <aside>
                <br></br>
                <Boton target="_blank" bgColor="true" href={url}>
                  Visitar URL
                </Boton>

                <div
                  css={css`
                    margin-top: 5rem;
                  `}
                >
                  <p
                    css={css`
                      text-align: center;
                    `}
                  >
                    Votos: {votos}
                  </p>
                  {usuario && <Boton onClick={votarProducto}>Votar</Boton>}
                </div>
                <div
                  css={css`
                    margin-top: 2rem;
                  `}
                >
                  {authBorrar() && (
                    <Boton onClick={eliminarProducto}>Eliminar Producto</Boton>
                  )}
                </div>
              </aside>
            </ContenedorProducto>
          </div>
        )}
      </>
    </Layout>
  );
};

export default Producto;
