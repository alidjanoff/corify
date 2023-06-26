// Router
import { Link } from "react-router-dom";

const ShopCard = ({ data }) => {
  return (
    <div className="shopCard">
      <div className="cardImg">
        <img src="" alt="" />
      </div>
      <div className="carInfo">
        <Link className="carTitle" to={`/car-details/id`}>
          Name
        </Link>
        <p className="carDetails">Details</p>
        <p className="carPrice">$0</p>
      </div>
    </div>
  );
};

export default ShopCard;
