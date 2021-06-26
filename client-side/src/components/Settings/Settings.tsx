import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef } from 'react';
import { useStore } from '../../app/store/store';
import RadioToggle from '../../features/Radio/RadioToggle';
import UserSettingSvg from '../assets/sidebar/UserSettingSvg';

const Settings: React.FC = () => {
  const { commonStore: {
    setDarkTheme,
    darkTheme,
    setShowSettings,
    setLastMenuItem,
    setSelectedMenuItem,
    lastMenuItem,
    showSettings
   } } = useStore();
  const targetRef = useRef<HTMLDivElement>(null);
  
  const handler = (e: Event) => {
    if (showSettings && targetRef.current && e.target instanceof Node && !targetRef.current.contains(e.target)) {
      setShowSettings(false);

      setSelectedMenuItem(lastMenuItem);
      setLastMenuItem('none');
    }
  }
  
  const iconsTheme = () => darkTheme ? '#000' : '#fff';
  
  useEffect(() => {
    document.addEventListener('mousedown', handler);
    return(() => document.removeEventListener('mousedown', handler))
  });

  return (
    <section className="settings" ref={targetRef}>
      <div className="settings__header">
        <h2 className="settings__title">Настройки пользователя</h2>
        <UserSettingSvg color={iconsTheme()} className="settings__icon" />
      </div>
      <div className="settings__line"></div>
      <div className="settings__item">
        <div className="settings__subtitle">Выберите цветовую схему</div>
        <RadioToggle
          name='changeColorTheme'
          onChange={() => setDarkTheme(!darkTheme)} />
      </div>
    </section>
  );
};

export default  observer(Settings);