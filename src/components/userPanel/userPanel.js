import React from 'react';
import Link from '../UI/Link/Link'
import './userPanel.scss'

const UserPanel = () => {
  return (
      <div className={'userPanel'}>
        <div className="userPanel__loginin">
          <Link
              isTarget={true}
              clas={'primary test test2 test3 test4 and so on'} // can be added multiple classes
              fontSize={13}
              text={'Вход'}
              href={'https://www.youtube.com/watch?v=WU7SGn0MeP0'}
          /> /
          <Link
              isTarget={false}
              clas={'primary'} // can be added multiple classes
              fontSize={13}
              text={'Регистрация'}
              href={'https://www.youtube.com/watch?v=WU7SGn0MeP0'}
          />
        </div>
      </div>
  );
};

export default UserPanel;