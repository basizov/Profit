import { observer } from 'mobx-react-lite';
import React from 'react';
import { Route } from 'react-router-dom';
import Chat from '../../components/Chat/Chat';
import Favourites from '../../components/Favourites/Favourites';
import Main from '../../components/Main/Main';
import Settings from '../../components/Settings/Settings';
import Sidebar from '../../components/Sidebar/Sidebar';
import Modal from '../../features/Modal/Modal';
import { useStore } from '../store/store';

const App: React.FC = () => {
  const { commonStore: { darkTheme, showSettings } } = useStore();

  return (
    <div className={`app ${darkTheme && 'dark'}`}>
      <Modal className={showSettings ? '' : 'modal__show'}><Settings /></Modal>

      <Sidebar />

      <main className="container">
        <Route exact path='/' component={Main} />
        <Route exact path='/chat' component={Chat} />
        <Route exact path='/favourites' component={Favourites} />
      </main>
    </div>
  );
};

export default  observer(App);
