import React from 'react'
import { useParams } from 'react-router-dom'
import {useFetch} from '../../hooks/useFetch'
function Maxsulotlar_info() {

    const {empid} = useParams()
    const {data,isPending, error} = useFetch('http://94.141.76.204:8080/api/product/'+ empid);

  return (
    <>
        {isPending && <div className='loading'>Loading......</div>}
        {error &&<div className='loading'>{error}</div> }
        {data && <div className="info_page">
        <div className="field">
        <div className="field field_last">
                <strong>image:</strong> <img  className="category_img" src= {data.image}></img>
              </div>
                <strong>Name:</strong> {data.name}
              </div>
              <div className="field">
                <strong >shortDescription:</strong>{data.shortDescription}
              </div>
              <div className="field ">
                <strong>Composition:</strong> {data.composition}
              </div>
              <div className="field ">
                <strong>description:</strong> {data.description}
              </div>
              <div className="field ">
                <strong>type:</strong> {data.type}
              </div>
              <div className="field ">
                <strong>recommendedFlow:</strong> {data.recommendedFlow}
              </div>
              <div className="field ">
                <strong>usagePeriod:</strong> {data.usagePeriod}
              </div>
              <div className="field ">
                <strong>Narxi:</strong> {data.price}
              </div>
             
        </div>}
    </>

    
  )
}

export default Maxsulotlar_info