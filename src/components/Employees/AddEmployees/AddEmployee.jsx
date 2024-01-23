import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddEmployees() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/api/add/employee",
        {
          firstname,
          lastname,
          phoneNumber,
          email,
        }
      );

      navigate("/");
    } catch (error) {
      alert("Failed to add employee");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen mx-40 pb-5 text-center ">
      <div className="flex flex-col items-center justify-center bg-slate-300 pt-5">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Fornavn"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            className=" mx-10 my-5 p-2 border border-solid border-black rounded-md outline-none"
          />
          <input
            type="text"
            placeholder="Etternavn"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className=" mx-10 my-5 p-2 border border-solid border-black rounded-md outline-none"
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Telefonnummer"
            value={phoneNumber}
            onChange={(e) => {
              const formattedPhoneNumber = e.target.value
                .replace(/\D/g, "")
                .replace(/(\d{3})(\d{2})(\d{3})/, "$1 $2 $3");
              setPhoneNumber(formattedPhoneNumber);
            }}
            className=" mx-10 my-5 p-2 border border-solid border-black rounded-md outline-none"
          />
          <input
            type="text"
            placeholder="Epost"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" mx-10 my-5 p-2 border border-solid border-black rounded-md outline-none"
          />{" "}
          <br />
          <button
            type="submit"
            className=" mx-20 my-5 p-2 border border-solid border-black rounded-md outline-none"
          >
            Legg til ansatt
          </button>
          <button className=" mx-20 my-5 p-2 border border-solid border-black rounded-md outline-none">
            <a href="/">Avbryt</a>
          </button>
        </form>
      </div>
    </div>
  );
}
