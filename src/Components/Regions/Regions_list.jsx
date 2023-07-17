import React from 'react'
import { TiPencil } from 'react-icons/ti'
import { Link } from 'react-router-dom'

function Regions_list({data}) {
 
    return (
       
      <div className='branch'>
          {data.map((data)=>{
              const {id, name} = data
              
            return (
      <div className="card" key={id}>
        <div className="header">
          <h2>Region haqida malumot</h2>
          <Link to={"/Admin/Regions_edit/" + id}>
           <TiPencil className="branch_icon"/>
          </Link>
        </div>
        <div className="content" >
          <div className="field">
            <strong>ID:</strong> {id}
          </div>
          <div className="field field_last">
            <strong>Name:</strong> {name}
          </div>
          
          <Link to={"/Admin/branch/" + id } className="branch_list_btn">Filiallarga kirish</Link>
        </div>
        
      </div>
  
  
  
  
  
              )
          })}
      </div>
    )
  }

export default Regions_list