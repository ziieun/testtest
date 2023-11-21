import { useEffect, useState } from "react";
import itemList from "../db/data";

//이미지 로딩
import Image from './Image.tsx';

//폰트어썸
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Items(props){

  function cartBtn(e){
    e.preventDefault();
    alert('장바구니에 담았습니다.');
  }
  
  const [items, setItems] = useState(itemList);
  const [like, setLike] = useState(items);

  useEffect(() => {
    setLike();
  }, [like, setItems]);

  return (
  <ul className="list-items">
  {items
  // .filter((item) => item.id <= 12)
  .filter((item) => item.itemGrpNo === props.itemGrpNo)
  .slice(0, 12)
  .map((item, i) => (
    <li className={`list-item ${item.stock}`} key={i}>
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
  )
}