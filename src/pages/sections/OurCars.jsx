// Fake DB
import carsDb from "../../db/carsDb";

// Components
import CarCard from "../../components/CarCard";

const OurCars = () => {
  return (
    <section className="ourCarsSection">
      <div className="container">
        <div className="row">
          <div className="ourCarsHead">
            <h2>OUR CARS</h2>
            <ul className="categoryList">
              <li className="categoryItem active">All</li>
              <li className="categoryItem">Hatchback</li>
              <li className="categoryItem">Sedan</li>
              <li className="categoryItem">Coupe</li>
              <li className="categoryItem">Pickup Truck</li>
              <li className="categoryItem">Sport Cars</li>
            </ul>
          </div>
          <div className="carsBox">
            {carsDb.map((item) => (
              <CarCard data={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCars;
