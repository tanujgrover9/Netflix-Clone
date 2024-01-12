import React, { useState } from "react";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase.config";
import { useNavigate } from "react-router-dom";
import "../pages/login.css";

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    grid-template-rows: 15vh 85vh;
    .form-container {
      gap: 2rem;
      height: 85vh;
      .form {
        padding: 2rem;
        background-color: #000000b0;
        width: 25vw;
        gap: 2rem;
        color: white;
        .container {
          gap: 2rem;
          input {
            padding: 0.5rem 1rem;
            width: 15rem;
          }
          button {
            padding: 0.5rem 1rem;
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: white;
            border-radius: 0.2rem;
            font-weight: bolder;
            font-size: 1.05rem;
          }
        }
      }
    }
  }
`;

const Login = () => {
  const [formvalue, setformvalue] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handlelogin = async () => {
    try {
      const { email, password } = formvalue;
      console.log(email, password);
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header login />
        <div className="body flex column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title">
              <h3>Login</h3>
            </div>
            <div className=" container flex column login">
              <input
                className="mail"
                type="email"
                placeholder="email address"
                name="email"
                value={formvalue.email}
                onChange={(e) =>
                  setformvalue({
                    ...formvalue,
                    [e.target.name]: e.target.value,
                  })
                }
              />

              <input
                className="pass"
                type="password"
                placeholder="password"
                name="password"
                value={formvalue.password}
                onChange={(e) =>
                  setformvalue({
                    ...formvalue,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>
            <button className="btn" onClick={handlelogin}>
              Log In
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
