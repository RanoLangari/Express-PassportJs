import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "../App.css";

export default function Register() {
  return (
    <Container id="main-container" className="d-grid h-100">
      <Form id="sign-in-form" className="text-center p-3 w-100">
        <img className="mb-4" src="https://th.bing.com/th/id/OIP.kM4ux4jP37Xu9dcXoeePSwHaHa?pid=ImgDet&rs=1" alt="" width="72" height="72" />
        <h1 className="mb-3 fs-3 fw-normal">Please sign up</h1>
        <Form.Group controlId="sign-in-email-address" style={{ marginBottom: "1rem" }}>
          <Form.Control type="email" size="lg" placeholder="Email address" autoComplete="username" className="position-relative" />
        </Form.Group>
        <Form.Group controlId="sign-in-username" style={{ marginBottom: "1rem" }}>
          <Form.Control type="text" size="lg" placeholder="Username" autoComplete="username" className="position-relative" />
        </Form.Group>

        <Form.Group controlId="sign-in-password" style={{ marginBottom: "1rem" }}>
          <Form.Control type="password" size="lg" placeholder="Password" autoComplete="current-password" className="position-relative" />
        </Form.Group>
        <Form.Group controlId="sign-in-password" style={{ marginBottom: "1rem" }}>
          <Form.Control type="password" size="lg" placeholder="Confirm Password" autoComplete="current-password" className="position-relative" />
        </Form.Group>
        <div className="d-grid" style={{ marginBottom: "1rem" }}>
          <Button variant="primary" size="lg">
            Sign up
          </Button>
        </div>
        <div className="d-grid">
          <a href="/" className="text-decoration-none">
            Already have an account? Sign in
          </a>
        </div>
      </Form>
    </Container>
  );
}
