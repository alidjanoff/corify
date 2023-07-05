// Router
import { Link } from "react-router-dom";

const ShopCard = () => {
  return (
    <div className="shopCard">
      <div className="cardImg">
        <img src="" alt="car-img" />
      </div>
      <div className="carInfo">
        <Link className="carTitle" to="/car-details">
          Car name
        </Link>
        <p className="carDetails">Details</p>
        <p className="carPrice">$ 0.00</p>
      </div>
    </div>
  );
};

export default ShopCard;
