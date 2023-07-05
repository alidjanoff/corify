const CarDetails = () => {
  return (
    <section className="carDetails">
      <div className="container">
        <div className="row">
          <div className="leftSide">
            <img src="" alt="car-img" />
          </div>
          <div className="rightSide">
            <h2 className="carTitle">Car name</h2>
            <p className="carDetails">Car details</p>
            <p className="carPrice">$0.00</p>
            <button className="addBtn">ADD TO CARD</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetails;
