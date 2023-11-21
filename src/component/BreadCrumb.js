import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from "react";

//폰트어썸
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons';

export default function BreadCrumb(){

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

  const snsFn = (e, msg) => {
    e.preventDefault();
    alert(msg);
  }

  return (
    <div className="breadcrumb">
      <div className="section">
        <div className="crumb crumb1" id="hst_1"><Link to="/">홈</Link></div>
        <div className="crumb crumb2" id="hst_2">농수축산</div>
        <div className={`crumb crumb-select ${active}`} ref={outsideRef}>
          <button type="button" onClick={activeFn}>야채/채소</button>
          <ul className="select-options">
            <li><a rel="6" action="hst_3" href="/">야채/채소</a></li>
            <li><a rel="7" action="hst_3" href="/">과일</a></li>
            <li><a rel="8" action="hst_3" href="/">쌀/잡곡</a></li>
            <li><a rel="9" action="hst_3" href="/">축산/계란</a></li>
            <li><a rel="10" action="hst_3" href="/">수산/건어물</a></li>
            <li><a rel="13809" action="hst_3" href="/">견과</a></li>
          </ul>
          </div>
        <div className="sns-shared">
          <Link to="/" onClick={(e) => snsFn(e, '페이스북')} className="sns-shared-fb"><span className="blind">Facebook</span></Link>
          <Link to="/" onClick={(e) => snsFn(e, '트위터')} className="sns-shared-tw"><span className="blind">twitter</span></Link>
          <Link to="/" onClick={(e) => snsFn(e, '밴드')} className="sns-shared-band"><span className="blind">밴드</span></Link>
          <Link to="/" onClick={(e) => snsFn(e, '링크복사')} className="link-copyed"><FontAwesomeIcon icon={faLink} /></Link>
        </div>
      </div>
    </div>
  )
}