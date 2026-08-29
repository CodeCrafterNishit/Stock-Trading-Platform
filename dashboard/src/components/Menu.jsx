import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";

const Menu = () => {
  const [selectOptions, setSelectOptions] = useState(0);
  const [profileCheck, setProfileCheck] = useState(false);
  const navigate = useNavigate();

  const username = localStorage.getItem("username") || "User";

  const handleSelectOptions = (index) => {
    setSelectOptions(index);
  };
  const handleProfileClick = () => {
    setProfileCheck(!profileCheck);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    window.location.href = "http://localhost:5175";
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="/logo.png" alt="Logo" style={{ width: "50px" }} />
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
        <div className="profile-container" style={{ position: "relative" }}>
          <div className="profile" onClick={handleProfileClick}>
            <div className="avatar">{username.slice(0, 2).toUpperCase()}</div>
            <p className="username">{username}</p>
          </div>

          {profileCheck && (
            <div className="profile-dropdown">
              <p className="dropdown-username">Hii, {username}</p>
              <p className="dropdown-logout" onClick={handleLogout}>
                Logout
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
