import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteData, postData } from '../../hooks/useFetch';

function Agronom_edit() {
  const {empid} = useParams();
  const navigate = useNavigate();



  const Removefunction = (empid) => {
    if (window.confirm("Do you want to remove?")) {
      const res = deleteData(
        `http://94.141.76.204:8080/api/agronomist/delete/${empid}`,
        () => {
          navigate("/Admin/Agronomlar");
        }
      );
      console.log(res);
    }
  };


  const [product, setProduct]= useState(null)
  useEffect(()=>{
    fetch('http://94.141.76.204:8080/api/agronomist/' + empid).then((res)=>{
      return res.json();
    }).then((resp)=>{
      console.log(resp)
      const {regionId, id,  active, name, phone} = resp
      setProduct({
        regionId, id,  active, name, phone
      })
  
    }).catch((err) => {
          console.log(err.message);
        });
  },[])
  const handlesubmit = (e) => {
    e.preventDefault();
    const empdata = {
      active: product.active,
      id: product.id,
      regionId: product.regionId,
      name: product.name,
      phone: product.phone,
    };

    postData("http://94.141.76.204:8080/api/agronomist/save", empdata, () => {
      alert("Revomed successfully");
      navigate("/Admin/Agronomlar");
    });
  };


  if(product) { return (
    <div className='wrapper'>
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
                value={product.name}
                onChange={(e) => {
                  setProduct((prev) => {
                    return { ...prev, name: e.target.value };
                  });
                }}
                type="text"
                id="name"
              />
            </div>
            <div className="input_field">
              <input
                value={product.phone}
                onChange={(e) => {
                  setProduct((prev) => {
                    return { ...prev, phone: e.target.value };
                  });
                }}
                type="text"
                id="name"
              />
            </div>
            <div className="input_field">
              <label>
                <p>Mahsulotni aktivlash</p>
              </label>
              <input
                
                value={product.active}
                onChange={(e) => {
                  setProduct((prev) => {
                    return { ...prev, active: e.target.value };
                  });
                }}
                type="checkbox"
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
    
  )} else {
    return <div>Loading...</div>;
  }
 
}

export default Agronom_edit