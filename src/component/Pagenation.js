import { Link } from 'react-router-dom';

//폰트어썸
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

export default function Pagenation(){

  const pageNation = (e) => {
    e.preventDefault();
  }

  return (
    <div className="pagination">
      <Link to="/" className="angle p-first" onClick={pageNation}><FontAwesomeIcon icon={faAnglesLeft} /></Link>
      <Link to="/" className="angle p-prev" onClick={pageNation}><FontAwesomeIcon icon={faAngleLeft} /></Link>
      <Link to="/" onClick={pageNation}>10</Link>
      <Link to="/" onClick={pageNation}>12</Link>
      <strong>13</strong>
      <Link to="/" onClick={pageNation}>14</Link>
      <Link to="/" onClick={pageNation}>15</Link>
      <Link to="/" className="angle p-next" onClick={pageNation}><FontAwesomeIcon icon={faAngleRight} /></Link>
      <Link to="/" className="angle p-last" onClick={pageNation}><FontAwesomeIcon icon={faAnglesRight} /></Link>
    </div>
  );
}