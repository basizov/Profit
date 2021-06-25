import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../../app/store/store';
import RadioToggle from '../../features/Radio/RadioToggle';

const Settings: React.FC = () => {
  const { commonStore: { setDarkTheme, darkTheme } } = useStore();

  return (
    <section className="settings">
      <RadioToggle
        name='changeColorTheme'
        onChange={() => setDarkTheme(!darkTheme)} />
    </section>
  );
};

export default  observer(Settings);