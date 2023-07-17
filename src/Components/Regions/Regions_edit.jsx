import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { deleteData, postData } from '../../hooks/useFetch';


function Regions_edit() {
  const {empid} = useParams()
  const navigate = useNavigate();


  useEffect(() => {
    fetch("http://94.141.76.204:8080/api/region/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        idchange(resp.id);
        namechange(resp.name)
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);


  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [active, activechange] = useState(false);


  const handlesubmit = (e) => {
    e.preventDefault();
    const empdata = { id, name, active };

    postData("http://94.141.76.204:8080/api/region/save",empdata,() => {alert('Removed successfully'); navigate('/Admin/Regions')} );
  };

  const Removefunction = (empid) => {
    if (window.confirm("Do you want to remove?")) {
      const res = deleteData(`http://94.141.76.204:8080/api/region/delete/${empid}`, () => {alert('Revomed successfully'); navigate('/Admin/Regions')})
      console.log(res);
    }
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
              value={id}
              onChange={(e) => {
                idchange(e.target.value);
              }}
              type="number"
              placeholder="Id"
              id="id"
            ></input>
          </div>
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
              
              value={active}
              onClick={() => {
                activechange((prev)=>!prev);
              }}
              type="checkbox"
              placeholder="Name"
              id="check"
            />
            <label htmlFor='check' className='active_label'>Activlashrish</label>
          </div>        
          <div>
            <button className="create_btn" type="submit">
              Saqlash
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Regions_edit