import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { useLocation } from "react-router-dom";

export default function Ansattkort(ansattinfo) {
  const location = useLocation();

  return (
    <div className="ansattkort m-10 border-2 border-black border-dashed p-5">
      {location.pathname === "/slett-ansatt" ? (
        <>
          <p className=" font-bold">
            {" "}
            <FontAwesomeIcon icon={faUser} /> {ansattinfo.fornavn}{" "}
            {ansattinfo.etternavn}{" "}
          </p>
          <p>Ansatt ID: {ansattinfo.id}</p>
        </>
      ) : (
        <>
          <p className=" font-bold">
            {" "}
            <FontAwesomeIcon icon={faUser} /> {ansattinfo.fornavn}{" "}
            {ansattinfo.etternavn}{" "}
          </p>
          <p>
            {" "}
            <FontAwesomeIcon icon={faPhone} />{" "}
            {ansattinfo.tlf !== "" ? ansattinfo.tlf : "Ingen telefonnummer"}
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />
            {ansattinfo.epost !== "" ? (
              <a href={`mailto:${ansattinfo.epost}?subject=Det funker`}>
                {" "}
                Send e-post
              </a>
            ) : (
              " Ingen epost"
            )}
          </p>
        </>
      )}
    </div>
  );
}
