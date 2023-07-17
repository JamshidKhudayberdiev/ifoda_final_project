import React from 'react'
import { Link } from 'react-router-dom'

// imported icons ==============================>
import {TiPencil} from 'react-icons/ti'
function Branch_list({data}) {
 
  return (
     
    <div className='branch'>
        {data.map((data)=>{
            const {id, name, address, phone,lat, lng} = data
            
          return (
    <div className="card" key={id}>
      <div className="header">
        <h2>Filial haqida malumot</h2>
        <Link  to={"/Admin/branch_edit/" + id}>
         <TiPencil className="branch_icon"/>
        </Link>
      </div>
      <div className="content" >
        <div className="field">
          <strong>ID:</strong> {id}
        </div>
        <div className="field">
          <strong>Name:</strong> {name}
        </div>
        <div className="field">
          <strong>Phone:</strong> {phone}
        </div>
        <div className="field">
          <strong>Address:</strong> {address}
        </div>
        <div className="field">
          <strong>lat:</strong> {lat}
        </div>
        <div className="field_last">
          <strong>lng:</strong> {lng}
        </div>
        <Link to={"/Admin/branch_info/" + id} className="branch_list_btn">To'liq malumot</Link>
      </div>
      
    </div>





            )
        })}
    </div>
  )
}

export default Branch_list