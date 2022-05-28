  import React, { useState } from "react";
  import axios from "axios";
  import { Formik, Form, Field, ErrorMessage } from "formik";
  import * as Yup from "yup";
  
const Contact = (props) => {
    const formSchema = Yup.object().shape({
      email: Yup.string()
        .email("Email inválido")
        .required("Obligatorio"),
      message: Yup.string().required("Obligatorio"),
      name: Yup.string().required("Obligatorio"),
      terms: Yup.bool().oneOf([true], 'Abligatorio')
    });
    
    /* Server State Handling */
    const [serverState, setServerState] = useState();
    const handleServerResponse = (ok, msg) => {
      setServerState({ok, msg});
    };
    const handleOnSubmit = (values, actions) => {
      axios({
        method: "POST",
        url: "https://formspree.io/f/xknyyvyo",
        data: values
      })
        .then(response => {
          actions.setSubmitting(false);
          actions.resetForm();
          handleServerResponse(true, "Mensaje enviado con éxito.");
        })
        .catch(error => {
          actions.setSubmitting(false);
          handleServerResponse(false, "Error al enviar el mensaje.");
        });
    };
    
    return(
      <div className="contact" id="contacto">
        <div className="contact-content">
          <div lang="en" className={`title ${props.titleClasses}`}>{props.title}</div>
          <div className="description">{props.text}</div>
          <div className="impact-text">{props.impactText}</div>
        </div>

        <Formik
              initialValues={{ name: "", telephone: "", email: "", message: "", terms: false }}
              onSubmit={handleOnSubmit}
              validationSchema={formSchema}
            >
              {({ isSubmitting }) => (
                <Form className="contact-form" id="fs-frm" noValidate>
                  <Field id="name" type="text" name="name" placeholder="Nombre" />
                  <ErrorMessage name="name" className="errorMsg" component="p" />
                  
                  <Field id="email" type="email" name="email"  placeholder="Email" />
                  <ErrorMessage name="email" className="errorMsg" component="p" />
                  
                  <Field id="telephone" type="tel" name="telephone" placeholder="Teléfono (opcional)" />
                  <ErrorMessage name="telephone" className="errorMsg" component="p" />
                  
                  <Field id="message" name="message" component="textarea" placeholder="Mensaje" />
                  <ErrorMessage name="message" className="errorMsg" component="p" />
                  
                  
                  <label className="checkbox">
                    <Field type="checkbox" name="terms" />
                    Acepto la <div>&nbsp;</div> <a href="#"> política de privacidad.</a>
                  </label>
                  <ErrorMessage name="terms" className="errorMsg" component="p" />
                  
                  <button className="full-width" type="submit" disabled={isSubmitting}>
                    Escríbenos
                  </button>
                  
                  {serverState && (
                    <div className={`formMessage ${!serverState.ok ? "errorMsg" : "successMsg"}`}>
                        <div className="box">
                          <div className="box-symbol"></div>
                        </div>
                      
                      <div className={!serverState.ok ? "errorMsg" : "successMsg"}>
                        {serverState.msg}
                      </div>
                    </div>
                  )}
                </Form>
              )}
          </Formik>
    </div>
    );
}

export default Contact;