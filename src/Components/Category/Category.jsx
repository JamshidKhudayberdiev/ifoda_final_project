import React from 'react'
import './category.css'
import {useFetch} from '../../hooks/useFetch'
import { Link } from 'react-router-dom'
import Category_list from './Category_list'


function Category() {

    const {data, isPending, error} = useFetch('http://94.141.76.204:8080/api/category/all')

  return (
    <div className='branch_container'>
    <div className='btn_container'>
    <Link to='/Admin' className='branch_btn'>Asosiy menu</Link>
    <h1 className='header_title'>Kategoriyalar</h1>
    <Link to='/Admin/CategoryCreate' className='branch_btn'>Kategoriya qo'shish</Link>
    </div>
    <div className='branch_list'>
    {isPending && <div className='loading'>Loading....</div>}
    {error && <div className='loading'>{error}</div>}
    {data && <Category_list data={data} />}
    </div>
    
    </div>
  )
}

export default Category