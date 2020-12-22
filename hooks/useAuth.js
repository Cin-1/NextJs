import React, { useEffect, useState } from "react";
import firebase from "../firebase";

function useAuth() {
  const [usuarioauth, guardarUsuarioauth] = useState(null);

  useEffect(() => {
    const unsuscribe = firebase.auth.onAuthStateChanged((usuario) => {
      if (usuario) {
        guardarUsuarioauth(usuario);
      } else {
        guardarUsuarioauth(null);
      }
    });
    return () => unsuscribe;
  }, []);
  return usuarioauth;
}
export default useAuth;
