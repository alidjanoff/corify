import ShopCard from "../components/ShopCard";

const Shop = () => {
  return (
    <section className="shop">
      {/* {loading && <Loader />} */}
      <div className="container">
        <div className="row">
          <h2 className="title">Buy Car</h2>
          <div className="carsBox">
            <ShopCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
