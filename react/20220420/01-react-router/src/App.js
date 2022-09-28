import React from 'react'
import { Link,Outlet } from "react-router-dom";



class App extends React.Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {

  //   }

  //   console.log(props);
    

  // }
  
  componentDidMount(){
    if(window.location.href == 'http://localhost:3000/'){
      window.location.href = 'http://localhost:3000/home'
    }
  }
  
  render() {

   

    return (
      <div>
        
      <h1>路由跳转</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/home">首页</Link> |{" "}
        <Link to="/goods">商品</Link> |{" "}
        <Link to="/car">购物车</Link> |{" "}
        <Link to="/setting">设置</Link> |{" "}
      </nav>
      <Outlet />
    </div>
    )
  }
}








export default App