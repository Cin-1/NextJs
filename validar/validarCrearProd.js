export default function validarCrearPro(valores) {
  let errores = {};

  if (!valores.nombre) {
    errores.nombre = "El Nombre es obligatorio";
  }

  if (!valores.empresa) {
    errores.empresa = "El nombre de la empresa es obligatorio";
  }
  if (!valores.url) {
    errores.url = "La URL del producto es obligatoria";
  } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url)) {
    errores.url = "URL no válida";
  }

  //   if (!valores.imagen) {
  //     errores.imagen = "La imagen es obligatoria";
  //   }
  if (!valores.descripcion) {
    errores.descripcion = "La descripcion es obligatoria";
  }

  return errores;
}
