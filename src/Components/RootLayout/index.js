import React from 'react'
import Sidebar from '../SideBar Section/SideBar'
import Top from '../Body section/Top Section/Top'

function RootLayout() {
  return (
    <div className='container'>
        <Sidebar/>
        <Top/>
    </div>
  )
}

export default RootLayout