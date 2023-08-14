import React, { useState } from "react"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import Button from "../botonFormulario"
import { Wrapper } from "./style"
import { navigate } from "gatsby"

const Formulario = props => {
  // hooks para cambiar el valor si un robot llena el campo
  let [nospam, setNospam] = useState("")
  const requiredText = "Es requerido este campo"
  const ValidationYup = Yup.object().shape({
    name: Yup.string()
      .min(3, "Tiene que tener al menos 3 letras")
      .required(requiredText),
    email: Yup.string()
      .email("Dirección de correo electrónico inválida")
      .required(requiredText),

    telefono: Yup.string()
      .required(requiredText)
      .matches(/^[0-9]+$/, "Tiene que ser solo digitos")
      .min(9, "Tiene que ser de 9 digitos el número de teléfono")
      .max(9, "Tiene que ser de 9 digitos el número de teléfono"),

    cv: Yup.string().when({
      is: props.cv,
      then: Yup.string(),
      otherwise: Yup.string().required(requiredText),
    }),
    mensaje: Yup.string().required(requiredText),
    condiciones: Yup.boolean().oneOf(
      [true],
      "Tienes que aceptar las Politica de Privacidad"
    ),
  })
  const handleSubmit = values => {
    let data = new FormData()
    // const apiUrl =
    //   "http://intramet.marcos.almaquinto.com/server/trabajaContacto.php"
    // let URLactual = window.location.origin
    // let apiUrl = `${URLactual}/server/trabajaContacto.php`
    let apiUrl = `https://intramet.com.pe/server/trabajaContacto.php`
    // console.log(URLactual);

    data.append("cv", values.cv)
    data.append("email", values.email)
    data.append("mensaje", values.mensaje)
    data.append("name", values.name)
    data.append("telefono", values.telefono)
    console.log(data.get("cv"))
    // console.log(data.get("email"))
    // console.log(data.get("mensaje"))
    // console.log(data.get("name"))
    // console.log(data.get("telefono"))
    // console.log(values)
    // console.log(data)
    // return data ;
    // }
    if (nospam === "") {
      fetch(apiUrl, {
        method: "POST",
        // headers: new Headers({
        //   Accept: "application/json"
        // }),
        // body: JSON.stringify(values),
        body: data,
      })
        .then(response => response.json())
        // .then(data =>
        //  console.log(data)
        // )
        .catch(error => console.log(error))
    } else {
      console.log("eres un robot")
    }
    navigate("/gracias/")
  }
  return (
    <div data-aos="fade-right" data-aos-duration="1500" className="container">
      <Wrapper>
        <div className="cabecera">
          <h2>{props.title || "undefined"}</h2>
          <p>{props.text || "undefined"}</p>
        </div>
        <Formik
          // inicialmnte los valores son estos
          initialValues={{
            name: "",
            email: "",
            telefono: "",
            cv: "",
            mensaje: "",
            condiciones: false,
          }}
          validationSchema={ValidationYup}
          //este es el metodo que hace el envio de datos.
          onSubmit={handleSubmit}
        >
          {({ errors, touched, setFieldValue }) => (
            <Form>
              <label htmlFor="name">Nombres y Apellidos *</label>
              <Field type="text" name="name" />
              {touched.name && errors.name ? (
                <div className="errorForm">{errors.name}</div>
              ) : null}
              <label htmlFor="telefono">Celular *</label>
              <Field name="telefono" type="text" />
              {touched.telefono && errors.telefono ? (
                <div className="errorForm">{errors.telefono}</div>
              ) : null}
              <label htmlFor="email">Email *</label>
              <Field name="email" type="email" />
              {touched.email && errors.email ? (
                <div className="errorForm">{errors.email}</div>
              ) : null}
              {props.cv ? (
                <>
                  <label htmlFor="cv">Adjunta tu CV</label>
                  <input
                    type="file"
                    name="cv"
                    onChange={event => {
                      setFieldValue("cv", event.target.files[0])
                    }}
                  />
                  {touched.cv && errors.cv ? (
                    <div className="errorForm">{errors.cv}</div>
                  ) : null}
                </>
              ) : null}
              <label htmlFor="mensaje">Mensaje *</label>
              <Field
                component="textarea"
                name="mensaje"
                id="mensaje"
                cols="30"
                rows="12"
              />
              {touched.mensaje && errors.mensaje ? (
                <div className="errorForm">{errors.mensaje}</div>
              ) : null}
              <label className="condiciones">
                
                <Field
                
                type="checkbox"
                name="condiciones"
                id="condiciones"
               
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
              
              {touched.condiciones && errors.condiciones ? (
                <div className="errorForm">{errors.condiciones}</div>
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
              <div className="buttons">
                <Button>CORREO</Button>
              </div>
              {/* <input
                type="file"
                name="file"
                onChange={event => {
                  formProps.setFieldValue("cv", event.target.files[0])
                }}
              /> */}
              {/* <button type="Submit">Submit</button> */}
            </Form>
          )}
        </Formik>
      </Wrapper>
    </div>
  )
}

export default Formulario
