import { Swiper, SwiperSlide } from 'swiper/react';
//이미지 로딩
import Image from './Image.tsx';

//폰트어썸
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Keyboard, Pagination, Navigation } from "swiper";

// export default () => {
  const Myslide = () => {
// export default function Myslide(){

  return (
    <div className="mainSliderWrap">
      <button className="mainSliderL"><span className="blind">이전</span></button>
      <button className="mainSliderR"><span className="blind">다음</span></button>
      <Swiper
        className="mainSlider"
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "fraction",
        }}
        navigation={{
          prevEl: '.mainSliderL, .mainSliderPrev',
          nextEl: '.mainSliderR, .mainSliderNext',
        }}
        modules={[Autoplay, Keyboard, Pagination, Navigation]}
        slidesPerView={'auto'}
        centeredSlides
        centeredSlidesBounds
        loop
      >
        <SwiperSlide><Image src="http://jangfood1.hgodo.com/shop/external/fix/IMG_BANNER/1595/20221220114147-927-3c97519bc0d2.jpg" alt="신선담백 구운란 여기서 골라보세요"/></SwiperSlide>
        <SwiperSlide><Image src="http://jangfood1.hgodo.com/shop/external/fix/IMG_BANNER/1322/20220624075800-ae1-8f53ef022a63.jpg" alt="업소용 가전제품 여기서 만나요"/></SwiperSlide>
        <SwiperSlide><Image src="http://jangfood1.hgodo.com/shop/external/fix/IMG_BANNER/1320/20220623120925-ac3-52babf63b6df.jpg" alt="대구 명물 수제꼬치 모음"/></SwiperSlide>
        <SwiperSlide><Image src="http://jangfood1.hgodo.com/shop/external/fix/IMG_BANNER/1117/20211109140519-735-9ef61c84b64a.jpg" alt="호주 국민음료 분다버스 기획전"/></SwiperSlide>
        <SwiperSlide><Image src="http://jangfood1.hgodo.com/shop/external/fix/IMG_BANNER/915/20210308154508-539-ca314cb7f37c.jpg" alt="신선함이 남다른 장보고 축산"/></SwiperSlide>
        <div className="navigation">
          <button className="mainSliderPrev"><FontAwesomeIcon icon={faCircleChevronLeft} /></button>
          <button className="mainSliderNext"><FontAwesomeIcon icon={faCircleChevronRight} /></button>
        </div>
      </Swiper>
    </div>
  );
};

export default Myslide;