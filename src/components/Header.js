import { Link } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div className="header">
      <Link className="logo">
        <img
          src={`${process.env.PUBLIC_URL}/img/logo.png`}
          className="logo-img"
          alt="교보문고"
        />
      </Link>
      <div className="searchbox-wrap">
        <input
          type="text"
          id="search-text"
          placeholder="search"
          className="searchbox"
        ></input>
        <div className="searchbox-icon">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
      <div className="header-bt">HOME</div>
    </div>
  );
};
export default Header;
