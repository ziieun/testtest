import { Link } from 'react-router-dom';

import BreadCrumb from '../component/BreadCrumb';
import Items from '../component/Items';
import Pagenation from '../component/Pagenation';

//폰트어썸
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function CategoryItemList(){

  const linkFn = (e) => {
    e.preventDefault();
  }

  return (
    <>
    <BreadCrumb/>

    <div className="section">

      <div className="contents-tit">
        <h3 className="h2-ty1"><Link to={"/goods/categoryItemList"}>야채/채소</Link></h3>
        <p className="search-page-total">총 <em className="color1">476</em>개 상품</p>
      </div>

      <div className="category-wrap">
        <div className="contents-category">
          <ul className="categoryList">
            <li><Link to="/" onClick={linkFn}>오이/호박/가지/옥수수(22)</Link></li>
            <li><Link to="/" onClick={linkFn}>고추/피망/파프리카(41)</Link></li>
            <li><Link to="/" onClick={linkFn} className="active">감자/당근/뿌리채소(31)</Link></li>
            <li><Link to="/" onClick={linkFn}>양파/마늘/대파(51)</Link></li>
            <li><Link to="/" onClick={linkFn}>나물/시금치/잎채소(46)</Link></li>
            <li><Link to="/" onClick={linkFn}>상추/깻잎/쌈채소(27)</Link></li>
            <li><Link to="/" onClick={linkFn}>배추/무우(18)</Link></li>
            <li><Link to="/" onClick={linkFn}>양배추/샐러드야채(19)</Link></li>
            <li><Link to="/" onClick={linkFn}>콩나물/숙주나물(30)</Link></li>
            <li><Link to="/" onClick={linkFn}>버섯류(32)</Link></li>
            <li><Link to="/" onClick={linkFn}>두부/묵/곤약(63)</Link></li>
            <li><Link to="/" onClick={linkFn}>약재/냉동/가공농산(80)</Link></li>
          </ul>
        </div>

        <div className="search-result">
          <div className="search-result-sort">
            <div className="sortBox">
              <div className="input-box">
                <input type="text" title="결과내검색" placeholder="결과 내 검색어 입력" id="keyword" autoComplete="off" maxLength="20"/>
                <button type="submit" className="btn-search-big" onClick={linkFn}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
              </div>
              <select className="select" id="itemOrderSelect">
                <option value="0010" id="ord_0010">추천순</option>
                <option value="0020" id="ord_0020">낮은가격순</option>
                <option value="0021" id="ord_0021">높은가격순</option>
              </select>
            </div>
          </div>

          <div className="item-box">
            <Items itemGrpNo={Number(6)} />
            <Pagenation/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}