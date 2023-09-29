import { useFormik } from "formik"; // Formik kütüphanesinden useFormik fonksiyonunu import ediyoruz.
import React from "react"; // React kütüphanesini import ediyoruz.
import { Container, Form, Button } from "react-bootstrap"; // React-Bootstrap'tan bazı componentleri import ediyoruz.
import * as Yup from "yup"; // Form doğrulama işlemleri için Yup kütüphanesini import ediyoruz.

// Fonksiyonel bir component oluşturuyoruz.
const FormikYub01 = () => {
  // Formun başlangıç değerlerini belirliyoruz.
  const initialValues = {
    yourName: "",
    password: "",
  };

  // Yup ile form alanlarımız için doğrulama şemalarını oluşturuyoruz.
  const validationSchema = Yup.object({
    yourName: Yup.string().required("Required field, please enter your name."),
    password: Yup.string().required("Required field, please enter your password.")
  });

  // Form gönderildiğinde çalışacak olan fonksiyonu tanımlıyoruz.
  const onSubmit = values => {
    console.log(values); // Gönderilen form değerlerini console'da gösteriyoruz.
  };

  // useFormik hook'unu kullanarak formik nesnesini oluşturuyoruz.
  const formik = useFormik({
    initialValues: initialValues, // başlangıç değerlerini belirtiyoruz.
    validationSchema: validationSchema, // doğrulama şemasını belirtiyoruz.
    onSubmit: onSubmit, // form gönderildiğinde çalışacak fonksiyonu belirtiyoruz.
  });

  // Hata mesajlarını ve dokunulmuş alanları console'da göstermek için.
  // console.log(formik.errors)
  // console.log(formik.touched)

  // Componentin render edeceği JSX'i return ediyoruz.
  return (
    <Container className="my-5">
      <h1>Formik-Yup 01</h1>
      <Form onSubmit={formik.handleSubmit}>
        
        {/* Name input alanı */}
        <label htmlFor="yourName">Your Name</label>
        <input
          // Input özellikleri belirleniyor.
          type="text"
          name="yourName"
          id="yourName"
          placeholder="Please enter your first name!"
          className="w-100"
          value={formik.values.yourName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {/* Name alanı için hata mesajı gösteriliyor. */}
        {
          formik.errors.yourName 
          && 
          formik.touched.yourName
          &&
          <p className="text-warning">
            **{formik.errors.yourName}
          </p>
        }

        {/* Password input alanı */}
        <label className="mt-3" htmlFor="password">
          Your Password
        </label>
        <input
          // Input özellikleri belirleniyor.
          type="text"
          name="password"
          id="password"
          placeholder="Please enter your password!"
          className="w-100"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {/* Password alanı için hata mesajı gösteriliyor. */}
        {
          formik.errors.password 
          &&
          formik.touched.password
          && 
          <p className="text-warning">
            **{formik.errors.password}
          </p>
        }
        
        {/* Gönder butonu */}
        <Button type="submit" variant="warning" className="my-3 w-100">
          SEND FORM
        </Button>
      </Form>
    </Container>
  );
};

export default FormikYub01; // Componenti dışa aktarıyoruz.
