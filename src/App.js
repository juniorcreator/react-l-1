import React, { useState } from 'react';
import Header from "./components/header/header";
import FilmsWrapper from './components/FilmsWrapper/FilmsWrapper';
import FilmsConteiner from './components/hoc/FilmsConteiner/FilmsConteiner';
import './App.scss';

function App() {
  let [menu, setMenu] = useState(['Главная', 'Новинки' , ' Стол заказов', 'Помощь']);
  let [filmCategory, setFilmCategory] = useState([
      'Биографии' , 'Боевики', 'Вестерны' ,'Военные', 'Детективы', 'Детские',
    'Документальные','Военные', 'Детективы', 'Детские', 'Документальные']);
  let [years, setYears] = useState(['2017 года', '2018 года', '2019 года']);
  let [preview, setpreview] = useState([1, 2, 3, 4, 5, 6, 7]);
  let [byCountry, setByCountry] = useState([
      'Американские', 'Британские', 'Российские',
    'Индийские', 'Немецкие', 'Французские']);
  let [serials, setSerials] = useState(['Русские', 'Зарубежные', 'Турецкие']);
  let [catName, setCatName] = useState(['Категории', 'По году', 'По странам', 'Сериалы']);
  return (
    <div className="App">
      <Header />
      <FilmsWrapper menu={menu} preview={preview} />
      <FilmsConteiner catName={catName} data={{filmCategory, years,byCountry, serials}} />
    </div>
  );
}

export default App;
