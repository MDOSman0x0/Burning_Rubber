import "./Header_style.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <h1 id="title-bar">
        <strong>BURNING RUBBER</strong>
      </h1>

      <nav
        className="navbar navbar-expand-lg bg-body-tertiary sticky-top"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navBar"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navBar">
            <ul className="navbar-nav me-auto mb-2 mg-lb-0">
              <li className="nav-item">
                <a id="tabHome" className="nav-link" href="index.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a id="tabDealership" className="nav-link" href="shop.html">
                  Dealership
                </a>
              </li>
              <li className="nav-item">
                <a id="tabInquiry" className="nav-link" href="inquiry.html">
                  Inquiry
                </a>
              </li>
              <li className="nav-item">
                <a id="tabReview" className="nav-link" href="review.html">
                  Review
                </a>
              </li>
              <li className="nav-item">
                <a id="tabAbout" className="nav-link" href="about.html">
                  About Us
                </a>
              </li>
            </ul>
            <Button variant="outline-danger" onClick={handleShow}>
              Sign In
            </Button>

            <Modal show={show} onHide={handleClose} centered>
              <Modal.Header closeButton>
                <Modal.Title>Please Sign In</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                  >
                    <Form.Control
                      required
                      type="email"
                      placeholder="name@example.com"
                    />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control
                      required
                      type="password"
                      placeholder="Password"
                    />
                  </FloatingLabel>
                  <br />
                  <Button variant="outline-danger" type="submit">
                    Sign In
                  </Button>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="dark" onClick={handleClose}>
                  Cancel
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
