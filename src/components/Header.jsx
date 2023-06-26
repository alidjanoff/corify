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
            <Link className="login" to="/login">
              <FaUserCircle />
              <span>LOG IN</span>
            </Link>
            {/* <button className="logOut">
              LOG OUT
              <FaSignOutAlt />
            </button> */}
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
            <Link to="/shop">Buy new car</Link>
          </div>
          <li className="cartItem">
            <div className="carImg">
              <img src="" alt="" />
            </div>
            <div className="carInfo">
              <p className="carTitle">Title</p>
              <div className="nums">
                <p className="carPrice">Price: 0$</p>
                <p className="quantity">Quantity: 0</p>
              </div>
            </div>
          </li>
          <Link to="/cart">View on Cart</Link>
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
