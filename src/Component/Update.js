import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState(0);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setEmail(localStorage.getItem("email"));
    setName(localStorage.getItem("name"));
  }, []);
  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("id....", id);
    axios.put(`https://63a2ecac9704d18da0807296.mockapi.io/crud-app/${id}`, {
      email: email,
      name: name,
    });
    // .then(() => {
    navigate("/read");
    // });
  };

  return (
    <>
      <h1 className="my-5">Update:-</h1>
      <form>
        <label for="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control mb-3"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <label for="exampleInputPassword1" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control mb-4"
          id="exampleInputPassword1"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button
          type="Submit"
          className="btn bg-primary text-white"
          onClick={handleUpdate}
        >
          Update
        </button>
      </form>
    </>
  );
};

export default Update;
