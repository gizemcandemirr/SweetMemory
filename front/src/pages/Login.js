import React, { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";

import {useNavigate} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import { login } from "../redux/features/authSlice"

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [formValue, setformValue] = useState(initialState);
  const { email, password } = formValue;

  const dispatch= useDispatch();
  const navigate= useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email)
    if(email && password){
      dispatch(login({formValue,navigate}))
    }
  };
  const onInputChange = (e) => {
    let { name, value } = e.target;
    setformValue({ ...formValue, [name]: value });
  };

  return (
    <>
      <Container>
        <Card border="success" className="p-3 mt-5">
          <Card.Header>Sign In</Card.Header>
          <Card.Body>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="email" onChange={onInputChange} value={email}
                name="email"  />
               <input type="text" placeholder="password" onChange={onInputChange} value={password}
                name="password"
              />
              
              <button type="submit">Login</button>
            </form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Login;
