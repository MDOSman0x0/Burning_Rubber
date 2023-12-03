import "./Header_style.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Link, Outlet } from "react-router-dom";

const client = axios.create({
  baseURL: "http://127.0.0.1:7000",
});

function Header() {
  const [show, setShow] = useState(false);
  const [showSignUp, setSignUP] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const signUPShow = () => setSignUP(true);
  const signUpClose = () => setSignUP(false);

  const [currentUser, setCurrentUser] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    client
      .get("/api/user")
      .then(function (res) {
        return setCurrentUser(true);
      })
      .catch(function (error) {
        return setCurrentUser(false);
      });
  }, []);

  function submitRegistration(e) {
    e.preventDefault();
    client
      .post("/api/register", {
        email: email,
        username: username,
        password: password,
      })
      .then(function (res) {
        client
          .post("/api/login", {
            email: email,
            password: password,
          })
          .then(function (res) {
            return setCurrentUser;
          });
      });
  }

  function submitLogin(e) {
    e.preventDefault();
    client
      .post("/api/login", {
        email: email,
        password: password,
      })
      .then(function (res) {
        return setCurrentUser(true);
      });
  }

  function submitLogout(e) {
    e.preventDefault();
    client.post("/api/logout", { withCredentials: true }).then(function (res) {
      return setCurrentUser(false);
    });
  }

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
                <Link id="tabHome" className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link id="tabDealership" className="nav-link" to="/shop">
                  Dealership
                </Link>
              </li>
              <li className="nav-item">
                <Link id="tabInquiry" className="nav-link" to="/inquiry">
                  Inquiry
                </Link>
              </li>
              <li className="nav-item">
                <Link id="tabReview" className="nav-link" to="/review">
                  Review
                </Link>
              </li>
              <li className="nav-item">
                <Link id="tabAbout" className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
            </ul>
            {currentUser ? (
              <form id="logoutButton" onSubmit={(e) => submitLogout(e)}>
                <Button variant="outline-primary" type="submit">
                  Log Out
                </Button>
              </form>
            ) : (
              <Button variant="outline-danger" onClick={handleShow}>
                Sign In
              </Button>
            )}

            <Modal show={show} onHide={handleClose} centered>
              <Modal.Header closeButton>
                <Modal.Title>Please Sign In</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={(e) => submitLogin(e)}>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                  >
                    <Form.Control
                      required
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control
                      required
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FloatingLabel>
                  <br />
                  <Form.Text>
                    Don't have account? Sign Up <a onClick={signUPShow}>Here</a>
                    !
                  </Form.Text>
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
            <Modal
              show={showSignUp}
              onHide={signUpClose}
              onShow={handleClose}
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title>Sign Up</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={(e) => submitRegistration(e)}>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Username"
                    className="mb-3"
                  >
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                  >
                    <Form.Control
                      required
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control
                      required
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FloatingLabel>
                  <br />
                  <Button variant="outline-danger" type="submit">
                    Sign Up
                  </Button>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="dark" onClick={signUpClose}>
                  Cancel
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Header;
