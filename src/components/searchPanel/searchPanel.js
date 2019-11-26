import React, { useState } from 'react';
import './searchPanel.scss'

const SearchPanel = () => {
  let [search, setSearch] = useState('Поиск');
  const handlSearch = (e) => {setSearch(e.target.value)};
  return (
      <div className={'searchPanel'}>
        <div className="searchPanel__bar">
          <form className={'searchPanel__form'}>
            <input
                onChange={handlSearch}
                className={'searchPanel__search'}
                type="text" name="name"
                value={search}/>
            <button className="searchPanel__submit" type="submit" title="ok">ok</button>
          </form>
        </div>
      </div>
  );
};

export default SearchPanel;