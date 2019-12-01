import React, { useState } from "react";
import Context from "./context";
import Header from "./components/Header/Header";
import FilmsWrapper from "./components/FilmsWrapper/FilmsWrapper";
import FilmsConteiner from "./components/hoc/FilmsConteiner/FilmsConteiner";
import Footer from "./components/Footer/Footer";
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
  let films = [
    {
      title: "Мэри Поппинс возвращается (2019)",
      descript:
        "Лондон, 1930-е годы. Майкл и Джейн Бэнкс – брат и сестра, " +
        "переживающие непростые времена. У них накопилось много долгов, из-за " +
        "чего они вскоре могут лишиться дома и наследства родителей. В этот сложный " +
        "жизненный период происходит то, чего герои никак не могли ожидать – на пороге " +
        "их дома спустя 20 лет после расставания появляется их удивительная няня" +
        " Мэри Поппинс. За годы своего отсутствия она ничуть не изменилась внешне, " +
        "и остаётся всё такой же утончённой, элегантной и сдержанной женщиной. " +
        "Майкл и Джейн не верят...",
      year: "2019",
      country: "США",
      janras: ["Мюзикл", "Фэнтези", "Семейный"],
      quality: "HDRip",
      translate: "Профессиональный (многоголосный)",
      duration: " 02:06:52",
      premyera: " 3 января 2019",
      published: "5 апреля 2019",
      licence: false,
      id: 1
    },
    {
      title: "Крид 2 (2019)",
      descript:
        "Молодой боксёр Адонис Крид, который приходится сыном легендарному боксёру, " +
        "погибшему много лет назад на ринге, продолжает свою карьеру. " +
        "Он добился определённых успехов в карьере, а за пределами ринга " +
        "встретил любимую девушку и завёл ребёнка. Тренирует Адониса великий " +
        "в прошлом боксёр Рокки Бальбоа, который был лучшим другом его отца. " +
        "Рокки сумел доказать, что является хорошим тренером, способным раскрыть" +
        " весь потенциал талантливого бойца. Спустя небольшой перерыв Адонис " +
        "принимает решение вернуться на ринг, чтобы добыть важные победы и...",
      year: "2019",
      country: "США",
      janras: ["Драма", "Спортивный"],
      quality: "HDRip",
      translate: "Профессиональный (многоголосный)",
      duration: " 02:06:52",
      premyera: " 3 января 2019",
      published: "5 апреля 2019",
      licence: true,
      id: 2
    },
    {
      title: "Танк Т-34 (2019)",
      descript:
        "В 1941 году в кровопролитных боях советский младший лейтенант " +
        "Ивушкин на своём Т-34 уничтожает целую танковую роту врага, " +
        "после чего вместе со своим механиком попадает в плен. В 1944 году " +
        "нацистское командование поручает одному из своих лучших танкистов Ягеру," +
        " который в прошлом потерпел поражение от Ивушкина, возглавить новый полигон " +
        "по подготовке элитных танковых войск. Ягер принимает решение использовать захваченные " +
        "советские танки в качестве живых мишеней. Это должно помочь " +
        "нацистским солдатам пройти учения максимально приближенные...",
      year: "2019",
      country: "США",
      janras: ["Драма", "Военный", "Приключения"],
      quality: "HDRip",
      translate: "Профессиональный (многоголосный)",
      duration: " 02:06:52",
      premyera: " 3 января 2019",
      published: "5 апреля 2019",
      licence: false,
      id: 3
    },
    {
      title: "Кадавр (2019)",
      descript:
        "Бывший сотрудник полиции Меган Рид, которая себя дискредитировала," +
        " после увольнения проходит курс лечения от наркозависимости и решает " +
        "начать жизнь с чистого листа. Однажды героиня остаётся отработать ночную " +
        "смену в морге больницы, в которой она проходила лечение. Девушка абсолютно " +
        "не боится трупов, поэтому спокойно относится к такой работе. Но в морг привозят" +
        " тело молодой девушки, которая умерла во время обряда экзорцизма. " +
        "Её тело сильно изуродовано, но даже это не особо пугает Меган," +
        " которая не верит в сверхъестественное. Но неожиданно для себя...",
      year: "2019",
      country: "США",
      janras: ["Ужасы", "Триллер", "Детектив"],
      quality: "HDRip",
      translate: "Профессиональный (многоголосный)",
      duration: " 02:06:52",
      premyera: " 3 января 2019",
      published: "5 апреля 2019",
      licence: true,
      id: 4
    },
    {
      title: "Снежная Королева: Зазеркалье (2019)",
      descript:
        "Герда сильно переживает из-за того, что у неё единственной в семье нет никаких магических способностей. Главная её сила заключается не в волшебстве, а доброте, отваге и умении найти выход из любого, даже самого сложного положения. Однажды король Харальд собирает всех, у кого есть магический дар, чтобы оценить невероятные способности своих подданных. Но на самом деле он преследует совсем иную цель. Много лет назад он потерял семью из-за Снежной Королевы, и с тех пор он ненавидит волшебство и хочет от него избавиться. И он находит...",
      year: "2019",
      country: "Россия",
      janras: ["Мультфильм"],
      quality: "HDRip",
      translate: "Профессиональный (многоголосный)",
      duration: " 02:06:52",
      premyera: " 3 января 2019",
      published: "5 апреля 2019",
      licence: false,
      id: 5
    },
    {
      title: "Жил-был Дэдпул (2019)",
      descript:
        "После страшного секретного эксперимента наёмник Уэйд Уилсон обрёл невероятные способности и стал супергероем по прозвищу Дэдпул. Он безжалостно расправляется со злодеями и готов на всё, чтобы защитить себя и свою возлюбленную Ванессу. Герой в красном костюме открывает охоту на самых жестоких и опасных преступников, но совершает ошибку, в результате которой его любимая погибает. Уэйд пытается отпустить прошлое и вскоре становится на защиту юного мутанта, который обладает разрушительной силой и никого не слушается. С ним уже произошло...",
      year: "2019",
      country: "США",
      janras: ["Комедия", "Боевик", "Фантастика"],
      quality: "HDRip",
      translate: "Профессиональный (многоголосный)",
      duration: " 02:06:52",
      premyera: " 3 января 2019",
      published: "5 апреля 2019",
      licence: false,
      id: 6
    },
    {
      title: "Спасти Ленинград (2019)",
      descript:
        "В сентябре 1941 года молодые возлюбленные Настя и Костя садятся на баржу, с помощью которой проводится массовая эвакуация людей с блокадного Ленинграда. Враг наступает, и десятки тысяч людей нужно срочно эвакуировать из города, а сделать это можно лишь переплыв на другую сторону Ладожского озера. Юного курсанта Костю и дочь предателя Настю не пугает тот факт, что на барже располагается огромное количество людей. Более тысячи человек покинули свои дома и хотят уплыть в тыл подальше от надвигающегося врага. Проблема заключается в том, что судно...",
      year: "2019",
      country: "США",
      janras: ["Драма", "Военный", "Отечественный"],
      quality: "HDRip",
      translate: "Профессиональный (многоголосный)",
      duration: " 02:06:52",
      premyera: " 3 января 2019",
      published: "5 апреля 2019",
      licence: true,
      id: 7
    },
    {
      title: "Сможете ли вы меня простить? (2019)",
      descript:
        "Аладдин смог завоевать сердце прекрасной принцессы Жасмины. Из обычного мелкого воришки он превратился в отважного воина и возлюбленного принцессы. Теперь он живёт в роскошном дворце и не знает проблем. Но однажды в Багдад со своим войском прибывает коварный и опасный Диктатор, который захотел занять место Аладдина и отбить у него принцессу. Благодаря численному превосходству и эффекту неожиданности ему удаётся прогнать героя и занять его место. Но Аладдин не собирается так просто сдаваться, ведь у него ещё есть верные друзья...",
      year: "2019",
      country: "США",
      janras: ["Драма", "Комедия", "Биография"],
      quality: "HDRip",
      translate: "Профессиональный (многоголосный)",
      duration: " 02:06:52",
      premyera: " 3 января 2019",
      published: "5 апреля 2019",
      licence: true,
      id: 8
    },
    {
      title: "Приключения Аладдина (2019)",
      descript:
        "Си – девочка-подросток, которая вместе со своим отцом отправляется в опасную экспедицию на отдалённый спутник. Там в глубине опасных лесов есть залежи драгоценных камней, с помощью которых отец и дочь собираются разбогатеть. Но миссия оказывается куда опаснее, чем они только могли себе представить. На спутнике оказывается немало желающих поправить своё финансовое положение, и многие из них жестокие преступники, готовые пойти на всё ради наживы. Именно с таким человеком сталкиваются Си её отец. Вор и убийца Эзра нападает на отца с дочерью. Он...",
      year: "2019",
      country: "Франция",
      janras: ["Комедия"],
      quality: "HDRip",
      translate: "Профессиональный (многоголосный)",
      duration: " 02:06:52",
      premyera: " 3 января 2019",
      published: "5 апреля 2019",
      licence: false,
      id: 9
    },
    {
      title: "Перспектива (2019)",
      descript:
        "Лондон, 1930-е годы. Майкл и Джейн Бэнкс – брат и сестра, " +
        "переживающие непростые времена. У них накопилось много долгов, из-за " +
        "чего они вскоре могут лишиться дома и наследства родителей. В этот сложный " +
        "жизненный период происходит то, чего герои никак не могли ожидать – на пороге " +
        "их дома спустя 20 лет после расставания появляется их удивительная няня" +
        " Мэри Поппинс. За годы своего отсутствия она ничуть не изменилась внешне, " +
        "и остаётся всё такой же утончённой, элегантной и сдержанной женщиной. " +
        "Майкл и Джейн не верят...",
      year: "2019",
      country: "США",
      janras: ["Фантастика"],
      quality: "HDRip",
      translate: "Профессиональный (многоголосный)",
      duration: " 02:06:52",
      premyera: " 3 января 2019",
      published: "5 апреля 2019",
      licence: false,
      id: 10
    }
  ];
  return (
    <Context.Provider
      value={{
        serials,
        catName,
        byCountry,
        preview,
        years,
        filmCategory,
        menu,
        films
      }}
    >
      <div className="App">
        <Header />
        <FilmsWrapper />
        <FilmsConteiner />
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;
