const CarCard = ({ data }) => {
  return (
    <div className="carCard">
      <div className="cardImg">
        <img src={data.carImg} alt={data.title} />
      </div>
      <div className="carInfo">
        <p className="carType">{data.category}</p>
        <h4 className="carTitle">{data.title}</h4>
        <p className="carPrice">${data.price}</p>
      </div>
    </div>
  );
};

export default CarCard;
