import React from 'react';
import '../assets/Menu.css'

const Menu = () => {
    return (
        <div>
          <div>
            <span> 맛담 </span>
            <div>
                2020년 8월 29일
            </div>
          </div>
          <div className="basic_box">
            <span>기본메뉴</span>
            <p>라면: 2,400</p>
            <p>김밥: 1,800</p>
            <p>참치김밥: 2,900</p>
            <p>맛담김밥: 2,500</p>
            <p>떡볶이: 2,400</p>
            <p>꼬치어묵: 600</p>
            <p>삶은계란: 500</p>
            <p>왕만두: 900</p>
          </div>
          <div className="menu_box">
            <table style={tableStyle}> 
                <tbody> 
                    <tr align="center"> 
                        <td width="50">구분</td> 
                        <td width="100">월</td> 
                        <td width="100">화</td> 
                        <td width="100">수</td> 
                        <td width="100">목</td> 
                        <td width="100">금</td> 
                    </tr> 
                    <tr align="center"> 
                        <td width="50">찌개류</td> 
                        <td width="100">김치찌개(라면)</td> 
                        <td width="100">욱개장</td> 
                        <td width="100">순두부찌개</td> 
                        <td width="100">황태콩나물해장국</td> 
                        <td width="100">부대전골(라면)</td> 
                    </tr>
                    <tr align="center"> 
                        <td width="50">덮밥&볶음밥류</td> 
                        <td width="100">제육덮밥</td> 
                        <td width="100">해물볶음밥</td> 
                        <td width="100">카레라이스</td> 
                        <td width="100">김치볶음밥</td> 
                        <td width="100">소고기볶음밥</td> 
                    </tr>
                    <tr align="center"> 
                        <td width="50">면류</td> 
                        <td width="100">꼬치우동</td> 
                        <td width="100">냉면</td> 
                        <td width="100">쫄면</td> 
                        <td width="100">간짜장</td> 
                        <td width="100">콩국수</td> 
                    </tr>
                </tbody> 
            </table>

          </div>
        </div>
    )
}
const tableStyle = {
    border: '1px'
}
export default Menu;