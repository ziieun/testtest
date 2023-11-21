import React from "react";

function Modal(props) {
  const handleClose = () => {
    props.onClose?.();
  };

  if(props.confirm === true){

    return (
      <div className="modal-overlay">
        <div className="dim" onClick={handleClose}>
        </div>
        <div className="modal-wrap">
          <div className="modal-body">{props.children}</div>
          {/* 여기부터 */}
          <div className="modal-bottom">
            <div className="btn-block">
              <button className="btn btn-confirm active" onClick={handleClose}>확인</button>
              <button className="btn btn-confirm" onClick={handleClose}>취소</button>
            </div>
          </div>
          {/* 여기까지 조건에 따른 렌더링 */}
          <button className="close" onClick={handleClose}>Close</button>
        </div>
      </div>
    );

  }else{

    return (
      <div className="modal-overlay">
        <div className="dim" onClick={handleClose}>
        </div>
        <div className="modal-wrap">
          <div className="modal-body">{props.children}</div>
          <button className="close" onClick={handleClose}>Close</button>
        </div>
      </div>
    );

  }
}

export default Modal;