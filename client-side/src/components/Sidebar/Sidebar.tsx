import React from 'react';
import { Link } from 'react-router-dom';
import HomeSvg from '../assets/sidebar/HomeSvg';
import SettingsSvg from '../assets/sidebar/SettingsSvg';
import appIcon from '../assets/sidebar/AppIcon.svg';
import FavouriteSvg from '../assets/sidebar/FavouriteSvg';
import ChatSvg from '../assets/sidebar/ChatSvg';
import { useStore } from '../../app/store/store';
import { observer } from 'mobx-react-lite';

const Sidebar: React.FC = () => {
  const { commonStore: {
    darkTheme,
    setShowSettings,
    selectedMenuItem,
    setSelectedMenuItem,
    setLastMenuItem
  } } = useStore();

  const isSelected = (itemName: string) => itemName === selectedMenuItem;

  const iconsTheme = () => darkTheme ? '#000' : '#fff';

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
          onClick={() => setSelectedMenuItem('home')}
          className={`sidebar__link ${isSelected('home') && 'sidebar__link-selected'}`}>
          <div><HomeSvg color={iconsTheme()} className='sidebar__icon' /></div>
          <div className="sidebar__to">Главная</div>
        </Link>
        <Link
          to='/'
          onClick={() => setSelectedMenuItem('chat')}
          className={`sidebar__link ${isSelected('chat') && 'sidebar__link-selected'}`}>
          <div><ChatSvg color={iconsTheme()} className='sidebar__icon' /></div>
          <div className="sidebar__to">Чат</div>
        </Link>
        <Link
          to='/'
          onClick={() => setSelectedMenuItem('fav')}
          className={`sidebar__link ${isSelected('fav') && 'sidebar__link-selected'}`}>
          <div><FavouriteSvg color={iconsTheme()} className='sidebar__icon' /></div>
          <div className="sidebar__to">Избранное</div>
        </Link>
        <div
          onClick={() => {
            setLastMenuItem(selectedMenuItem);
            setSelectedMenuItem('set');
            setShowSettings(true);
          }}
          className={`sidebar__link ${isSelected('set') && 'sidebar__link-selected'}`}>
          <div><SettingsSvg color={iconsTheme()} className='sidebar__icon' /></div>
          <div className="sidebar__to">Настройки</div>
        </div>
      </nav>
    </aside>
  );
};

export default  observer(Sidebar);