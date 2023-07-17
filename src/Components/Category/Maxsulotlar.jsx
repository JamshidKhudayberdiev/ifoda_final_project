import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {useFetch} from "../../hooks/useFetch";
import Maxsulotlar_list from "./Maxsulotlar_list";

function Maxsulotlar() {
  const { empid } = useParams();
  const {data, isPending, error} = useFetch("http://94.141.76.204:8080/api/product/all-by-category?id=" + empid)
  const {data: category} = useFetch('http://94.141.76.204:8080/api/category/' + empid)

  return <div className='branch_container'>
    <div className='btn_container'>
    <Link to='/Admin' className='branch_btn'>Asosiy menu</Link>
    <Link to={`/Admin/MaxsulotlarCreate/${empid}`} className='branch_btn'>Maxsulot qo'shish</Link>
    </div>
    <div className='branch_list'>
    {isPending && <div className='loading'>Loading....</div>}
    {error && <div className='loading'>{error}</div>}
    {data && category && <Maxsulotlar_list data={data} color={category.color}/>}
    </div>
    
    </div>
}

export default Maxsulotlar;
