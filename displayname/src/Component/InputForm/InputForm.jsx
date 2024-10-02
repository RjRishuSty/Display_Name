import React, { useState } from "react";
import Styles from "./InputForm.module.css";
const InputForm = () => {
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [fullname, setfullname] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    setfullname(`${firstname} ${lastname}`);
  };

  return (
    <div className="App">
      <div className={Styles.card}>
        <h2 className={Styles.heading}>Full Name Display</h2>
        <form onSubmit={submitHandler}>
          <div>
            <label className={Styles.inputLabel}>First Name:</label>
            <input
              className={Styles.input}
              type="text"
              placeholder="Enter your fistname"
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
            <br />
            <label className={Styles.inputLabel}>Last Name:</label>
            <input
              className={Styles.input}
              type="text"
              placeholder="Enter your lastname"
              onChange={(e) => setLastname(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        {fullname ? (
          <div className={Styles.display}>
            <h1>Full Name: {`${fullname}`}</h1>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default InputForm;
