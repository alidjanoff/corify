const CarDetails = () => {
  return (
    <section className="carDetails">
      <div className="container">
        <div className="row">
          <div className="leftSide">{/* <img src="" alt="" /> */}</div>
          <div className="rightSide">
            <h2 className="carTitle">Name</h2>
            <p className="carDetails">Details</p>
            <p className="carPrice">$0</p>
            <button className="addBtn">ADD TO CARD</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetails;
