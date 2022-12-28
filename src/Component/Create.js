import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [email, setEmail] = useState(" ");
  const [name, setName] = useState("");
  const header = { "Access-Control-Allow-Origion": "*" };
  const history = useNavigate("");

  const login = (e) => {
    e.preventDefault();
    console.log("clicked");
    axios.post("https://63a2ecac9704d18da0807296.mockapi.io/crud-app", {
      name: name,
      email: email,
      header,
    });
    // .then(() => {
    history("/read");
    // });
  };
  const handleData = () => {
    history("/read");
  };
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="my-5">Create:-</h1>
        <button className="bg-primary text-white" onClick={handleData}>
          Show Data
        </button>
      </div>
      <form>
        <label for="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control mb-3"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label for="exampleInputPassword1" className="form-label">
          password
        </label>
        <input
          type="password"
          className="form-control mb-4"
          id="exampleInputPassword1"
          placeholder="Enter Password"
          onChange={(e) => setName(e.target.value)}
        />
        <button
          type="Submit"
          className="btn bg-primary text-white"
          onClick={login}
        >
          Login
        </button>
      </form>
    </>
  );
};

export default Create;
