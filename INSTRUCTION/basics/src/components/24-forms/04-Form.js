import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const formArray = [
  {
    id: "firstName",
    name: "firstName",
    label: "First Name",
    type: "text",
    placeholder: "Enter your first name please!",
  },
  {
    id: "lastName",
    name: "lastName",
    label: "Last Name",
    type: "text",
    placeholder: "Enter your flast name please!",
  },
  {
    id: "email",
    name: "email",
    label: "Email",
    type: "text",
    placeholder: "Enter your email please!",
  },
  {
    id: "phone",
    name: "phone",
    label: "Phone Number",
    type: "tel",
    placeholder: "Enter your phone number please!",
  },
];

const genderArray = [
  {
    type: "radio",
    label: "Femele",
    name: "gender",
    id: "femele",
  },
  {
    type: "radio",
    label: "Male",
    name: "gender",
    id: "male",
  },
  {
    type: "radio",
    label: "Other",
    name: "gender",
    id: "other",
  },
  {
    type: "radio",
    label: "Prefer Not To Say",
    name: "gender",
    id: "preferNotToSay",
  },
];

const Form04 = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    agreement: false,
  });

  const handleChange = e => {
    //const { name, value} = e.target;

    /* const value = e.target.type === "checkbox"
    ? e.target.checked
    : e.target.value */
    setForm(prev => ({
      ...prev,
      //value
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
      //...prev, [name]:value
    }));
  };

  return (
    <Container>
      <h1>Form 04</h1>
      <Form>
        {formArray.map(formItem => (
          <Form.Group key={formItem.id} className="mb-3">
            <Form.Label htmlFor={formItem.id}>{formItem.label}</Form.Label>
            <Form.Control
              /* type={formItem.type}
              name={formItem.name}
              id={formItem.id}
              placeholder={formItem.placeholder} */
              {...formItem}
              value={form[formItem.name]}
              onChange={handleChange}
            />
          </Form.Group>
        ))}

        <Form.Group className="mb-3">
          <Form.Label>Gender</Form.Label>
          {genderArray.map(genderItem => (
            <Form.Check
              key={genderItem.id}
              {...genderItem}
              onChange={handleChange}
            />
          ))}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="I have read and agree to the user agreement."
            name="agreement"
            id="agreement"
            checked={form.agreement}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="warning" className="w-100">
          SEND
        </Button>
      </Form>
    </Container>
  );
};

export default Form04;
