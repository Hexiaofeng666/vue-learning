import logo from './logo.svg';
import './App.css';
import { Collapse,Carousel } from 'antd';
const { Panel } = Collapse;
function onChange(a, b, c) {
  console.log(a, b, c);
}

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const text = `
  今个今个真高兴
`;

function App() {
  return (
    <div className="App">
     <Collapse defaultActiveKey={['1']}>
    <Panel header="我的兄弟" key="1">
      <p>顺溜</p>
      <p>刘德华</p>
      <p>张学友</p>
    </Panel>
    <Panel header="我的朋友" key="2">
      <p>MAX力</p>
      <p>佳佳</p>
    </Panel>
    <Panel header="This is panel header 3" key="3">
      <p>{text}</p>
    </Panel>
  </Collapse>

  <hr />
  <Carousel afterChange={onChange}>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>

    </div>
  );
}

export default App;
