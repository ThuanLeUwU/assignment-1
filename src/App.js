import React, { Component } from "react";
import "./App.css";


import Main from "./components/MainComponents";
import { BrowserRouter } from "react-router-dom";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/MenuComponent";
class App extends Component {
   
   render() {
      return (
         <BrowserRouter>
            <div className="App">
               <Main />
            </div>
         </BrowserRouter>
      );
   }
}

export default App;
