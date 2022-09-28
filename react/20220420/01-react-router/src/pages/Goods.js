import React from 'react'
import { Link,Outlet } from "react-router-dom";


class Goods extends React.Component {
  render() {
    return (
      <div>
          <h1>商品</h1>
          <Link to={'/goods/spring/' + '123'}>春季产品</Link>
          <Link to='/goods/summer'>夏季产品</Link>
          <div>
          <Outlet />
          </div>
      </div>
    )
  }
}
export default Goods