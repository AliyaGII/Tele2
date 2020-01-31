import React from 'react';
import './App.css';
import Tariffs from './components/Tariffs/Tariff';

function App() {

  const tariffs = [
    
    {id: 1, price: 500, rubl: '₽', month: '/месяц', icon: "https://www.nicola-walker.com/wp-content/uploads/2018/10/Social-media-buttons.png", name: "Везде онлайн", gb:' 40 GB + безлимитные',  min: '500 мин + безлимит на Tele2 в России',  sms: 50,},
    {id: 2, price: 400, rubl: '₽', month: '/месяц', icon: "https://www.nicola-walker.com/wp-content/uploads/2018/10/Social-media-buttons.png", name: "Мой онлайн ", gb: '15 GB + безлимитные', min: '500 мин + безлимит на Tele2 в России', sms: 0, },
    {id: 3, price: 700, rubl: '₽', month: '/месяц', icon: "https://www.nicola-walker.com/wp-content/uploads/2018/10/Social-media-buttons.png", name: "Мой онлайн+ ", gb: '30 GB + безлимитные',  min: '800 мин + безлимит на Tele2 в России', sms: 0},
    {id: 4, price: 200, rubl: '₽', month: '/месяц', icon: "https://www.nicola-walker.com/wp-content/uploads/2018/10/Social-media-buttons.png", name: "Мой разговор ", gb: ' 2 GB + безлимитные', min: '200 мин + безлимит на Tele2 в России', sms: 0},
    {id: 5, price: 7, rubl: '₽', month: '/месяц', icon: "https://www.nicola-walker.com/wp-content/uploads/2018/10/Social-media-buttons.png", name: "Мой Tele2", gb: '5 GB + безлимитные', min: '+ безлимит на Tele2 в России', sms: 0},
    {id: 6, price: 650, rubl: '₽', month: '/месяц', icon: "https://www.nicola-walker.com/wp-content/uploads/2018/10/Social-media-buttons.png", name: "Безлимит", gb: "Безлимитный интернет",  min: '500 мин + безлимит на Tele2 в России',  sms: 50,},
    {id: 7, price: 1500, rubl: '₽', month: '/месяц', icon: "https://www.nicola-walker.com/wp-content/uploads/2018/10/Social-media-buttons.png", name: "Премиум", gb: '50 GB + безлимитные',  min: '2000 мин + безлимит на Tele2 в России', sms: 500,},
    {id: 8, name: "Классический", sms: 0},
    {id: 9, name: "Интернет для устройств", sms: 0},
    {id: 10, price: 100, rubl: '₽', month: '/месяц', icon: "https://www.nicola-walker.com/wp-content/uploads/2018/10/Social-media-buttons.png", name: "Интернет для вашей", gb: '300 MB + безлимитные',  min: '30 мин + безлимит на Tele2 в России', sms: 100},
  ];
  return (
    <div>
      <h1>Tariff</h1>
     {tariffs.map(o=> <Tariffs name={o.name} price={o.price} rubl={o.rubl} month={o.month} gb={o.gb} icon={o.icon} min={o.min} sms={o.sms}/>)}
    </div>
  );
}

export default App;
