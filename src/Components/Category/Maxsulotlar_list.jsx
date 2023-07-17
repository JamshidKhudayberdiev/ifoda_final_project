import React, { useState } from 'react'
import { TiPencil } from 'react-icons/ti';
import { Link, useParams } from 'react-router-dom';

function Maxsulotlar_list({data, color}) {
  return (
   
    <div className='branch'>
      {data.map((date) => {
        const {id, categoryId, name, composition, shortDescription, description, type, recommendedFlow, usagePeriod, price, image, active } = date;
        return (
    <div className="maxsulotlar_card" key={id} >
            <div className="category_header">
              <h2 className='Maxsulotlar_h2'>{name} </h2>
              <Link to={"/Admin/Maxsulotlar_edit/" + id}>
                <TiPencil className="branch_icon" />
              </Link>
            </div>
            <div className="category_content">
            <div  className="field field_last">
                <strong>image:</strong> <img  className="category_img" src= {image}></img>
              </div>
              <div style={{color: color}} className="field">
                <strong>Name:</strong> {name}
              </div>
           
              <div style={{color: color}} className="field ">
                <strong>Narxi:</strong> {price}
              </div>
             
              


              <Link to={'/Admin/Maxsulotlar_info/' + id} className="branch_list_btn">
                Batafsil
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default Maxsulotlar_list