import React, { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { navigate } from "gatsby"
import { Wrapper } from "./style"
import Boton from "../../botonFormulario"
const Formulario = props => {
  let [data, setData] = useState({})
  const onClick = e => {
    e.preventDefault()
    setData((data = formik.values))
    console.log(data)
    let urlData = `https://api.whatsapp.com/send?phone=51958888888&text=Hola Intramet mi codigo es:  ${data.codigo} ,  email: ${data.email},  empresa: ${data.empresa},mensaje: ${data.mensaje}, nombre: ${data.name}, telefono: ${data.telefono}, tipo: ${data.tipo}`
    // abrir en una nueva pestaña con los datos.
    if (
      data.codigo === "" ||
      data.email === "" ||
      data.empresa === "" ||
      data.mensaje === "" ||
      data.name === "" ||
      data.telefono === "" ||
      data.tipo === ""
    ) {
      alert("Te faltan llenar datos")
    } else {
      window.open(urlData)
    }
  }
  const requiredText = "Es requerido este campo"
  const formik = useFormik({
    initialValues: {
      name: "",
      telefono: "",
      empresa: "",
      email: "",
      codigo: "",
      mensaje: "",
      tipo: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Tiene que tener al menos 3 letras")
        .required(requiredText),
      telefono: Yup.string()
        .required(requiredText)
        .matches(/^[0-9]+$/, "Tiene que ser solo digitos")
        .min(9, "Tiene que ser de 9 digitos el número de teléfono")
        .max(9, "Tiene que ser de 9 digitos el número de teléfono"),
      // tipo: Yup.string().required(requiredText),
      empresa: Yup.string().required(requiredText),
      email: Yup.string()
        .email("Dirección de correo electrónico inválida")
        .required(requiredText),
      codigo: Yup.string().required(requiredText),
      mensaje: Yup.string().required(requiredText),
    }),
    onSubmit: values => {
      // const apiUrl =
      //   "http://intramet.marcos.almaquinto.com/server/multiformulario.php"
      let URLactual = window.location.origin;
      let apiUrl=`${URLactual}/server/multiformulario.php`
      // const datos = JSON.stringify(values, null, 2)
      const datos = JSON.stringify(values, null, 2)
      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: datos,
      })
        // .then(contents => console.log(contents))

        .then(res => res.json())
        .catch(error => console.error("Error:", error))
        // .then(data => console.log(data))
      navigate("/gracias/")
      // .then(response => console.log("Success:", response));
      // console.log(datos)
    },
  })
  return (
    <div className="container">
      <Wrapper>
        <img src={props.img} alt="imagen de formulario" />
        <div className="formulario">
          <h2>{props.title || "undefined"}</h2>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="Nombres">Nombres y Apellidos</label>
            <input id="name" type="text" {...formik.getFieldProps("name")} />
            {formik.touched.name && formik.errors.name ? (
              <div className="errorForm">{formik.errors.name}</div>
            ) : null}
            <label htmlFor="tipo">Tipo</label>
            <select name="tipo" id="tipo" {...formik.getFieldProps("tipo")}>
              <option value="Garantia">Garantía</option>
              <option value="Mantenimiento">Mantenimiento</option>
              <option value="Garantia">Garantía</option>
            </select>
            {formik.touched.tipo && formik.errors.tipo ? (
              <div className="errorForm">{formik.errors.tipo}</div>
            ) : null}
            <label htmlFor="telefono">Tel&eacute;fono</label>
            <input
              id="telefono"
              type="text"
              {...formik.getFieldProps("telefono")}
            />
            {formik.touched.telefono && formik.errors.telefono ? (
              <div className="errorForm">{formik.errors.telefono}</div>
            ) : null}
            <label htmlFor="empresa">Empresa</label>
            <input
              id="empresa"
              type="text"
              {...formik.getFieldProps("empresa")}
            />
            {formik.touched.empresa && formik.errors.empresa ? (
              <div className="errorForm">{formik.errors.empresa}</div>
            ) : null}
            <label htmlFor="email">Email</label>
            <input id="email" type="email" {...formik.getFieldProps("email")} />
            {formik.touched.email && formik.errors.email ? (
              <div className="errorForm">{formik.errors.email}</div>
            ) : null}
            <label htmlFor="codigo">C&oacute;digo de Vehículo Intramet</label>
            <input
              id="codigo"
              type="text"
              {...formik.getFieldProps("codigo")}
            />
            {formik.touched.codigo && formik.errors.codigo ? (
              <div className="errorForm">{formik.errors.codigo}</div>
            ) : null}
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              name="mensaje"
              id="mensaje"
              cols="30"
              rows="10"
              {...formik.getFieldProps("mensaje")}
            ></textarea>
            {formik.touched.mensaje && formik.errors.mensaje ? (
              <div className="errorForm">{formik.errors.mensaje}</div>
            ) : null}
            <div className="buttons">
              <Boton>CORREO</Boton>
              <a
                id="whatsappMessage"
                className="whatsapp"
                href="https://api.whatsapp.com/send?phone=51945753902&text=Hola Intramet como estan"
                target="_blanck"
                onClick={onClick}
              >
                WHATSAPP
              </a>
            </div>
          </form>
        </div>
      </Wrapper>
    </div>
  )
}
export default Formulario
