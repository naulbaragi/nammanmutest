import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '나얼 신곡 발매 예정';
  let [a,b] = useState('나얼 본인의 목소리는 1월에 들을 수 있음 ');
  let [c,d] = useState('아마 두번째 싱글은 태연일 것이라 추정');
  let [e,f] = useState('브라운 아이즈와 브라운아이드소울의 차이점은?')
  let [j,k] = useState(['정엽','나얼','성훈','영준']);
  let date = '2022년 12월 22일';
  let [좋아요함수,fun] = useState(0);
  // let temp = 0;


  // function likefunction(){
  //   console.log(1);
  // }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color : 'red'}}> 나얼 정보 관련 테스트 블로그</h4>
      </div>
      <h1> {post} </h1>
      <div className='list'>
        <h2> Ballad Pop City <span onClick={() => {fun(좋아요함수+1)}}>좋아요</span> {좋아요함수} </h2>
        <h4> 성시경 - 아픈 나를</h4>
        <h4> {c}</h4>
        <h4>{a}</h4>
        <h4>{date}</h4>
      </div>
      <div className='list'>
        <h2> 브라운아이드소울의 콘서트</h2>
        <h4> {date} </h4>
        </div>
        <div className='list'>
          <h2> {e}</h2>
          <h4>{date}</h4>
        </div>
        <div className='list'>
          <h1>콘서트시 무대 순서<span onClick={function(){j[1]}} >눌러보세요</span> {눌러보세요}</h1>
          <h2>{j[0]}</h2>
          <h2> {j[1]}</h2>
          <h2>{j[2]}</h2>
          <h2> {j[3]}</h2>
        </div>
        </div>
  );
}

export default App;
