import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "..//styles/sideBar.css"

export default function Sidebar({ links }) {

  return (
    <div className="sidebar"> 
      <ul>
        {links.map((link, index) => (
          <li key={index} className={link.subpoint ? 'subpoint' : ''}>
            <a className="title4" href={link.path}>{link.name}</a>
          </li>
        ))}
      </ul>
     <div className='icon'>❯</div>
    </div>
  );
};
