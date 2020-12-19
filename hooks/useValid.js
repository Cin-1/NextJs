import React, { useState, useEffect } from "react";

const useValid = (stateInicial, validar, fn) => {
  const [valores, guardarValores] = useState(stateInicial);
  const [errores, guardarErrores] = useState({});
  const [submitform, guardarSubmitform] = useState(false);

  useEffect(() => {
    if (submitform) {
      const notErrors = Object.keys(errores).length === 0;
      if (notErrors) {
        fn();
      }
      guardarSubmitform(false);
    }
  }, [errores]);
  const handleChange = (e) => {
    guardarValores({
      ...valores,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const erroresvalidacion = validar(valores);
    guardarErrores(erroresvalidacion);
    guardarSubmitform(true);
  };
  return {
    valores,
    errores,
    submitform,
    handleChange,
    handleSubmit,
  };
};

export default useValid;
