import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { postData} from "../../hooks/useFetch";

function Branch_create() {
  const {empid} = useParams();
  const [name, namechange] = useState("");
  const [phone, phonechange] = useState("");
  const [address, addresschange] = useState("");
  const [lat, latchange] = useState("");
  const [lng, lngchange] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const empdata = {regionId:Number(empid), name, address, phone, lat, lng };

   console.log(empdata)
    postData("http://94.141.76.204:8080/api/branch/save", empdata,()=>{alert(`Posted successful!`)}, navigate('/Admin/branch/' + empdata.regionId))
  };

  return (
    <div>
      <div className="wrapper">
        <h2>Yangi filial qo'shish</h2>
        <div></div>
        <form onSubmit={handleSubmit}>
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
              placeholder="Lat"
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
              placeholder="Lng"
              id="address"
            />
          </div>

          <div>
            <button className="create_btn" type="submit">
              Jonatish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Branch_create;
