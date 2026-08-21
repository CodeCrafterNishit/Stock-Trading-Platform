import logo from "../../public/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  const [selectOptions, setSelectOptions] = useState(0);
  const [profileCheck, setProfileCheck] = useState(false);
  const handleSelectOptions = (index) => {
    setSelectOptions(index);
  };
  const handleProfileClick = () => {
    setProfileCheck(!profileCheck);
  };
  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src={logo} style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/"}
              onClick={() => handleSelectOptions(0)}
            >
              <p className={selectOptions === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/orders"}
              onClick={() => handleSelectOptions(1)}
            >
              <p className={selectOptions === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/holdings"}
              onClick={() => handleSelectOptions(2)}
            >
              <p className={selectOptions === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/positions"}
              onClick={() => handleSelectOptions(3)}
            >
              <p className={selectOptions === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/funds"}
              onClick={() => handleSelectOptions(4)}
            >
              <p className={selectOptions === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/apps"}
              onClick={() => handleSelectOptions(5)}
            >
              <p className={selectOptions === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
