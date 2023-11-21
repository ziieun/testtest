import { useState } from "react";

//이미지 로딩
import Image from '../component/Image.tsx';

import Mainslide from '../component/Mainslide';
import Hello from '../component/Hello';
import Modal from '../component/Modal';

import React from 'react'
import ItemsMain from "../component/ItemsMain";

function Home() {

  const [isOpen, setIsOpen] = useState(false);
	const onClickButton = () => {
		setIsOpen(true);
	};

  return (
    <>
    <Mainslide/>
    <div className="section">
      <ItemsMain itemNum="4" promotionId={Number(11918)} title="수미궁김치 할인행사" />

      <ItemsMain itemNum="8" promotionId={Number(11904)} title="싱싱제철맛집" />

      <div className="main-section-bnr"><Image src="http://jangfood1.hgodo.com/shop/external/fix/IMG_BANNER/770/20200730091041-dc5-81ff8c7d57cc.jpg"/></div>

      <ItemsMain itemNum="8" promotionId={Number(11904)} title="싱싱제철맛집2" />

      <Hello/>

      <button onClick={onClickButton}>모달 띄워 볼래?</button>
    </div>

    {isOpen && (<Modal
      open={isOpen}
      onClose={() => {
      setIsOpen(false);
      }}
      confirm={true}
    >
      <div className="modal-top">모달창 확인</div>
      <div className="modal-center">내용확인</div>
    </Modal>)}
    </>
  )
}

export default Home