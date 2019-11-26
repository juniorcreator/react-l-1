import React, { useState } from 'react';
import Header from "./components/header/header";
import FilmsWrapper from './components/FilmsWrapper/FilmsWrapper';

import MyComponent from './components/myComponent/myComponent';
import './App.scss';

function App() {
  let [menu, setMenu] = useState(['Главная', 'Новинки' , ' Стол заказов', 'Помощь']);
  let [preview, setpreview] = useState([1, 2, 3, 4, 5, 6, 7]);
  return (
    <div className="App">
      <Header />
      <FilmsWrapper menu={menu} preview={preview} />
    </div>
  );
}

export default App;
