import React, { useEffect, useState } from "react";
import { Button, Card, Container, Form, Spinner } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { googleSignIn, login } from "../redux/features/authSlice";
import { toast } from "react-toastify";
import { GoogleLogin } from "react-google-login";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [formValue, setformValue] = useState(initialState);
  const { email, password } = formValue;
  const { loading, error } = useSelector((state) => ({ ...state.auth }));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    if (email && password) {
      dispatch(login({ formValue, navigate, toast }));
    }
  };
  const onInputChange = (e) => {
    let { name, value } = e.target;
    setformValue({ ...formValue, [name]: value });
  };
  const googleSuccess = (resp) => {

     const email = resp?.profileObj?.email;
     const name = resp?.profileObj?.name;
     const token = resp?.tokenId;
     const googleId= resp?.googleId;
     const result ={email,name, token, googleId};
     dispatch(googleSignIn({result, navigate, toast}))

  };
  const googleFailure = (err) => {
    toast.error(err);
  };
  return (
    <>
      <Container>
        <Card border="success" className="p-3 mt-5">
          <Card.Header>Sign In</Card.Header>
          <Card.Body>
            <form onSubmit={handleSubmit}>
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

              <button type="submit">
                {loading && (
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                )}
                Login
              </button>
            </form>
            <GoogleLogin
              clientId="191541989381-nvo416ocvt7j0qnhlnbcmo2setahj3af.apps.googleusercontent.com"
              render={(renderProps) => (
                <button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  {" "}
                  login google
                </button>
              )}
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy="single_host_origin"
            />
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Login;
