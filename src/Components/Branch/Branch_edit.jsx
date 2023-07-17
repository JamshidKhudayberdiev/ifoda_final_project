import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {  deleteData, postData } from "../../hooks/useFetch";
function Branch_edit() {
  const { empid } = useParams();

  const Removefunction = (empid) => {
    if (window.confirm("Do you want to remove?")) {
      const res = deleteData(`http://94.141.76.204:8080/api/branch/delete/${empid}`, () => { navigate('/Admin/Regions/' )})
      console.log(res);
    }
  };

  useEffect(() => {
    fetch("http://94.141.76.204:8080/api/branch/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        regionIdchange(resp.regionId)
        idchange(resp.id);
        namechange(resp.name);
        phonechange(resp.phone);
        addresschange(resp.address);
        latchange(resp.lat);
        lngchange(resp.lng);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const [regionId, regionIdchange] = useState("");
  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [phone, phonechange] = useState("");
  const [address, addresschange] = useState("");
  const [lat, latchange] = useState("");
  const [lng, lngchange] = useState("");
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const empdata = {regionId, id, name, address, phone, lat, lng };

    postData("http://94.141.76.204:8080/api/branch/save",empdata,() => {alert('Revomed successfully'); navigate('/Admin/branch/' + empdata.regionId)} );
  };

  return (
    <div>
      <div className="wrapper">
        <div className="wrapper_header_section">
          <h2>O'zgartirish</h2>
          <button
            onClick={() => {
              Removefunction(empid);
            }}
            className="delete_btn"
          >
            O'chirish
          </button>
        </div>
        <form onSubmit={handlesubmit}>
          <div className="input_field">
            <input
              required
              value={name}
              onChange={(e) => {
                namechange(e.target.value);
              }}
              type="text"
              placeholder="Name"
              id="name"
            />
          </div>
          <div className="input_field">
            <input
              required
              value={phone}
              onChange={(e) => {
                phonechange(e.target.value);
              }}
              type="text"
              placeholder="Phone"
              id="phone"
            />
          </div>
          <div className="input_field">
            <input
              required
              value={address}
              onChange={(e) => {
                addresschange(e.target.value);
              }}
              type="text"
              placeholder="Address"
              id="address"
            />
          </div>
          <div className="input_field">
            <input
              required
              value={lat}
              onChange={(e) => {
                latchange(e.target.value);
              }}
              type="text"
              placeholder="lat"
              id="address"
            />
          </div>
          <div className="input_field">
            <input
              required
              value={lng}
              onChange={(e) => {
                lngchange(e.target.value);
              }}
              type="text"
              placeholder="lng"
              id="address"
            />
          </div>
          <div>
            <button className="create_btn" type="submit">
              Saqlash
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Branch_edit;
