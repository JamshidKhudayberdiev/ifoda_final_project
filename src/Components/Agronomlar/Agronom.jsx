import React from 'react'
import { Link } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import Agronom_list from './Agronom_list'

function Agronom() {
  const {data, isPending, error} = useFetch('http://94.141.76.204:8080/api/agronomist/all' )
  return (
    <div className="branch_container">
        <div className="btn_container">
          <Link to="/Admin" className="branch_btn">
            Asosiy menu 
          </Link>
          <h1 className='header_title'>Agronomlar</h1>
          <Link to="/Admin/Agronomlar_Create" className="branch_btn">
            Agronom Qo'shish
          </Link>
        </div>
        <div className="branch_list">
          {isPending && <div className='loading'>Loading....</div>}
      {error && <div className='loading'>{error}</div>}
          {data && <Agronom_list data={data} />}
        </div>
      </div>
  )
}

export default Agronom