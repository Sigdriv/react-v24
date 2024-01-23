import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function RemoveEmployee() {
  const [id, setID] = useState("");
  const navigate = useNavigate();

  const handleRemove = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/api/remove/employee/${id} `
      );
      if (response.status === 200) navigate("/");
    } catch (error) {
      console.log("Failed to delete employee\n", error);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen mx-40 pb-5 text-center ">
      <div className="flex flex-col items-center justify-center bg-slate-300 pt-5">
        <form onSubmit={handleRemove}>
          <input
            type="text"
            placeholder="Ansatt ID"
            value={id}
            onChange={(e) => setID(e.target.value)}
            className=" mx-10 my-5 p-2 border border-solid border-black rounded-md outline-none"
          />{" "}
          <br />
          <button
            type="submit"
            className="mx-10 my-5 p-2 border border-solid border-black rounded-md outline-none"
          >
            Slett ansatt
          </button>
        </form>
        <button className=" mx-10 my-5 p-2 border border-solid border-black rounded-md outline-none">
          <a href="/">Avbryt</a>
        </button>
      </div>
    </div>
  );
}
