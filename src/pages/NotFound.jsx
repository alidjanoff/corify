import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="notFound">
      <div className="container">
        <div className="row">
          <h2>
            Error <span className="four">4</span>
            <span className="zero">0</span>
            <span className="four">4</span>
          </h2>
          <p>Page Not Found</p>
          <Link to="/">Go To Home Page</Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
