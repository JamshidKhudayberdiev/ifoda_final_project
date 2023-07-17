import React from 'react'
import './body.css'
import Top from './Top Section/Top'
import Sidebar from '../SideBar Section/SideBar'

function Body() {
  return (
    <div className='main-admin'>
      <div className='admin-container'>
        <Sidebar/>
        <div className='wrapper'>
          <Top/>
        </div>

      </div>
    </div>
  )
}

export default Body