import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Form05 = () => {
  const [form, setForm] = useState({
    firstName: "Jane",
    lastName: "Doe",
    email: "exemple@mail.com",
    phone: "+44",
    gender: "Male",
    terms: false,
  });

  const [error, setError] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phoneNumber: false,
    gender: false,
    terms: false
});

  const handleSubmit = (e) => {
    if (!form.terms) {
        setError(prev => ({ ...prev, terms: true }))
        return;
    }
    setError(prev => ({ ...prev, terms: false }));

    if (form.firstName.length < 3) {
        setError(prev => ({ ...prev, firstName: true }))
        return;
    }
    setError(prev => ({ ...prev, firstName: false }));
  };

  const handleChange = (e) => {
    setForm(prev => ({
        ...prev, [e.target.name]: e.target.type === "checkbox"
        ? e.target.checked 
        : e.target.value
    }))
  };

  const [customGender, setCustomGender] = useState("");

  const handleCustomGenderChange = (e) => {
    setCustomGender(e.target.value);
    setForm((prev) => ({
      ...prev,
      gender: e.target.value // Eğer customGender yazılırsa gender değerini de güncelle.
    }));
  };

  return (
    <Container className="my-5">
      <h1>Form 05 Manuel Form Dogrulama</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="firstName" className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            value={form.firstName}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="lastName" className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            value={form.lastName}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="email" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            placeholder="Enter your Email"
            value={form.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="phoneNumber" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="phoneNumber"
            placeholder="Enter your phone number"
            value={form.phoneNumber}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Gender</Form.Label>
          <Form.Group>
            <Form.Check
              type="radio"
              label="Female"
              name="gender"
              value="female"
              onChange={handleChange}
              inline
            />
            <Form.Check
              type="radio"
              label="Male"
              name="gender"
              value="male"
              onChange={handleChange}
              inline
            />
            <Form.Check
              type="radio"
              label="Other"
              name="gender"
              value="other"
              onChange={handleChange}
              inline
            />
            <Form.Group controlId="name" className="text-aling-centre">
                <Form.Check
              type="radio"
              name="gender"
              value="custom"
              onChange={handleChange}
              inline
            />
            <Form.Control
              type="text"
      placeholder="Please describe your gender"
      name="customGender"
      value={customGender}
      onChange={handleCustomGenderChange} // Metin alanı değiştiğinde handleCustomGenderChange fonksiyonunu çağır.
            />
            </Form.Group>
            
          </Form.Group>
        </Form.Group>
        <Form.Group controlId='terms' className='mb-3'>
                    <Form.Check
                        label="I accept the terms and conditions"
                        type='checkbox'
                        name='terms'
                        checked={form.terms}
                        onChange={handleChange}
                    />
                    {
                        error.terms
                        &&
                        <p className='text-danger'>
                            *You must accept the terms and conditions
                        </p>
                    }
                </Form.Group>
        <Button variant="warning" className="w-100 my-1" type="submit">
          Send
        </Button>
      </Form>
    </Container>
  );
};

export default Form05;
