import React from 'react';
import Navbar from "reactstrap/lib/Navbar";
import NavbarBrand from "reactstrap/lib/NavbarBrand";
import Menu from "./components/MenuComponent";

function App() {
  return (
    <div>
      <Navbar dark color= "primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
        <Menu/>
    </div>
  );
}

export default App;
