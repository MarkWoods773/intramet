import React, { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { navigate } from "gatsby"
import { Wrapper } from "./style"
// import { Switch } from "../../../components/switch/style"
import Button from "../../../components/botonFormulario"
const Contact = props => {
  let [data, setData] = useState({})
  const onClick = e => {
    e.preventDefault()
    setData((data = formik.values))
    // console.log(data)
    let urlData = `https://api.whatsapp.com/send?phone=51945753902&text=Hola Intramet mi nombre es:  ${data.name} ,  empresa: ${data.empresa},  telefono: ${data.telefono},email: ${data.email},chasis: ${data.chasis}, observaciones ${data.observaciones}`
    // abrir en una nueva pestaña con los datos.
    if (
      data.name === "" ||
      data.empresa === "" ||
      data.telefono === "" ||
      data.email === "" ||
      data.chasis === "" ||
      // data.tipoAsiento === "" ||
      data.observaciones === ""
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
      empresa: "",
      telefono: "",
      email: "",
      condiciones: false,
      // bano: false,
      // aire: false,
      chasis: "",
      // tipoAsiento: "",
      observaciones: "",
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
      chasis: Yup.string().required(requiredText),
      // tipoAsiento: Yup.string().required(requiredText),
      observaciones: Yup.string().required(requiredText),
      condiciones: Yup.boolean().oneOf(
        [true],
        "Tienes que aceptar las Politica de Privacidad"
      ),
    }),
    onSubmit: values => {
      // const apiUrl =
      //   "http://intramet.marcos.almaquinto.com/server/busContacto.php"
      // let URLactual = window.location.origin
      let apiUrl = `https://intramet.com.pe/server/busContacto.php`
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
    <Wrapper>
      <div>
        <h2>CONTÁCTANOS PARA REALIZAR UNA COTIZACIÓN</h2>
        <form
          data-aos="fade-right"
          data-aos-duration="1500"
          className="formulario"
          onSubmit={formik.handleSubmit}
        >
          <label htmlFor="Nombres">Nombres y Apellidos</label>
          <input id="name" type="text" {...formik.getFieldProps("name")} />
          {formik.touched.name && formik.errors.name ? (
            <div className="errorForm">{formik.errors.name}</div>
          ) : null}
          <label htmlFor="Empresa">Empresa</label>
          <input
            id="empresa"
            type="text"
            {...formik.getFieldProps("empresa")}
          />
          {formik.touched.empresa && formik.errors.empresa ? (
            <div className="errorForm">{formik.errors.empresa}</div>
          ) : null}
          <label htmlFor="Tel">Tel&eacute;fono</label>
          <input
            id="telefono"
            type="text"
            {...formik.getFieldProps("telefono")}
          />
          {formik.touched.telefono && formik.errors.telefono ? (
            <div className="errorForm">{formik.errors.telefono}</div>
          ) : null}
          <label htmlFor="Email">Email</label>
          <input id="email" type="email" {...formik.getFieldProps("email")} />
          {formik.touched.email && formik.errors.email ? (
            <div className="errorForm">{formik.errors.email}</div>
          ) : null}
          {/* <div className="flex_preferencias">
            <div className="baño">
              <label htmlFor="bano">Baño</label>
              <Switch>
                <input
                  type="checkbox"
                  name="bano"
                  id="switch-label1"
                  className={`switch-button__checkbox`}
                  {...formik.getFieldProps("bano")}
                />
                <label
                  htmlFor="switch-label1"
                  className={`switch-button__label`}
                >
                  .
                </label>
              </Switch> */}
          {/* <ToggleSwitch item="1" /> */}
          {/* </div>
            <div>
              <label htmlFor="Aire">Aire Acondicionado</label>
              <Switch>
                <input
                  type="checkbox"
                  name="switch-button"
                  id="switch-label2"
                  className={`switch-button__checkbox`}
                  {...formik.getFieldProps("aire")}
                />
                <label
                  htmlFor="switch-label2"
                  className={`switch-button__label`}
                >
                  .
                </label>
              </Switch> */}
          {/* <ToggleSwitch item="2" /> */}
          {/* </div> */}
          {/* </div> */}

          <label htmlFor="Indicar">Indicar chasis de su preferencia</label>
          <input type="text" {...formik.getFieldProps("chasis")} />
          {formik.touched.chasis && formik.errors.chasis ? (
            <div className="errorForm">{formik.errors.chasis}</div>
          ) : null}
          {/* <label htmlFor="Describa">
            Describa el tipo de asientos que necesita
          </label>
          <textarea
            name="tpAsiento"
            id="tpAsiento"
            cols="30"
            rows="10"
            {...formik.getFieldProps("tipoAsiento")}
          ></textarea>
          {formik.touched.tipoAsiento && formik.errors.tipoAsiento ? (
            <div className="errorForm">{formik.errors.tipoAsiento}</div>
          ) : null} */}
          <label htmlFor="Observaciones">
            Describa las caratecteristicas de la carroceria a cotizar
          </label>
          <textarea
            name="observaciones"
            id="observaciones"
            cols="30"
            rows="10"
            {...formik.getFieldProps("observaciones")}
          ></textarea>
          {formik.touched.observaciones && formik.errors.observaciones ? (
            <div className="errorForm">{formik.errors.observaciones}</div>
          ) : null}
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
            <Button>CORREO</Button>
            <a
              id="whatsappMessage"
              className="whatsapp"
              href="https://api.whatsapp.com/send?phone=51945440268&text=Hola Intramet como estan"
              target="_blanck"
              onClick={onClick}
            >
              WHATSAPP
            </a>
          </div>
        </form>
      </div>
    </Wrapper>
  )
}
export default Contact
