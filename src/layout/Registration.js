import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import RegistrationForm from "../components/RegistrationForm";
import Footer from "../components/Footer";
import "../assets/css/registration.scss";

const Registration = () => {
  return (
    <>
      <Header />
      <RegistrationForm />
      <Link className="gb_link" to={"/"}>
        Go Back
      </Link>
      <Footer />
    </>
  );
};

export default Registration;
