import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ShowEmployees from "../ShowEmployees/ShowEmployees";

export default function RemoveEmployee() {
  const [id, setID] = useState("");
  const navigate = useNavigate();

  const handleRemove = async (event) => {
    event.preventDefault();
    try {
      const checkResponse = await axios.get(
        `http://localhost:3001/api/check/employee/${id}`
      );
      if (checkResponse.data.exists) {
        const deleteResponse = await axios.delete(
          `http://localhost:3001/api/remove/employee/${id}`
        );
        if (deleteResponse.data.success) navigate("/");
      } else alert(`Ansatt med ID "${id}" finnes ikke\nVennligst prøv igjen`);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen mx-40 pb-5 text-center ">
      <div className="flex flex-col items-center justify-center bg-slate-300 pt-5">
        <ShowEmployees className=" flex items-center justify-center" />
        <div>
          <form onSubmit={handleRemove}>
            <input
              type="text"
              placeholder="Ansatt ID"
              value={id}
              onChange={(e) => {
                const formattedID = e.target.value.replace(/\D/g, "");
                setID(formattedID);
              }}
              className=" mx-10 my-5 p-2 border border-solid border-black rounded-md outline-none"
            />
            <br />
            <button
              type="submit"
              className="mx-10 my-5 p-2 border border-solid border-black rounded-md outline-none"
            >
              Slett ansatt
            </button>
            <a
              href="/"
              className=" mx-10 my-5 p-2 border border-solid border-black rounded-md outline-none"
            >
              Avbryt
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}
