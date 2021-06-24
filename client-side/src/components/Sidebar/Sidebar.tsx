import React from 'react';
import { Link } from 'react-router-dom';
import HomeSvg from '../assets/sidebar/HomeSvg';
import SettingsSvg from '../assets/sidebar/SettingsSvg';
import appIcon from '../assets/sidebar/AppIcon.svg';
import FavouriteSvg from '../assets/sidebar/FavouriteSvg';
import ChatSvg from '../assets/sidebar/ChatSvg';
import { useState } from 'react';

const Sidebar: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState('home');

  const isSelected = (itemName: string) => itemName === selectedItem;

  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">
        <Link
          to='/'
          className="sidebar__link sidebar__link-header">
          <img src={appIcon} alt="appIcon" className='sidebar__icon sidebar__icon-header' />
          <div className="sidebar__to sidebar__to-header">P r o f i t</div>
        </Link>
        <Link
          to='/'
          onClick={() => setSelectedItem('home')}
          className={`sidebar__link ${isSelected('home') && 'sidebar__link-selected'}`}>
          <div><HomeSvg className='sidebar__icon' /></div>
          <div className="sidebar__to">Главная</div>
        </Link>
        <Link
          to='/'
          onClick={() => setSelectedItem('chat')}
          className={`sidebar__link ${isSelected('chat') && 'sidebar__link-selected'}`}>
          <div><ChatSvg className='sidebar__icon' /></div>
          <div className="sidebar__to">Чат</div>
        </Link>
        <Link
          to='/'
          onClick={() => setSelectedItem('fav')}
          className={`sidebar__link ${isSelected('fav') && 'sidebar__link-selected'}`}>
          <div><FavouriteSvg className='sidebar__icon' /></div>
          <div className="sidebar__to">Избранное</div>
        </Link>
        <Link
          to='/'
          onClick={() => setSelectedItem('set')}
          className={`sidebar__link ${isSelected('set') && 'sidebar__link-selected'}`}>
          <div><SettingsSvg className='sidebar__icon' /></div>
          <div className="sidebar__to">Настройки</div>
        </Link>
      </nav>
    </aside>
  );
};

export default  Sidebar;