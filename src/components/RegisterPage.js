import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import SignUpModal from "./modal/SignupModal";

import "./RegisterPage.css";

const API = process.env.REACT_APP_API_URL;

export default function RegisterPage() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [birth_date, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [registrationError, setRegistrationError] = useState("");

  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleRegister = () => {
    if (first_name && last_name && birth_date && email && password) {
      axios
        .post(`${API}/register`, {
          first_name,
          last_name,
          birth_date,
          email,
          password,
        })
        .then((response) => {
          setIsRegistered(true);
          openModal();
          // navigate("/charities");
        })
        .catch((error) => {
          setRegistrationError("Registration failed. Please try again.");
          console.error("Error fetching user:", error);
        });
    }
  };

  return (
    <div className="register-container">
      <div className="register-page">
        <h2>register</h2>
        <input
          type="text"
          placeholder="First Name"
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="date"
          placeholder="Date of Birth"
          value={birth_date}
          onChange={(e) => setDob(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleRegister}>
          <strong>register</strong>
        </button>
        {isRegistered && <p>Registration successful! You can now login.</p>}
        {registrationError && <p>{registrationError}</p>}
        <p>
          Already have an account?{" "}
          <Link to="/login">
            <strong>login</strong>
          </Link>
        </p>

        {/* <SignUpModal isOpen={isModalOpen} onClose={closeModal}/> */}
      </div>
    </div>
  );
}
