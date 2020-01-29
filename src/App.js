import React from "react";
import { ReactFlashlight } from "react-flashlight";
import bg from "./bg.jpg";
import './App.css';
 
const style = {
  borderRadius: "4px",
  boxShadow: "0 2px 5px -1px rgba(0, 0, 0, 0.3)",
} 
 
function App() {

  const [position, setPosition] = React.useState({x: 0, y: 0});
  const [enabled, setEnabled] = React.useState(true);

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

        <span style={{color: "red", fontSize: "calc(2vmin + 20px)"}}>ReactFlashlight demo by Sickdyd</span>

        <div className="container">
          <div className="menu">
            <ReactFlashlight showCursor>
              <div className="btn">Home</div>
              <div className="btn">Projects</div>
              <div className="btn">Contacts</div>
              <div className="btn">Something</div>
            </ReactFlashlight>
          </div>
        </div>

        <div className="container">       
          <span>Click on the image below to toggle the lights.</span>
          <ReactFlashlight enabled={enabled}>
            <div style={style} onClick={()=>setEnabled(!enabled)}>
              <img style={{width: "80vw", height: "auto"}} src={bg} alt="bg" />
            </div>
          </ReactFlashlight>
        </div>

        <div className="container">
          <span>This is light is controlled programmatically.</span>
          <ReactFlashlight
            enableMouse={false}
            showCursor={true}
            moveTo={position}
            >
            <div style={style}>
              <img style={{width: "80vw", height: "auto"}} src={bg} alt="bg" />
            </div>
          </ReactFlashlight>
        </div>

        <div className="container">
          <span>This is light is controlled programmatically and by the mouse.</span>
          <ReactFlashlight moveTo={position}>
            <div style={style}>
              <img style={{width: "80vw", height: "auto"}} src={bg} alt="bg" />
            </div>
          </ReactFlashlight>
        </div>

        <span><a href="http://www.freepik.com">Image designed by brgfx / Freepik</a></span>

      </header>
    </div> 
  ); 
}

export default App;