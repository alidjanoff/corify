// Router
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="register">
      <div className="container">
        <div className="row">
          <h2>Register Page</h2>
          <div className="login-box">
            <form>
              <div className="user-box">
                <input type="text" name="firstName" />
                <label>First Name</label>
              </div>
              <div className="user-box">
                <input type="text" name="lastName" />
                <label>Last Name</label>
              </div>
              <div className="user-box">
                <input type="email" name="email" />
                <label>Email</label>
              </div>
              <div className="user-box">
                <input type="password" name="password" />
                <label>Password</label>
              </div>
              <div className="user-box">
                <input type="password" name="password" />
                <label>Re-Password</label>
              </div>
              <div className="user-box">
                <input type="file" name="userImage" />
                <label>User Image</label>
              </div>
              <div>
                <button>
                  Register
                  <span></span>
                </button>
              </div>
            </form>
            <p className="quest">
              Have an account ? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
