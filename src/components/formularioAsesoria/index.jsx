import React, { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { navigate } from "gatsby"
import { Wrapper } from "./style"
import Boton from "../botonFormulario"
const Formulario = props => {
  let [data, setData] = useState({})
  let [nospam, setNospam] = useState("")
  const onClick = e => {
    e.preventDefault()
    setData((data = formik.values))
    console.log(data)
    let urlData = `https://api.whatsapp.com/send?phone=51945753902&text=Hola Intramet. Solicito asesoria, estos son mis datos:
    Nombre: ${data.name}, 
    Ciudad: ${data.ciudad} 
    Telefono: ${data.telefono},
    
    Email: ${data.email || "no tiene"},
    Empresa: ${data.empresa || "no tiene"},
    RUC: ${data.ruc || "no tiene"}
    Marca de Chasis: ${data.marcaChasis},
    Modelo : ${data.modelo},
    Capacidad de pasajeros : ${data.capPasajeros},
    Consulta : ${data.consulta}
    `
    // abrir en una nueva pestaña con los datos.
    if (
      data.name === "" ||
      data.ciudad === "" ||
      data.telefono === "" ||
      data.email === "" ||
      // data.empresa === "" ||
      // data.ruc === "" ||
      data.marcaChasis === ""
      // data.modelo === "" ||
      // data.capPasajeros === "" ||
      // data.consulta === ""
    ) {
      alert("Te faltan llenar datos")
    } else {
      if (data.condiciones === false) {
        alert("Tienes que aceptar las Politica de Privacidad")
      } else {
        window.open(urlData)
      }
    }
  }
  const requiredText = "Es requerido este campo"
  const formik = useFormik({
    initialValues: {
      name: "",
      ciudad: "",
      telefono: "",
      email: "",
      empresa: "",
      ruc: "",
      marcaChasis: "",
      modelo: "",
      capPasajeros: "",
      consulta: "",
      condiciones: false,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Tiene que tener al menos 3 letras")
        .required(requiredText),
      // dni: Yup.string()
      //   .required(requiredText)
      //   .matches(/^[0-9]+$/, "Tiene que ser solo digitos")
      //   .min(8, "Tiene que ser de 8 digitos el número de DNI")
      //   .max(8, "Tiene que ser de 8 digitos el número de DNI"),
      ciudad: Yup.string()
        .min(3, "Tiene que tener al menos 3 letras")
        .required(requiredText),
      telefono: Yup.string()
        .required(requiredText)
        .matches(/^[0-9]+$/, "Tiene que ser solo digitos")
        .min(9, "Tiene que ser de 9 digitos el número de teléfono")
        .max(9, "Tiene que ser de 9 digitos el número de teléfono"),
      // tipo: Yup.string().required(requiredText),
      email: Yup.string()
        .email("Dirección de correo electrónico inválida")
        .required(requiredText),
      empresa: Yup.string(),
      // .required(requiredText),
      ruc: Yup.string()
        // .required(requiredText)
        .matches(/^[0-9]+$/, "Tiene que ser solo digitos")
        .min(11, "Tiene que ser de 11 digitos el número de RUC")
        .max(11, "Tiene que ser de 11 digitos el número de RUC"),
      marcaChasis: Yup.string().required(requiredText),
      modelo: Yup.string(),
      // .required(requiredText),
      capPasajeros: Yup.string()
        // .required(requiredText)
        .matches(/^[0-9]+$/, "Tiene que ser solo digitos"),
      consulta: Yup.string(),
      condiciones: Yup.boolean().oneOf(
        [true],
        "Tienes que aceptar las Politica de Privacidad"
      ),
      // .required(requiredText),
    }),
    onSubmit: values => {
      // const apiUrl =
      //   "http://intramet.marcos.almaquinto.com/server/multiformulario.php"
      // let URLactual = window.location.origin
      let apiUrl = `https://intramet.com.pe/server/multiformulario.php`
      // const datos = JSON.stringify(values, null, 2)
      // console.log(nospam)
      if (nospam === "") {
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
      } else {
        console.log("eres un robot")
      }
      navigate("/gracias/")
      // .then(data => console.log(data))
      // .then(response => console.log("Success:", response));
      // console.log(datos)
    },
  })
  return (
    <div className="container">
      <Wrapper>
        <div id="contact" className="formulario">
          <div className="cabecera">
            <h2>{props.title || "undefined"}</h2>
            <p>{props.text || null}</p>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="nameflex">
              <label htmlFor="Nombres">Nombres y Apellidos *</label>
              <input id="name" type="text" {...formik.getFieldProps("name")} />
            </div>
            {formik.touched.name && formik.errors.name ? (
              <div className="errorForm">{formik.errors.name}</div>
            ) : null}
            {/* <label htmlFor="dni">DNI</label>
            <input id="dni" type="text" {...formik.getFieldProps("dni")} />
            {formik.touched.dni && formik.errors.dni ? (
              <div className="errorForm">{formik.errors.dni}</div>
            ) : null} */}
            <label htmlFor="ciudad">Ciudad *</label>
            <input
              id="ciudad"
              type="text"
              {...formik.getFieldProps("ciudad")}
            />
            {formik.touched.ciudad && formik.errors.ciudad ? (
              <div className="errorForm">{formik.errors.ciudad}</div>
            ) : null}
            <label htmlFor="telefono">Celular *</label>
            <input
              id="telefono"
              type="text"
              {...formik.getFieldProps("telefono")}
            />
            {formik.touched.telefono && formik.errors.telefono ? (
              <div className="errorForm">{formik.errors.telefono}</div>
            ) : null}
            <label htmlFor="email">Email *</label>
            <input id="email" type="email" {...formik.getFieldProps("email")} />
            {formik.touched.email && formik.errors.email ? (
              <div className="errorForm">{formik.errors.email}</div>
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
            <label htmlFor="ruc">RUC</label>
            <input id="ruc" type="text" {...formik.getFieldProps("ruc")} />
            {formik.touched.ruc && formik.errors.ruc ? (
              <div className="errorForm">{formik.errors.ruc}</div>
            ) : null}
            <p>INFORMACI&Oacute;N DEL VEH&Iacute;CULO</p>
            <label htmlFor="marcaChasis">Marca de Chasis *</label>
            <input
              id="marcaChasis"
              type="text"
              {...formik.getFieldProps("marcaChasis")}
            />
            {formik.touched.marcaChasis && formik.errors.marcaChasis ? (
              <div className="errorForm">{formik.errors.marcaChasis}</div>
            ) : null}
            <label htmlFor="modelo">Modelo</label>
            <input
              id="modelo"
              type="text"
              {...formik.getFieldProps("modelo")}
            />
            {formik.touched.modelo && formik.errors.modelo ? (
              <div className="errorForm">{formik.errors.modelo}</div>
            ) : null}
            <label htmlFor="capPasajeros">Capacidad de Pasajeros</label>
            <input
              id="capPasajeros"
              type="text"
              {...formik.getFieldProps("capPasajeros")}
            />
            {formik.touched.capPasajeros && formik.errors.capPasajeros ? (
              <div className="errorForm">{formik.errors.capPasajeros}</div>
            ) : null}
            <label htmlFor="consulta">Consulta</label>
            <textarea
              id="consulta"
              cols="30"
              rows="10"
              type="text"
              {...formik.getFieldProps("consulta")}
            />
            {formik.touched.consulta && formik.errors.consulta ? (
              <div className="errorForm">{formik.errors.consulta}</div>
            ) : null}
            {/* Comienzo del campo honeypot  */}
            <div style={{ display: "none" }}>
              <label htmlFor="nospam">
                Este es un campo de control. Si lo ves, pasa de él.
              </label>
              <input
                type="text"
                name="nospam"
                onChange={e => {
                  setNospam(e.target.value)
                }}
              />
            </div>
            {/* Final del campo honeypot  */}
            <label className="condiciones">
              <input
                type="checkbox"
                name="checked"
                value="One"
                {...formik.getFieldProps("condiciones")}
              />
              <span>
                Al enviar acepto las
                <a
                  className="condionestitle"
                  href="/politica-privacidad"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <b>políticas de privacidad</b>{" "}
                </a>{" "}
                de Intramet
              </span>
            </label>
            {formik.touched.condiciones && formik.errors.condiciones ? (
              <div className="errorForm">{formik.errors.condiciones}</div>
            ) : null}
            <div className="buttons">
              <Boton>CORREO</Boton>
              <a
                id="whatsappMessage"
                className="whatsapp"
                href="https://api.whatsapp.com/send?phone=51945440268&text=Gracias por contactarte con Intramet"
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
