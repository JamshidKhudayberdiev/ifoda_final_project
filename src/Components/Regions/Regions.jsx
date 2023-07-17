import React from 'react'
import {Link} from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch';
import Regions_list from './Regions_list';
function Regions() {
    const {data, isPending, error} = useFetch('http://94.141.76.204:8080/api/region/all')
  
    return (
      <div className="branch_container">
        <div className="btn_container">
          <Link to="/Admin" className="branch_btn">
            Asosiy menu 
          </Link>
          <h1 className='header_title'>Regionlar</h1>
          <Link to="/Admin/Regions_create" className="branch_btn">
            Region Qo'shish
          </Link>
        </div>
        <div className="branch_list">
          {isPending && <div className='loading'>Loading....</div>}
      {error && <div className='loading'>{error}</div>}
          {data && <Regions_list data={data} />}
        </div>
      </div>
    );
  
}

export default Regions