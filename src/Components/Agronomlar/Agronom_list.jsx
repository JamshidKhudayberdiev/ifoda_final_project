import React from 'react'
import { TiPencil } from 'react-icons/ti'
import { Link } from 'react-router-dom'

function Agronom_list({data}) {
  return (
    <div className='branch'>
        {data.map((data)=>{
            const {active, id, name, phone,regionId} = data
            
          return (
    <div className="card" key={id}>
      <div className="header">
        <h2>Agronom haqida malumot</h2>
        <Link  to={"/Admin/Agronom_edit/" + id}>
         <TiPencil   className="branch_icon"/>
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

      </div>
      
    </div>





            )
        })}
    </div>
  )
}

export default Agronom_list