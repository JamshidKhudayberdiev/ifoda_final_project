import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postData, useFetch } from "../../hooks/useFetch";

function Agronom_create() {
  const [active, activechange] = useState(false);
  const [regionId,regionIdchange] = useState(Number(""));
  const [name, namechange] = useState("");
  const [phone, phonechange] = useState("");
  const [address, addresschange] = useState("");
  const navigate = useNavigate();

  const { data, isPending, error } = useFetch(
    "http://94.141.76.204:8080/api/region/all"
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    const empdata = { regionId, name, address, phone, active };

    console.log(empdata);
    postData(
      "http://94.141.76.204:8080/api/agronomist/save",
      empdata,
      () => {
        alert(`Posted successful!`);
      },
      navigate("/Admin/Agronomlar")
    );
  };

  return (
    <div>
      <div className="wrapper">
        <h2>Yangi filial qo'shish</h2>
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
              <label>Agronomni regionini tanlang</label>
          <select onChange={(e)=>{
            regionIdchange(e.target.value)
          }}>
            {data &&
              data.map((data) => {
                const { id, name } = data;
                console.log(data)
                return <option key={id} value={id}> {name} </option>;
              })}
          </select>

          <div>
            <div className="input_field">
              <input
                value={active}
                onClick={() => {
                  activechange((prev) => !prev);
                }}
                type="checkbox"
                placeholder="Name"
                id="check"
              />
              <label htmlFor="check" className="active_label">
                Activlashrish
              </label>
            </div>
            <button className="create_btn" type="submit">
              Jonatish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Agronom_create;
