import { useState } from "react";

// Router
import { Link, NavLink } from "react-router-dom";

// Images
import logo from "../assets/images/logo.webp";

// Icons
import {
  FaShoppingCart,
  FaUserCircle,
  FaWindowClose,
  FaSignOutAlt,
} from "react-icons/fa";

const Header = () => {
  // Loal states
  const [cartIsOpen, setCartIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <nav className="navBar">
            <ul className="navList">
              <li className="navItem">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/shop">Shop</NavLink>
              </li>
            </ul>
          </nav>
          <div className="userArea">
            <div className="cart" onClick={() => setCartIsOpen(!cartIsOpen)}>
              <span className="count">0</span>
              <FaShoppingCart />
            </div>
            <button className="logOut">
              LOGOUT
              <FaSignOutAlt />
            </button>
            <Link className="login" to="/login">
              <FaUserCircle />
              <span>LOGIN</span>
            </Link>
          </div>
        </div>
      </div>
      <div className={`cartBox ${cartIsOpen && "isOpen"}`}>
        <div className="cartHead">
          <h2>My Cart</h2>
          <FaWindowClose onClick={() => setCartIsOpen(false)} />
        </div>
        <ul className="cartList">
          <div className="empty">
            <p>Cart is Empty</p>
            <Link to="/shop" onClick={() => setCartIsOpen(false)}>
              Buy new car
            </Link>
          </div>
          <li className="cartItem">
            <div className="carImg">
              <img src="" alt="car-img" />
            </div>
            <div className="carInfo">
              <p className="carTitle">Car name</p>
              <div className="nums">
                <p className="carPrice">Price: 0.00$</p>
                <p className="quantity">Quantity: 1</p>
              </div>
            </div>
            <div className="remove">
              <p>Remove Car</p>
            </div>
          </li>
          <Link to="/cart" onClick={() => setCartIsOpen(false)}>
            View on Cart
          </Link>
        </ul>
      </div>
      <div
        className={`overlay ${cartIsOpen && "isOpen"}`}
        onClick={() => setCartIsOpen(false)}
      ></div>
    </header>
  );
};

export default Header;
