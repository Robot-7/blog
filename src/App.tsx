import { useState } from "react";
import logo from "./logo.svg";
import "./App.less";
import Header from "./template/Header";
import Footer from "./template/Footer";
import Content from "./template/Content";
import "./styles/tailwind.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      className="App"
      style={{
        background: "url(./imgs/home/bg1.jpg)",
        backgroundSize: "cover",
      }}
    >
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
