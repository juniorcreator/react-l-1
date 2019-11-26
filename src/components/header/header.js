import React from 'react';
import Logo from '../Logo/Logo';
import UserPanel from '../userPanel/userPanel';
import SearchPanel from '../searchPanel/searchPanel';
import './header.scss'

export default Header => {
    return (
        <div className={'header'}>
          <div className={'content jcsb-aic'}>
            <Logo />
            <UserPanel />
            <SearchPanel />
          </div>
        </div>
    );
}