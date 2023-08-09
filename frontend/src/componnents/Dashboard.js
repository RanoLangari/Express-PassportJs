import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Dashboard() {
  const Navigate = useNavigate();
  const [data, setData] = useState("");
  const getData = async () => {
    const res = await axios.get("http://localhost:8000/profile", {
      withCredentials: true,
    });
    if (res.data.user) {
      setData(res.data.user.user);
    } else {
      Navigate("/");
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);


  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <section className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <h5 className="card-header">Dashboard</h5>
              <div className="card-body">
                <h5 className="card-title">
                  Welcome {data.username}, your email {data.email}
                </h5>
                {/* <h5 className="card-title">
                  Your link to github Account: <a href={data.profileUrl}>click me</a>
                </h5> */}
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="http://localhost:8000/auth/logout" className="btn btn-primary">
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
