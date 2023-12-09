import React from 'react'
import './SidebarStyle.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const menuItems = [
    {
      path: '/',
      name: 'Home Page',
    },

    {
      path: '/tasklist',
      name: 'Task Page',
    },

    {
      path: '/taskview',
      name: 'View Task Page',
    },

    {
      path: '/taskadd',
      name: 'Add Task Page',
    },

    {
      path: '/taskedit',
      name: 'Edit Task Page',
    },

    {
      path: '/taskhistory',
      name: 'History Task Page',
    },
  ]

  return (
    <div className="sidebar_container">
      <div className="top_section"></div>
      <div className="mid_section">
        {menuItems.map((items, index) => (
          <Link to={items.path} key={index} className="link">
            <div className="link_text">{items.name}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
