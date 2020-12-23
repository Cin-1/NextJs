import React, { useEffect, useState, useContext } from "react";
import Layout from "../components/layouts/Layout";
import DetallesProducto from "../components/layouts/DetallesProductos";
import useProductos from "../hooks/useProd";

export default function Home() {
  const { productos } = useProductos("creado");

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
