import React from 'react';
import { Link } from 'react-router-dom';
import HomeSvg from '../assets/sidebar/HomeSvg';
import appIcon from '../assets/sidebar/AppIcon.svg';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">
        <Link to='/' className="sidebar__link sidebar__link-header">
          <img src={appIcon} alt="appIcon" className='sidebar__icon sidebar__icon-header' />
          <div className="sidebar__to sidebar__to-header">P r o f i t</div>
        </Link>
        <Link to='/' className="sidebar__link sidebar__link-selected">
          <div><HomeSvg color='#fff' className='sidebar__icon' /></div>
          <div className="sidebar__to">Главная</div>
        </Link>
        <Link to='/' className="sidebar__link">
          <div><HomeSvg color='#fff' className='sidebar__icon' /></div>
          <div className="sidebar__to">Главная</div>
        </Link>
        <Link to='/' className="sidebar__link">
          <div><HomeSvg color='#fff' className='sidebar__icon' /></div>
          <div className="sidebar__to"></div>
        </Link>
        <Link to='/' className="sidebar__link">
          <div><HomeSvg color='#fff' className='sidebar__icon' /></div>
          <div className="sidebar__to"></div>
        </Link>
      </nav>
    </aside>
  );
};

export default  Sidebar;