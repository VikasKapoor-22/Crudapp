import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [tabledark, setTableDark] = useState("");

  const getData = () => {
    axios
      .get("https://63a2ecac9704d18da0807296.mockapi.io/crud-app")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  };
  const handleDelete = (id) => {
    axios
      .delete(`https://63a2ecac9704d18da0807296.mockapi.io/crud-app/${id}`)
      .then(() => {
        getData();
      });
  };
  const handleCreate = () => {
    navigate("/");
  };
  const setToLocalStorage = (id, email, name) => {
    localStorage.setItem("id", id);
    localStorage.setItem("email", email);
    localStorage.setItem("name", name);
    navigate("/update");
  };
  useEffect(() => {
    getData();
  }, [data]);

  return (
    <>
      <div className="form-check form-switch my-3">
        <input
          className="form-check-input"
          type="checkbox"
          onClick={() => {
            if (tabledark === "table-dark") setTableDark("");
            else setTableDark("table-dark");
          }}
        />
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Read Operation</h1>
        <button className="btn bg-primary text-white" onClick={handleCreate}>
          Create
        </button>
      </div>
      <table className={`table ${tabledark}`}>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">email</th>
            <th scope="col">Name</th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.email}</td>
                  <td>{eachData.name}</td>
                  <td>
                    {/* <link to="/Update"> */}
                    <button
                      className="bg-success text-white"
                      onClick={() =>
                        setToLocalStorage(
                          eachData.id,
                          eachData.email,
                          eachData.name
                        )
                      }
                    >
                      Edit
                    </button>
                    {/* </link> */}
                  </td>
                  <td>
                    <button
                      className="bg-danger text-white"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Read;
