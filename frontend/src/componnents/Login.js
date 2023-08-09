import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

import "../App.css";

export default function Login() {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/auth/login",
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.user) {
          Toast.fire({
            icon: "success",
            title: "Signed in successfully",
          });

          navigate("/dashboard");
        } else {
          Toast.fire({
            icon: "success",
            title: `${res.data.message}`,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container id="main-container" className="d-grid h-100">
      <Form id="sign-in-form" className="text-center p-3 w-100" onSubmit={handleLogin}>
        {/* img login */}
        <img className="mb-4" src="https://th.bing.com/th/id/OIP.kM4ux4jP37Xu9dcXoeePSwHaHa?pid=ImgDet&rs=1" alt="" width="72" height="72" />
        <h1 className="mb-3 fs-3 fw-normal">Please sign in</h1>
        <Form.Group controlId="sign-in-email-address" style={{ marginBottom: "1rem" }}>
          <Form.Control type="email" size="lg" placeholder="Email address" autoComplete="username" className="position-relative" onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="sign-in-password">
          <Form.Control type="password" size="lg" placeholder="Password" autoComplete="current-password" className="position-relative" onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <div className="d-grid" style={{ marginBottom: "1rem" }}>
          <Button variant="primary" size="lg" type="submit">
            Sign in
          </Button>
        </div>
        {/* div buton login with google */}
        <div className="d-grid" style={{ marginBottom: "1rem" }}>
          <a href="http://localhost:8000/auth/google" className="btn btn-danger btn-lg">
            Sign in with Google
          </a>
        </div>
        {/* div buton login with github */}
        {/* <div className="d-grid" style={{ marginBottom: "1rem" }}>
          <a href="http://localhost:8000/auth/github" className="btn btn-dark btn-lg">
            Sign in with Github
          </a>
        </div> */}

        <div className="d-grid">
          <a href="/register" className="text-decoration-none">
            Don't have an account? Register
          </a>
        </div>
      </Form>
    </Container>
  );
}
