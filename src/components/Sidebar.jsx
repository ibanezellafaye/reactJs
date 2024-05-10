import React, { Component } from 'react'
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Sidebar() {
    const location = useLocation();
    const activeClass = 'rounded-md bg-gray-600 px-9 py-2';

    const NavLinkFunction = () => {
        const sideBarArray = new Map([
          ['Dashboard', '/dashboard'],
          ['Admin', '/admin'],
          ['Students', '/students'],
        ]);
        
  
        return (
                <ul>
                {[...sideBarArray].map(([key, value]) => (
                  <li key={value} className="mb-2">
                    <NavLink
                      exact= "true"
                      to={value}
                      className={`text-blue-300 ${location.pathname === value ? activeClass : ''}`}
                    >
                      {key}
                    </NavLink>
                  </li>
                ))}
              </ul>
          
        );
     }
     
    return (
      <aside className="bg-gray-800 w-36 px- py-8">
        <h2 className="text-lg font-bold mb-10 text-white text-center">Sidebar</h2>
        {NavLinkFunction()}
      </aside>
    );
  }
  
export default Sidebar