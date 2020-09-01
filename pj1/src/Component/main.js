import React from 'react';
import { Link } from "react-router-dom"
import '../assets/Main.css'

const  Main = () => {
    return (
       <div>
           <div className="main_menu_box">
                <div className="Western">
                    <span>한식</span>
                    <p>카레라이스</p>
                    <p>쌀밥</p>
                    <p>어묵국</p>
                    <p>비빔만두</p>
                    <p>양송이버섯브로콜리볶음</p>
                    <p>오북지부추무침</p>
                    <p>포기김치</p>
                </div>
                <div className="Western">
                    <span>양식</span>
                    <p>카레라이스</p>
                    <p>쌀밥</p>
                    <p>어묵국</p>
                    <p>비빔만두</p>
                    <p>양송이버섯브로콜리볶음</p>
                    <p>오북지부추무침</p>
                    <p>포기김치</p>
                </div>
                <div className="Western">
                    <span>맛담</span>
                    <p>순두부찌개</p>
                    <p>카레라이스</p>
                    <p>쫄면</p>
                </div>
           </div>
           <div className="btn_box">
               <Link to="/order">
                    <button>주문</button>
               </Link>
               <br></br>
               <button>메뉴 상세</button>
           </div>
       </div>
    )
}

export default Main;