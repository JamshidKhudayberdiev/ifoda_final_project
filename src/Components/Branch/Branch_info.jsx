import React from "react";
import {  useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

function Branch_info() {
  const { empid } = useParams();
  const { data, isPending, error } = useFetch(
    "http://94.141.76.204:8080/api/branch/" + empid
  );

  return (
    <>
      {isPending && <div className="loading">Loading....</div>}
      {error && <div className="loading">{error}</div>}
      {data && (
        <div className="info_page">
          <h2 className="info__name">Filialning ismi: {data.name}</h2>
          <p className="info__phone">Phone: {data.phone}</p>
          <p className="info__address">Address: {data.address}</p>
          <p className="info__location">
            Location: {data.lat}, {data.lng}
          </p>
        </div>
      )}
    </>
  );
}

export default Branch_info;
