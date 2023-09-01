import React from "react";

const RegistrationForm = () => {
  return (
    <>
      <div className="registration_form">
        <h2>CREATE ACCOUNT</h2>
        <form className="registration_cells">
          <div>
            <input
              className="cell"
              type="text"
              id="nombre"
              placeholder="*Name"
            />
          </div>
          <div>
            <input
              className="cell"
              type="email"
              id="email"
              placeholder="*Email adress"
            />
          </div>
          <div>
            <input
              className="cell"
              type="phone"
              id="phone"
              placeholder="*Phone number"
            />
          </div>
          <button className="register_btn" type="submit">
            Sign Up
          </button>
        </form>
      </div>
      <div></div>
    </>
  );
};

export default RegistrationForm;
