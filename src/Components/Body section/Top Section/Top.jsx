import React from 'react'
import './top.css'
import {Outlet} from 'react-router-dom'

// Import Icons ===============================>
import {BiSearchAlt} from 'react-icons/bi'
import {TbMessageCircle} from 'react-icons/tb'
import {MdNotificationsNone} from 'react-icons/md'

// Imports img =======================================>
import img from '../../../assets/images/admin.png'

function Top() {
  return (
    <div className='Top1'>
      <div className='topSection'>
        <div className='headerSection flex'>
          <div className='adminDiv flex'>
            <TbMessageCircle className='icon'/>
            <MdNotificationsNone className='icon' />
            <div className='adminImage'>
              <img src={img} alt='Admin image'/>
            </div>
          </div>
        </div>
        
      </div>
      <Outlet/>
    </div>
    
  )
}

export default Top