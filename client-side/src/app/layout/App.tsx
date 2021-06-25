import { observer } from 'mobx-react-lite';
import React from 'react';
import Settings from '../../components/Settings/Settings';
import Sidebar from '../../components/Sidebar/Sidebar';
import Modal from '../../features/Modal/Modal';
import { useStore } from '../store/store';

const App: React.FC = () => {
  const { commonStore: { darkTheme } } = useStore();

  return (
    <div className={`app ${darkTheme && 'dark'}`}>
      <Modal><Settings /></Modal>
      <Sidebar />
    </div>
  );
};

export default  observer(App);
