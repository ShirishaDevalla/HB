import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { NavLink, Outlet } from 'react-router-dom'
import { IoHome } from "react-icons/io5";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { FaHospital } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";

const NewDashborad = () => {
  return (
    <div className='d-flex'>
      <div className='col-md-2 '>
      <Sidebar className='sidebar' >
     
     <Menu>
     <MenuItem className="sidebar-title">
           <h3 style={{ margin:0, padding: '15px', textAlign: 'center', color: 'black' }}>My Dashboard</h3>
         </MenuItem>
      
       <MenuItem>
         <NavLink to="/hospital/dashboard" className="menu-link"><IoHome style={{ fontSize: '17px', color: 'black', marginRight: '8px' }}/>Dashboard</NavLink>
       </MenuItem>
       <SubMenu  icon={<RiDashboardHorizontalFill  style={{ fontSize: '17px', color: 'black', marginRight: '8px' }}/>} label="Master" className="submenu">
         <MenuItem>
           <NavLink to="/hospital/users" className="menu-link"><FaUser style={{ fontSize: '17px', color: 'black', marginRight: '8px' }}/>Users</NavLink>
         </MenuItem>
         <MenuItem>
           <NavLink to="/hospital/hospital" className="menu-link"><FaHospital style={{ fontSize: '17px', color: 'black', marginRight: '8px' }}/>Hospital</NavLink>
         </MenuItem>
         <MenuItem>
           <NavLink to="/hospital/doctor" className="menu-link"><FaUserDoctor style={{ fontSize: '17px', color: 'black', marginRight: '8px' }}/>Doctor</NavLink>
         </MenuItem>
         <MenuItem>
           <NavLink to="/hospital/speciality" className="menu-link"><FaHandHoldingMedical style={{ fontSize: '17px', color: 'black', marginRight: '8px' }}/>Speciality</NavLink>
         </MenuItem>
       </SubMenu>
       <MenuItem>
         <NavLink to="/" className="menu-link">< CiLogout style={{ fontSize: '17px', color: 'black', marginRight: '8px' }}/>Logout</NavLink>
       </MenuItem>
     </Menu>
   </Sidebar>

        
      </div>
      <div className='col-md-10 px-4'>
        <Outlet></Outlet>
      </div>

    </div>
  
   
  )
}

export default NewDashborad