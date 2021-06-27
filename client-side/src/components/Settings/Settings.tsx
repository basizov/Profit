import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef } from 'react';
import { useStore } from '../../app/store/store';
import RadioToggle from '../../features/Radio/RadioToggle';
import UserSettingSvg from '../assets/sidebar/UserSettingSvg';

const Settings: React.FC = () => {
  const { commonStore: {
    setDarkTheme,
    darkTheme,
    languageMode,
    setShowSettings,
    setLastMenuItem,
    setSelectedMenuItem,
    setLanguageMode,
    lastMenuItem,
    showSettings
   } } = useStore();
  const targetRef = useRef<HTMLDivElement>(null);
  
  const titleLanguage = ["Настройки пользователя", "User settings"];
  const colotSubtitleLanguage = ["Выберите цветовую схему", "Select a color scheme"];
  const languageSubtitleLanguage = ["Выберите языковой пакет", "Select a language pack"];
  
  const handler = (e: Event) => {
    if (showSettings && targetRef.current && e.target instanceof Node && !targetRef.current.contains(e.target)) {
      setShowSettings(false);

      setSelectedMenuItem(lastMenuItem);
      setLastMenuItem('none');
    }
  }

  const changeLanguage = () => {
    if (languageMode === 0) return (1);
    return (0);
  }
  
  const iconsTheme = () => darkTheme ? '#000' : '#fff';
  
  useEffect(() => {
    document.addEventListener('mousedown', handler);
    return(() => document.removeEventListener('mousedown', handler))
  });

  return (
    <section className="settings" ref={targetRef}>
      <div className="settings__header">
        <h2 className="settings__title">{titleLanguage[languageMode]}</h2>
        <UserSettingSvg color={iconsTheme()} className="settings__icon" />
      </div>
      <div className="settings__line"></div>
      <div className="settings__item">
        <div className="settings__subtitle">{languageSubtitleLanguage[languageMode]}</div>
        <RadioToggle
          name='changeColorTheme'
          onChange={() => setLanguageMode(changeLanguage())}
        />
      </div>
      <div className="settings__item">
        <div className="settings__subtitle">{colotSubtitleLanguage[languageMode]}</div>
        <RadioToggle
          name='changeColorTheme'
          onChange={() => setDarkTheme(!darkTheme)}
        />
      </div>
    </section>
  );
};

export default  observer(Settings);