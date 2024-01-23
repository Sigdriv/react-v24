import Ansattkort from "./Ansattkort";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ShowEmployees() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/api/get/employees").then((res) => {
      setEmployees(res.data);
    });
  }, []);

  const filteredEmployees = employees.filter((employee) =>
    `${employee.fornavn} ${employee.etternavn}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <h1 className=" text-center text-4xl p-5">Ansatte på Tiller VGS</h1>
      <div className=" bg-slate-300 mx-40 pb-5">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mx-10 my-5 p-2 border border-solid border-black rounded-md outline-none"
          placeholder="Søk etter ansatt"
          autoFocus
        />
        <div className="grid grid-cols-3 bg-slate-300">
          {filteredEmployees.length > 0 ? (
            filteredEmployees.map((ansatte) => (
              <Ansattkort
                fornavn={ansatte.fornavn}
                etternavn={ansatte.etternavn}
                tlf={ansatte.telefonnummer}
                epost={ansatte.epost}
              />
            ))
          ) : (
            <p className=" text-2xl p-5 mx-5">
              Ingen ansatte funnet for "{search}"
            </p>
          )}
        </div>
        <a
          href="/legg-til-ansatt"
          className=" ml-10 mx-5 my-5 p-2 border border-solid border-black rounded-md outline-none"
        >
          Legg til ansatte
        </a>
        <a
          href="/slett-ansatt"
          className="  mx-5 my-5 p-2 border border-solid border-black rounded-md outline-none"
        >
          Slett ansatt
        </a>
      </div>
    </>
  );
}
