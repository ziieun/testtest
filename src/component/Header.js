import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import HeaderCate from "./HeaderCate";
import HeaderSearch from "./HeaderSearch";

export default function Header(){

    return <div id="header">
        <div className="header-contant">
            <div className="section">

                <h1><Link to="/" className="logoMark"><span>Jieun</span></Link></h1>
                
                <HeaderSearch/>

                <div className="my-menu">
                    <ul className="bottom-nav">
                        <li className="my"><Link to="/mypage"><span>마이페이지</span></Link></li>
                    </ul>
                    <ul className="unit-nav">
                        <li className="order"><Link to="/custOrderList"><span>주문/배송</span></Link></li>
                        <li className="wish"><Link to="/wishItem"><span>나의 찜</span></Link></li>
                        <li className="cart"><Link to="/od/cart"><span>장바구니</span><em className="count">4</em></Link></li>
                    </ul>
                </div>

            </div>
        </div>

        <div className="header-navigation">

        <div className="section">

            <HeaderCate/>

			<nav className="gnb">
				<h2 className="skip">메인메뉴</h2>
				<Swiper
                freemode={'true'}
                slidesPerView={'auto'}
                >
                    <SwiperSlide><Link to="/">홈</Link></SwiperSlide>
                    <SwiperSlide><Link to="/">매장행사</Link></SwiperSlide>
                    <SwiperSlide><Link to="/">베스트</Link></SwiperSlide>
                    <SwiperSlide><Link to="/">신상품</Link></SwiperSlide>
                    <SwiperSlide><Link to="/">기획전</Link></SwiperSlide>
                    <SwiperSlide><Link to="/">이벤트</Link></SwiperSlide>
                    <SwiperSlide><Link to="/">레시피</Link></SwiperSlide>
                </Swiper>
			</nav>

			<div className="gb">
				<Link to="/">로그인</Link>
				<Link to="/">회원가입</Link>
				<Link to="/">고객센터</Link>
			</div>

        </div>

    </div>
        
    </div>
}