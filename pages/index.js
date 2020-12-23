import React, { useEffect, useState, useContext } from "react";
import styled from "@emotion/styled";
import Layout from "../components/layouts/Layout";
import { FirebaseContext } from "../firebase";
import DetallesProducto from "../components/layouts/DetallesProductos";

export default function Home() {
  const [productos, guardarProductos] = useState();
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const obtenerProductos = () => {
      firebase.db
        .collection("productos")
        .orderBy("creado", "desc")
        .onSnapshot(manejarSnapshot);
    };
    obtenerProductos();
  }, []);

  function manejarSnapshot(snapshot) {
    const productos = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    guardarProductos(productos);
    console.log(productos);
  }
  return (
    <div>
      <Layout>
        <div className="listado-productos">
          <div
            style={{
              padding: "5rem 0",
              maxWidth: "1200px",
              margin: "0 auto",
              width: "95%",
            }}
          >
            <ul className="bg-white">
              {productos
                ? productos.map((producto) => (
                    <DetallesProducto key={producto.id} producto={producto} />
                  ))
                : null}
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  );
}
