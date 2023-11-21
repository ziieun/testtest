import { useState, useEffect, useRef } from "react";

export default function HeaderCate(){
  const [active, setActive] = useState("dont");
  function activeFn(){
    setActive(active === "active" ? "dont" : "active");
  }

  const outsideRef = useRef(null);
  useEffect(() => {
    function clickOutside(event) {
      if (outsideRef.current && !outsideRef.current.contains(event.target)) {
      setActive(active === "dont");
      }
    }
    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("click", clickOutside);
    };
  }, [active]);

    return  <div className={`category-wrap ${active}`} ref={outsideRef}>
		<button type="button" className="btn-cate" onClick={activeFn}>
			<span>카테고리</span>
		</button>
		<div className="box-category">
			<div className="section">
				<div className="box_wrap">
					<div className="category-list">
						<h3>농수축산</h3>
						<ul>
							<li><a href="/goods/categoryItemList?itemGrpNo=5&amp;grpLev=2">야채/채소</a></li>
							<li><a href="/goods/categoryItemList?itemGrpNo=6&amp;grpLev=2">과일</a></li>
							<li><a href="/goods/categoryItemList?itemGrpNo=7&amp;grpLev=2">쌀/잡곡</a></li>
							<li><a href="/goods/categoryItemList?itemGrpNo=8&amp;grpLev=2">축산/계란</a></li>
							<li><a href="/goods/categoryItemList?itemGrpNo=9&amp;grpLev=2">수산/건어물</a></li>
							<li><a href="/goods/categoryItemList?itemGrpNo=10&amp;grpLev=2">견과</a></li>
						</ul>
					</div>
					<div className="category-list">
						<h3>가공식품</h3>
						<ul>
							<li><a href="/goods/categoryItemList?itemGrpNo=11&amp;grpLev=2">고추장/된장/간장류</a></li>
							<li><a href="/goods/categoryItemList?itemGrpNo=12&amp;grpLev=2">양념/소스/육수</a></li>
							<li><a href="/goods/categoryItemList?itemGrpNo=13&amp;grpLev=2">식용유/조미료</a></li>
							<li><a href="/goods/categoryItemList?itemGrpNo=14&amp;grpLev=2">밀가루/라면/면</a></li>
							<li><a href="/goods/categoryItemList?itemGrpNo=15&amp;grpLev=2">유제품/냉장/냉동</a></li>
							<li><a href="/goods/categoryItemList?itemGrpNo=16&amp;grpLev=2">캔/통조림</a></li>
							<li><a href="/goods/categoryItemList?itemGrpNo=17&amp;grpLev=2">김/편이식/반찬</a></li>
							<li><a href="/goods/categoryItemList?itemGrpNo=18&amp;grpLev=2">생수/음료</a></li>
							<li><a href="/goods/categoryItemList?itemGrpNo=19&amp;grpLev=2">커피믹스/티백</a></li>
							<li><a href="/goods/categoryItemList?itemGrpNo=20&amp;grpLev=2">빵/스낵/안주류</a></li>
							<li><a href="/goods/categoryItemList?itemGrpNo=13805&amp;grpLev=2">헬스/건강식품</a></li>
							<li><a href="/goods/categoryItemList?itemGrpNo=13807&amp;grpLev=2">반려동물용품</a></li>
						</ul>
					</div>
					<div className="category-list">
						<h3>주방조리용품</h3>
						<ul>
							<li><a href="/goods/categoryItemList?itemGrpNo=21&amp;grpLev=2">소모품/일회용품</a></li>
							<li><a href="/goods/categoryItemList?itemGrpNo=22&amp;grpLev=2">조리도구</a></li>
							<li><a href="/goods/categoryItemList?itemGrpNo=23&amp;grpLev=2">식기/밀폐용기</a></li>
							<li><a href="/goods/categoryItemList?itemGrpNo=24&amp;grpLev=2">주전자/프라이팬</a></li>
							<li><a href="/goods/categoryItemList?itemGrpNo=25&amp;grpLev=2">냄비/솥/찜기</a></li>
						</ul>
					</div>
					<div className="category-list">
						<h3>생활용품</h3>
						<ul>
							<li><a href="/goods/categoryItemList?itemGrpNo=26&amp;grpLev=2">주방잡화</a></li>
							<li><a href="/goods/categoryItemList?itemGrpNo=27&amp;grpLev=2">욕실잡화</a></li>
							<li><a href="/goods/categoryItemList?itemGrpNo=28&amp;grpLev=2">생활잡화</a></li>
							<li><a href="/goods/categoryItemList?itemGrpNo=29&amp;grpLev=2">캠핑용품</a></li>
							<li><a href="/goods/categoryItemList?itemGrpNo=30&amp;grpLev=2">사무/자동차용품</a></li>		
						</ul>
					</div>
					<div className="category-list">
						<h3>대용량/박스상품</h3>
						<ul>
							<li><a href="/goods/categoryItemList?itemGrpNo=31&amp;grpLev=2">대용량 농산물</a></li>
							<li><a href="/goods/categoryItemList?itemGrpNo=32&amp;grpLev=2">대용량 축산물</a></li>
							<li><a href="/goods/categoryItemList?itemGrpNo=33&amp;grpLev=2">대용량 수산물</a></li>
							<li><a href="/goods/categoryItemList?itemGrpNo=34&amp;grpLev=2">대용량 장류/양념</a></li>
							<li><a href="/goods/categoryItemList?itemGrpNo=35&amp;grpLev=2">대용량 냉장/냉동</a></li>
							<li><a href="/goods/categoryItemList?itemGrpNo=36&amp;grpLev=2">대용량 가공식품</a></li>
							<li><a href="/goods/categoryItemList?itemGrpNo=37&amp;grpLev=2">대용량 커피/음료</a></li>
							<li><a href="/goods/categoryItemList?itemGrpNo=38&amp;grpLev=2">대용량 소모품/세제</a></li>
							<li><a href="/goods/categoryItemList?itemGrpNo=39&amp;grpLev=2">대용량 식기/도구</a></li>
							<li><a href="/goods/categoryItemList?itemGrpNo=13792&amp;grpLev=2">바로장보고</a></li>	
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
}