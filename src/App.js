// src/App.js
import './App.css';
import logo from "./images/ih-logo.png";
import menu from "./images/menu.png"
import tool from "./images/tool.png"
import lap from "./images/lap.png"
import mac from "./images/mac.png"
import code from "./images/code.png"

function App() {
  return (
  <>
  <div class="header">
    <header class="img-header">
      <p><img src={logo} alt="ih-logo"/></p>
      <p><img src={menu} alt="menu"/></p>
    </header>
  </div>
  <body>
    <div class="intro">
    <h1>Say Hello to <br/> ReactJS</h1>
      <p>You will learn to use the most popular forntend library,</p>
      <p>and become a super Ninja developer.</p>
      <button>Awesome!</button>
      </div>
    <br/>
    
    <span class="info">
    <span>
      <img src={tool} alt="tool"/>
      <h3>Declarative</h3>
      <p>React makes it painless to createinteractive UI's.</p>
    </span>

    <span>
    <img src={lap} alt="lap"/>
    <h3>Components</h3>
    <p>Build encapsulated components that manage their state.</p>
    </span>

    <span>
    <img src={mac} alt="mac"/>
    <h3>Single Way</h3>
    <p>A way of inmutable values are passed to the component's.</p>
    </span>

    <span>
    <img src={code} alt="code"/>
    <h3>JSX</h3>
    <p>Statically typed, designed to run on modern browsers.</p>
    </span>
    </span>
  </body>

  </>
  );
}

export default App;




