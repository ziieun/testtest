// import React from "react";
// import ReactDOM from "react-dom";
import itemList from "../db/data";

//이미지 로딩
import Image from './Image.tsx';

import { useEffect, useState } from "react";

//폰트어썸
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';

export default function ItemsMainp(props){

  function cartBtn(e){
    e.preventDefault();
    alert('장바구니에 담았습니다.');
  }
  
  const [items, setItems] = useState(itemList);
  const [like, setLike] = useState(items);

  useEffect(() => {
    setLike();
  }, [like, setItems]);

  // ReactDOM.render(
  //   React.createElement("h1", null, `type 이 "태그 이름 문자열" 입니다.`),
  //   document.querySelector(".sold-out")
  // );

  return (
  <div className="main-section-theme">
    <div className="theme-title">
      <h3>{props.title}</h3>
    </div>
    <div className="item-box">
      <ul className="list-items">
        {items
        .filter((item) => item.promotion === props.promotionId)
        .slice(0, 8)
        .map((item) => (
          <li className={`list-item ${item.stock}`} key={item.id}>
          <div className="box-item">
            <a href="/">
              <span className="thumb">
                <Image src={item.imgsrc} alt=""/>
                <span className= "item-actions">
                <button className="btn-cart" onClick={cartBtn}><FontAwesomeIcon icon={faCartShopping} /></button>
                <button className={`btn-heart ${item.like}`} onClick={ (e) => {
                  e.preventDefault();
                  setLike(item.like === "like" ? item.like="" : item.like="like");
                } }><FontAwesomeIcon icon={faHeart} /></button>
                </span>
              </span>
              <span className="info">
                <span className="item-tit">{item.name}</span>
                <span className="item-price">{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
              </span>
            </a>
          </div>
          </li>
          ))}
      </ul>
    </div>
  </div>
  )
}