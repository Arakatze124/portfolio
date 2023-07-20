import React from 'react';
import "..//styles/sideBar.css"

export default function Sidebar({ links }) {
  return (
    <div className="sidebar">
      <ul>
        {links.map((link, index) => (
          <li key={index} className={link.subpoint ? 'subpoint' : ''}>
            <a href={link.path}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
