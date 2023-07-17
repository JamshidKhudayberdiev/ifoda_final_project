import React from "react";
import "./siderbar.css";
import {Link, NavLink} from 'react-router-dom'
  

// imported images ========================>
import logo from "../../assets/images/logo.svg";


// imported icons ==============================>
import {IoMdSpeedometer} from 'react-icons/io'
import {MdDeliveryDining} from 'react-icons/md'
import {MdOutlineExplore} from 'react-icons/md'
import {BsQuestionCircle, BsTrophy} from 'react-icons/bs'
import {AiOutlinePieChart} from 'react-icons/ai'
import {BiTrendingUp} from 'react-icons/bi'
import {MdOutlinePermContactCalendar} from 'react-icons/md'
import {BsCreditCard2Front} from 'react-icons/bs'
import {BsFillQuestionCircleFill} from 'react-icons/bs'
function Sidebar() {
  return (
    <div className="sideBar grid">
      <div className="logoDiv flex">
        <img src={logo} alt="Ifoda" />
        <h2>Ifometrik</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">Dashboard</h3>
        <ul className="menuLists grid">

          <li className="listItem">
            <NavLink to="/Admin/Regions" href="#" className="menuLink flex">
              <IoMdSpeedometer className="icon"/>
              <span className="smallText">Regions</span>
            </NavLink>
          </li>

          <li className="listItem">
            <NavLink to="/Admin/Category" className="menuLink flex">
              <MdDeliveryDining className="icon"/>
              <span className="smallText">Category</span>
            </NavLink>
          </li>

          <li className="listItem">
            <NavLink to="/Admin/Agronomlar" className="menuLink flex">
              <MdOutlineExplore className="icon"/>
              <span className="smallText">Agronomlar</span>
            </NavLink>
          </li>


        </ul>
      </div>


      <div className="settingDiv">
        <h3 className="divTitle">SETTINGS</h3>
        <ul className="menuLists grid">

          <li className="listItem">
            <Link to='/login' className="menuLink flex">
              <AiOutlinePieChart className="icon"/>
              <span className="smallText">Login</span>
            </Link>
          </li>

       

          <li className="listItem">
            <Link to='/Admin/CentralOffice' className="menuLink flex">
              <MdOutlinePermContactCalendar className="icon"/>
              <span className="smallText">Markaziy ofis</span>
            </Link>
          </li>

      


        </ul>
      </div>

      <div className="sideBarCard">
        <BsFillQuestionCircleFill  className="icon" />
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>

          <h3>Help Center</h3>
          <p>Having trouble in Ifoda, pleace contact us from for more questions.</p>
          <button className="btn">Go to help center</button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
