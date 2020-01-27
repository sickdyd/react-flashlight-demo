import React from "react";
import { ReactFlashlight } from "react-flashlight";
import bg from "./bg.jpg";
import './App.css';
 
const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: `url(${bg})`,
  backgroundSize: "contain",
  height: "40vh",
  width: "90vw",
  marginTop: "20px",
  fontSize: "10vmin",
} 
 
function App() {

  const [position, setPosition] = React.useState({x: 0, y: 0});

  React.useState(()=>{
    let id;
    id = setInterval(()=>{
      const point = {x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight}
      setPosition(point);
    }, 2000);

    return ()=>{
      clearInterval(id);
    }
  }, [])
  
  return (
    <div className="App">
      <header className="App-header"> 
        <ReactFlashlight>
          <div style={style}>
            Hello, I'm a child element.
          </div>
        </ReactFlashlight>

        <ReactFlashlight moveTo={position}>
          <div style={style}>
            Hello, I'm controlled programmatically.
          </div>
        </ReactFlashlight>

      </header>
    </div> 
  ); 
}

export default App;