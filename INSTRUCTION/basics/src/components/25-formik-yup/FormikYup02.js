import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { Button, Container, Form, Dropdown } from "react-bootstrap";
import * as Yup from "yup";
import axios from "axios";

// Base URL'yi .env dosyasından çekiyoruz
const BASE_URL = process.env.REACT_APP_API_URL;

const FormikYup02 = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [isMatched, setIsMatched] = useState(null);
  // Formik hook kullanarak form kontrolünü yapıyoruz
  const formik = useFormik({
    // Form başlangıç değerleri
    initialValues: {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    // Form doğrulama şeması (Yup kullanarak)
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, "Please enter at least 2 character")
        .required("Required field, please enter your name."),
      lastName: Yup.string()
        .min(2, "Please enter at least 2 character")
        .required("Required field, please enter your lastname."),
      email: Yup.string()
        .email("Please enter a valid email")
        .required("Required field, please enter email."),
      password: Yup.string()
        .min(6, "Please enter at least 6 character")
        .max(15, "Please enter maximum 15 character")
        .required("Required field, please enter your password."),
      id: Yup.string().required("ID is required"),
    }),
    // Form gönderildiğinde çalışacak fonksiyon
    onSubmit: async values => {
      try {
        // API'ye POST isteği atıyoruz
        const response = await axios.post(
          `${BASE_URL}/react-basics/user-information`,
          values
        );
        alert(JSON.stringify(response.data));
      } catch (error) {
        alert("An error has occurred!"); // Hata durumunda kullanıcıyı uyarıyoruz
      } finally {
        console.log("Gittik Geldik"); // İşlem tamamlandığında log atıyoruz
      }
    },
  });

  // DELETE isteği yapmak için kullanılan fonksiyon
  const handleDelete = () => {
    axios
      .delete(`${BASE_URL}/react-basics/user-information/${formik.values.id}`)
      .then(response => console.log(response.data))
      .catch(error => console.log(error))
      .finally(() => console.log("went and returned"));
  };

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/get-ids?input=${formik.values.id}`);
        setSuggestions(response.data.ids || []);
        
        const isMatch = response.data.ids.includes(formik.values.id);
        setIsMatched(isMatch);
        
      } catch (error) {
        console.error('Failed to fetch suggestions:', error);
      }
    };
    
    fetchSuggestions();
  }, [formik.values.id]);
  
  const handleSelect = (id) => {
    formik.setFieldValue("id", id);
  };

  return (
    <Container>
      <h1>Formik Yup 02</h1>
      <p>Required fields</p>
      <Form noValidate onSubmit={formik.handleSubmit}>

      <Form.Group controlId="id" className="my-3">
          <Form.Label>ID</Form.Label>
          
          <Form.Control
            type="text"
            placeholder="Please enter your ID"
            {...formik.getFieldProps("id")}
            style={{ borderColor: isMatched === null ? 'initial' : isMatched ? 'blue' : 'red' }}
          />
          
          <Dropdown.Menu>
            {suggestions.map((suggestion) => (
              <Dropdown.Item key={suggestion} onClick={() => handleSelect(suggestion)}>
                {suggestion}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
          
        </Form.Group>

        {/* Form alanlarını render ediyoruz */}
        <Form.Group controlId="id" className="my-3">
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Please enter your ID"
            {...formik.getFieldProps("id")}
          />
        </Form.Group>
        {/* ... diğer form alanları ... */}
        <Button type="submit" variant="warning" className="w-100">
          SEND
        </Button>
        {/* Delete butonu, kullanıcıya ID ile kayıt silme olanağı tanır */}
        <Button variant="danger" className="w-100 mt-2" onClick={handleDelete}>
          DELETE BY ID
        </Button>
      </Form>
    </Container>
  );
};

export default FormikYup02;
