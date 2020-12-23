import React from "react";
import Layout from "../components/layouts/Layout";
import DetallesProducto from "../components/layouts/DetallesProductos";
import useProductos from "../hooks/useProd";

export default function Populares() {
  const { productos } = useProductos("votos");
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
