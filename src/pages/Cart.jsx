import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <section className="cartDetails">
      <div className="container">
        <div className="row">
          <h2 className="title">My cart</h2>
          <ul className="cartList">
            <li className="cartItem">
              <p className="lineNumber">1</p>
              <div className="carImg">
                <img src="" alt="car-img" />
              </div>
              <h4 className="carName">
                <Link to="/car-details">Car name</Link>
              </h4>
              <p className="carDetails">Car details</p>
              <div className="counter">
                <span className="counterBtn red">-</span>
                <span>1</span>
                <span className="counterBtn green">+</span>
              </div>
              <span className="carPrice">$0.00</span>
              <span className="removeCar">
                X<span className="emoji">🥺</span>
              </span>
            </li>
          </ul>
          <div className="cartInfo">
            <h3>
              Total price: <span>$0.00</span>
            </h3>
            <p className="clear">Clear cart</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
