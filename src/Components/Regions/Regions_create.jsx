import React, { useState } from 'react'
import { postData } from '../../hooks/useFetch'
import { useNavigate, useParams } from 'react-router-dom'

function Regions_create() {
  const {empid} = useParams();
  const [name, namechange] = useState('');
  const [active, activechange] = useState(false)
  const navigate = useNavigate();

  const  handleSubmit= (e ) => {
    e.preventDefault()
    const empdata = {name, active}
    console.log(empdata)
    postData('http://94.141.76.204:8080/api/region/save', empdata , ()=>{alert('posted successful!'); navigate('/Admin/Regions')})
  }
  
  return (
    <div>
      <div className="wrapper">
        <h2>Yangi region qo'shish</h2>
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
              Jonatish
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Regions_create