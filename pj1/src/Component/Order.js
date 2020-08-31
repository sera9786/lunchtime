import React from 'react';
import '../assets/Order.css'


const Order = () => {
  const name = "꼬치우동"
  const price = "4,700";
    return (
        <div>
            <h1>
            주문
            </h1>

            <div className="order-box">
              <div className="total">
                total : 10,000원
              </div>
            </div>

          <div className="menubox">
            <label>찌개류</label>
            <div className="btnbox">
              <button>추가하기</button>
              <button>상세보기</button>
            </div>
          </div>
          <div className="menubox">
            <label>덮밥&볶음밥류</label>
            <div className="btnbox">
              <button>추가하기</button>
              <button>상세보기</button>
            </div>
          </div>
          <div className="menubox">
            <label>면류</label>
            <div className="btnbox">
              <button>추가하기</button>
              <button>상세보기</button>
            </div>
          </div>
        </div>   
    )
}

export default Order;