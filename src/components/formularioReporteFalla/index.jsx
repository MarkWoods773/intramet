import React, { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { Link, navigate } from "gatsby"
import { Wrapper } from "./style"
// import Boton from "../botonFormulario"
// import { FaWhatsapp } from "react-icons/fa"
const Formulario = props => {
  let [data, setData] = useState({})
  const onClick = e => {
    e.preventDefault()
    setData((data = formik.values))
    console.log(data)
    let urlData = `https://api.whatsapp.com/send?phone=51936747297&text=Hola INTRAMET. El código de mi carrocería es  ${data.numberOP},   
    Mi nombre es: ${data.name}, 
    Telefono: ${data.telefono},
    Mensaje: ${data.mensaje}
    `
    // abrir en una nueva pestaña con los datos.
    if (
      data.numberOP === "" ||
      data.name === "" ||
      // data.condiciones ===false ||
      // data.dni === "" ||
      // data.email === "" ||
      data.telefono === "" ||
      data.mensaje === ""
    ) {
      alert("Te faltan llenar datos")
    } else {
      if (data.condiciones === false || data.condicionPolitica===false) {
        alert("Tienes que aceptar los terminos y condiciones o la politica de datos")
      } else {
        window.open(urlData)
      }
    }
  }
  const requiredText = "Es requerido este campo"
  const formik = useFormik({
    initialValues: {
      numberOP: "",
      name: "",
      condiciones: false,
      // dni: "",
      // email: "",
      telefono: "",
      mensaje: "",
      condicionPolitica:false
    },
    validationSchema: Yup.object({
      numberOP: Yup.string()
        .min(3, "Tiene que tener al menos 3 letras para el codigo")
        .required(requiredText),
      name: Yup.string()
        .min(3, "Tiene que tener al menos 3 letras")
        .required(requiredText),
      // dni: Yup.string()
      //   .required(requiredText)
      //   .matches(/^[0-9]+$/, "Tiene que ser solo digitos")
      //   .min(8, "Tiene que ser de 8 digitos el número de DNI")
      //   .max(8, "Tiene que ser de 8 digitos el número de DNI"),
      telefono: Yup.string()
        .required(requiredText)
        .matches(/^[0-9]+$/, "Tiene que ser solo digitos")
        .min(9, "Tiene que ser de 9 digitos el número de teléfono")
        .max(9, "Tiene que ser de 9 digitos el número de teléfono"),
      // tipo: Yup.string().required(requiredText),
      // email: Yup.string()
      //   .email("Dirección de correo electrónico inválida")
      //   .required(requiredText),
      mensaje: Yup.string().required(requiredText),
      condiciones: Yup
        .boolean()
        .oneOf([true], "Tienes que aceptar las condiciones"),
      condicionPolitica: Yup
        .boolean()
        .oneOf([true], "Tienes que aceptar las Politica de Privacidad"),
    }),
    onSubmit: values => {
      // const apiUrl =
      //   "http://intramet.marcos.almaquinto.com/server/multiformulario.php"
      let URLactual = window.location.origin
      let apiUrl = `${URLactual}/server/multiformulario.php`
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
    <div className="container" id="contact">
      <Wrapper>
        <div className="formulario">
          <div className="cabecera">
            <h2>{props.title || "undefined"}</h2>
            <p>{props.text || null}</p>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="numberOP">Código de Carrocería INTRAMET *</label>
            <input
              id="numberOP"
              placeholder="(Ejemplo: OPJ21)"
              type="text"
              {...formik.getFieldProps("numberOP")}
            />
            {formik.touched.numberOP && formik.errors.numberOP ? (
              <div className="errorForm">{formik.errors.numberOP}</div>
            ) : null}
            <span className="moreWhatsapp">
              Si no cuenta con código de carrocería hacer click aqu&iacute; &nbsp;
              <Link
                id="whatsappMessage"
                className="whatsappVerde"
                to="/mantenimiento-y-asesoria#contact"
                // target="_blanck"
              >
                {/* <FaWhatsapp className="iconWhatsap"></FaWhatsapp> */}
                <span>ASESOR&Iacute;A</span>
              </Link>
            </span>
            <label htmlFor="Nombres">Nombres y Apellidos *</label>
            <input id="name" type="text" {...formik.getFieldProps("name")} />
            {formik.touched.name && formik.errors.name ? (
              <div className="errorForm">{formik.errors.name}</div>
            ) : null}

            {/* <label htmlFor="dni">DNI</label>
            <input id="dni" type="text" {...formik.getFieldProps("dni")} />
            {formik.touched.dni && formik.errors.dni ? (
              <div className="errorForm">{formik.errors.dni}</div>
            ) : null} */}
            <label htmlFor="telefono">Celular *</label>
            <input
              id="telefono"
              type="text"
              {...formik.getFieldProps("telefono")}
            />
            {formik.touched.telefono && formik.errors.telefono ? (
              <div className="errorForm">{formik.errors.telefono}</div>
            ) : null}
            {/* <label htmlFor="email">Email</label>
            <input id="email" type="email" {...formik.getFieldProps("email")} />
            {formik.touched.email && formik.errors.email ? (
              <div className="errorForm">{formik.errors.email}</div>
            ) : null} */}
            <label htmlFor="mensaje">Mensaje *</label>
            <textarea
              name="mensaje"
              id="mensaje"
              cols="30"
              rows="10"
              placeholder="(Describa las anomalías que presento su carrocería)"
              {...formik.getFieldProps("mensaje")}
            ></textarea>
            {formik.touched.mensaje && formik.errors.mensaje ? (
              <div className="errorForm">{formik.errors.mensaje}</div>
            ) : null}
            <label className="condiciones">
              <input
                type="checkbox"
                name="checked"
                value="One"
                {...formik.getFieldProps("condiciones")}
              />
              <span>
                Para proceder a reportar tu falla, lea primero las{" "}
                <a
                  className="condionestitle"
                  href="/pdf/CONDICIONESDEGARANTIA.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <b>condiciones de garantía</b>{" "}
                </a>{" "}
              </span>
            </label>
            {formik.touched.condiciones && formik.errors.condiciones ? (
              <div className="errorForm">{formik.errors.condiciones}</div>
            ) : null}
            <label className="condiciones">
            <input
              type="checkbox"
              name="checked"
              value="One"
              {...formik.getFieldProps("condicionPolitica")}
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
          {formik.touched.condicionPolitica && formik.errors.condicionPolitica ? (
            <div className="errorForm">{formik.errors.condicionPolitica}</div>
          ) : null}
            <div className="buttons">
              {/* <Boton>CORREO</Boton> */}

              <br />
              <a
                id="whatsappMessage"
                className="whatsapp"
                href="https://api.whatsapp.com/send?phone=51936747297&text=Gracias por contactarte con Intramet"
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
