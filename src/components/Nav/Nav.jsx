import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <section className="tab-container">
      <Link to="/" id="add-new-person-btn">
        Add New person
      </Link>
      <Link to="/info" id="retrieve-info-btn">
        Retrieve Information
      </Link>
    </section>
  );
};

export default Nav;
