/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [글날짜, 글날짜변경] = useState(['2월 17일', '2월 18일', '2월 19일']);
  let [따봉, 따봉변경] = useState(0);

  function 제목바꾸기() {
    var newArray = [...글제목];
    newArray[0] = '여자코트 추천';
    글제목변경(newArray);
  }

  let posts = '강남 고기 맛집';

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      <Llst 제목={글제목[0]} 날짜={글날짜[0]}/>
      <Modal />
      <Llst 제목={글제목[1]} 날짜={글날짜[1]}/>
      <Modal />
      <Llst 제목={글제목[2]} 날짜={글날짜[2]}/>
      <Modal />

    </div>
  );
}

function Llst(props) {
  return (
    <>
      <div className="list">
        <h4> {props.제목} </h4>
        <p>{props.날짜} 발행</p>
        <hr />
      </div>
    </>
  );
}

function Modal() {
  return (
    <>
      <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  );
}

export default App;
