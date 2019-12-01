import React, { useState } from "react";
import Header from "./components/Header/Header";
import FilmsWrapper from "./components/FilmsWrapper/FilmsWrapper";
import FilmsConteiner from "./components/hoc/FilmsConteiner/FilmsConteiner";
import Context from "./context";
import "./App.scss";

function App() {
  let [menu] = useState(["Главная", "Новинки", " Стол заказов", "Помощь"]);
  let [filmCategory] = useState([
    "Биографии",
    "Боевики",
    "Вестерны",
    "Военные",
    "Детективы",
    "Детские",
    "Документальные",
    "Военные",
    "Детективы",
    "Детские",
    "Документальные"
  ]);
  let [years] = useState(["2017 года", "2018 года", "2019 года"]);
  let [preview] = useState([1, 2, 3, 4, 5, 6, 7]);
  let [byCountry] = useState([
    "Американские",
    "Британские",
    "Российские",
    "Индийские",
    "Немецкие",
    "Французские"
  ]);
  let [serials] = useState(["Русские", "Зарубежные", "Турецкие"]);
  let [catName] = useState(["Категории", "По году", "По странам", "Сериалы"]);
  let films = [];
  return (
    <Context.Provider
      value={{
        serials,
        catName,
        byCountry,
        preview,
        years,
        filmCategory,
        menu
      }}
    >
      <div className="App">
        <Header />
        <FilmsWrapper />
        <FilmsConteiner />
      </div>
    </Context.Provider>
  );
}

export default App;
