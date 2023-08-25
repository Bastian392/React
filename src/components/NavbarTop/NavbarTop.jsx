import ModoNoche from "../ModoNoche/ModoNoche";
import { CartWidget } from "../CarroDeCompras/CartWidget";
import React from "react";
import {NavLink} from "react-router-dom";
import "./NavbarTop.css";
import logo from "./logo.svg";

const NavbarTop = () => {
  return (
  
      <nav>
        <NavLink to="/" className="logo">
        <img src={logo} alt="" />
        </NavLink>
        <ul>
          <li>
              <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
              <NavLink to="/productos/">Productos</NavLink>
          </li>
          <li>
              <NavLink to="/checkout">Comprar</NavLink>
          </li>
          <li>
            <ModoNoche></ModoNoche>
          </li>
          <li>
            <CartWidget></CartWidget>
          </li>
        </ul>
      </nav>
  );
};

export default NavbarTop;
