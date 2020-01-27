import React from "react";
import { ReactFlashlight } from "react-flashlight";
import bg from "./bg.jpg";
import './App.css';
 
const style = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: `url(${bg})`,
  backgroundSize: "contain",
  height: "230px",
  width: "300px",
  fontSize: "25px",
  borderRadius: "4px",
  boxShadow: "0 2px 5px -1px rgba(0, 0, 0, 0.3)"
} 
 
function App() {

  const [position, setPosition] = React.useState({x: 0, y: 0});

  React.useState(()=>{
    let id;
    id = setInterval(()=>{
      const point = {x: Math.random() * 300, y: Math.random() * 230}
      setPosition(point);
    }, 2000);

    return ()=>{
      clearInterval(id);
    }
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">

        <span>ReactFlashlight demo by Sickdyd</span>

        <div className="container">
          <span>Use the <span style={{color: "red"}}>mouse</span> to move the light and the <span style={{color: "red"}}>wheel</span> to change its size.</span>
          <ReactFlashlight>
            <div style={style}>
              <span>Hello, I'm a child element.</span>
            </div>
          </ReactFlashlight>
        </div>

        <div className="container">
          <span>This is light is controlled programmatically.</span>
          <ReactFlashlight
            enableMouse={false}
            wheelResize={false}
            showCursor={true}
            moveTo={position}>
            <div style={style}>
              <span>Hello, I'm controlled programmatically.</span>
            </div>
          </ReactFlashlight>
        </div>

        <div className="container">
          <span>This is light is controlled programmatically and by the mouse.</span>
          <ReactFlashlight moveTo={position}>
            <div style={style}>
              <span>Hello, I'm controlled programmatically and by the mouse.</span>
            </div>
          </ReactFlashlight>
        </div>

        <div className="container">
          <span>This is light can move outside of the container.</span>
          <ReactFlashlight contain={false}>
            <div style={style}>
              <span>Hello, I'm controlled programmatically and by the mouse.</span>
            </div>
          </ReactFlashlight>
        </div>

        <span><a href="http://www.freepik.com">Background designed by brgfx / Freepik</a></span>

      </header>
    </div> 
  ); 
}

export default App;