import React, { useState } from 'react';
import moment from 'moment';
import './App.css';
import 'moment/locale/ru'

moment.locale('ru');

function Passed(props) {
  return (
    <p className="date">{moment(new Date(props.date)).fromNow()}</p>
  )
}

function Wrapper(Component) {
  return (props) => {
    return <Component date={props.date} />
  }
}

function Video(props) {
  const Temp = Wrapper(Passed)
  return (
    <div className="video">
      <iframe src={props.url}></iframe>
      <Temp date={props.date} />
    </div>
  )
}
export default function App() {
  const [list, setList] = useState([
    {
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2021-07-31 13:24:00'
    },
    {
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2022-03-17 12:10:00'
    },
    {
      url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2022-03-17 22:16:00'
    },
    {
      url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-01-03 12:10:00'
    },
    {
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-01-01 16:17:00'
    },
    {
      url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2017-12-02 05:24:00'
    },
  ]);
  return list.map(item => <Video url={item.url} date={item.date} />);
}