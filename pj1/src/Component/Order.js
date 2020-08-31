import React, { Component } from 'react';
import '../assets/Order.css'

class counter extends Component {
  state = {
    number: 0
  }
  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1
    })
  }
  handleDecrese = () => {
    this.setState({
      number: this.state.number - 1
    })
  }
  render(){
    const {number} = this.state
    const {handleIncrease, handleDecrese} = this
    return(
      <div>
        <label>{number}개</label>
        <div className="btnbox">
          <button onClick={handleIncrease}>+</button>
          <button onClick={handleDecrese}>-</button>
        </div>
      </div>
    )
  }
}

const Order = () => {
    return (
        <div>
            <h1>
            주문
            </h1>

            <div className="order-box">
              <div className="smallorderbox">
                <label>찌개류</label>
                <counter></counter>
              </div>
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