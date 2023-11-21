import { useState, useEffect, useRef } from "react";

//폰트어썸
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function HeaderSearch(){

    const [active, setActive] = useState("dont");
    function activeFn(){
        setActive(active === "active" ? "dont" : "active");
    }

    const [searchInput, setSearchInput] = useState('');
    const handleChange = event => {
        setSearchInput(event.target.value);
    };
    const searchCheck = event =>{
        event.preventDefault();
        searchElement.current.disabled = false;
        searchElement.current.focus();
        if(searchInput.trim().length !== 0){
            //검색페이지로 넘어가자
        }else{
            alert('검색어를 입력하세요');
            return false;
        }
    }

    const searchElement = useRef(null); // DOM 요소를 searchElement에 할당
    useEffect(() => {
        if (searchElement.current) { // 할당한 DOM 요소가 불러지면 (마운트 되면)
          searchElement.current.focus(); // focus 할당!
        }
    }, [active]);

    return <div className={`header-search ${active}`}>

        <input type="text" placeholder="상품을 검색해보세요!" onClick={activeFn}/>
        <button type="button" className="btn-search" onClick={activeFn}>
            <span>검색</span>
        </button>

        <div className="modal-search">
            <div className="dim"></div>
            <form className="search-form" onSubmit={searchCheck}>
                <fieldset>
                    <legend className="blind">검색폼</legend>
                    <button type="button" className="close-large" onClick={activeFn}><FontAwesomeIcon icon={faXmark} /></button>
                    <div className="keyword-box"> 
                        <legend>검색폼</legend>
                        <input type="text" id="searchInput" autoComplete="off" maxLength="20" onChange={handleChange} ref={searchElement}/>
                        <input type="hidden" id="org_query" name="org_query" value=""/>
                        <button type="submit" className="btn-search-big"><span className="ico ico-search">search</span></button>
                    </div>
                </fieldset>
            </form>
        </div>

    </div>
}