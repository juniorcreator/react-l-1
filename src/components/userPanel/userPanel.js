import React from 'react';
import './userPanel.scss'

const UserPanel = () => {
  return (
      <div className={'userPanel'}>
        <div className="userPanel__loginin">
          <a href="#">Вход</a>/<a href="#">Регистрация</a>
        </div>
      </div>
  );
};

export default UserPanel;