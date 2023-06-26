// Images
import { Link } from "react-router-dom";

// Images
import heroBg from "../../assets/images/bmw.png";

// React icons
import { SlSpeedometer } from "react-icons/sl";

const Hero = () => {
  return (
    <section className="heroSection">
      <div className="row">
        <div className="hero">
          <div className="heroImg">
            <img src={heroBg} alt="bmw" />
          </div>
          <div className="heroInfo">
            <p className="slideInfo">LIMITED EDITION</p>
            <h2 className="slideTitle">BMW X6</h2>
            <p className="slideDetails">
              Cayman <span>S</span>
            </p>
            <p className="price">
              $225 <span>/</span> <span>Month</span>
            </p>
            <p className="priceDetails">
              $0 first payment paid by Bmw up to $225.
            </p>
            <p className="priceDetails">Taxes, title and fees extra. </p>
            <div className="btns">
              <Link className="primaryBtn" to="#">
                LEARN MORE
              </Link>
              <Link className="secondaryBtn" to="#">
                <SlSpeedometer /> TEST DRIVE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
