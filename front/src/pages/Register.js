import React, { useEffect, useState } from "react";
import { Button, Card, Container, Form, Spinner } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/features/authSlice";
import { toast } from "react-toastify";

const initialState = {
  firstName: "",
  lastName:"",
  email: "",
  password: "",
  confirmPassword:""
};

const Register = () => {
  const [formValue, setformValue] = useState(initialState);
  const { email, password, firstName, lastName, confirmPassword } = formValue;
  const { loading, error } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    // if (email && password) {
    //   dispatch(login({ formValue, navigate, toast }));
    // }
  };
  const onInputChange = (e) => {
    let { name, value } = e.target;
    setformValue({ ...formValue, [name]: value });
  };

  return (
    <>
      <Container>
        <Card border="success" className="p-3 mt-5">
          <Card.Header>Sign Up</Card.Header>
          <Card.Body>
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="firstname"
                onChange={onInputChange}
                value={firstName}
                name="firstName"
              />
              <input
                type="text"
                placeholder="lastname"
                onChange={onInputChange}
                value={lastName}
                name="lastName"
              />
              <input
                type="text"
                placeholder="email"
                onChange={onInputChange}
                value={email}
                name="email"
              />
              <input
                type="text"
                placeholder="password"
                onChange={onInputChange}
                value={password}
                name="password"
              />
               <input
                type="text"
                placeholder="confirm password"
                onChange={onInputChange}
                value={confirmPassword}
                name="confirmPassword"
              />

              <button type="submit">
                {loading && (
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                )}
                Register
              </button>
            </form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Register
