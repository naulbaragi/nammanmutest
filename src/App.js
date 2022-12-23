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
  let [좋아요함수,fun] = useState([0,0,0]);
  let [dynamic,setdynamic] = useState(true);


  // [1,2,3].map(function(a,i){
  //   let [좋아요함수.concat(a),fun.concat(i)] = useState(0);
    // return ([a,i] = useState(0))

  // let temp = 0;

  // [1,2,3].map(function(a){
  //   console.log(a);
  // })


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
        <h2> 콘서트 무대 순서 <span onClick={() => {
          let copy = [...j]; copy[0] = '나얼'; k(copy)}}>순서</span></h2>
          <h2>{j[0]}</h2>
          <h2> {j[1]}</h2>
          <h2>{j[2]}</h2>
          <h2> {j[3]}</h2>
        </div>
        <button onClick={() => {let copy2 = [...j.sort()];k(copy2)}} >정렬</button>
        <div className='modal'>
          <h4>제목</h4>
          <p>날짜</p>
          <p>상세 내용</p>
        </div>
        <button onClick = {dynamic == false ? () => {setdynamic(true)} :()=>{setdynamic(false)}}>버튼</button>
        {
            dynamic == false ? <Modal></Modal>:null
        }

        {
          [0,1,2].map(function(z,i){
            return (<div className='list' key={i}>
            <h2> Ballad Pop City <span onClick={() => {let type = [...좋아요함수]; type[i] = type[i]+1; fun(type)}}>좋아요</span> {좋아요함수[z]} </h2>
            <h4> 성시경 - 아픈 나를</h4>
            <h4> {c}</h4>
            <h4>{z}</h4>
            <h4>{date}</h4>
          </div>)
          })
        }
        </div>
  );
}

function Modal(){
  return(
    <div className='modal'>
          <h4>제목</h4>
          <p>날짜</p>
          <p>상세 내용</p>
        </div>
  )
}

export default App;
