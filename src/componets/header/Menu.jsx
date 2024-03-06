import React, { useState } from "react";

import { headerMenus, searchKeyword } from "../../data/header";
import { Link, useLocation } from "react-router-dom";

export const Menu = () => {
  const location = useLocation();

  const [isMiddleRankListVisible, setIsMiddleRankListVisible] = useState(true);

  const handleTitleClick = (e) => {
    e.stopPropagation();
    setIsMiddleRankListVisible((prevState) => !prevState);
  };

  const [isLowRankListVisible, setIsLowRankListVisible] = useState(true);

  const handleLowRankListClick = (e) => {
    e.stopPropagation(); // Stop propagation to prevent toggling the middle-rank-list when clicking on low-rank-list items
    setIsLowRankListVisible((prevState) => !prevState);
  };

  const middleRankListStyle = {
    maxHeight: isMiddleRankListVisible ? "500px" : "0",
    overflow: "hidden",
    transition: "max-height 0.2s ease-in-out", // Adjust speed here
  };

  const LowRankListStyle = {
    maxHeight: isLowRankListVisible ? "500px" : "0",
    overflow: "hidden",
    transition: "max-height 0.3s ease-in-out", // Adjust speed here
  };

  return (
    <>
      <nav className="header__menu">
        <ul className="highest-rank-lsit">
          <li>
            <div className="highest-rank-lsit__title">
              <div className="triangle triangle-gray"></div>
              <span onClick={handleTitleClick}>내 팀즈 그룹</span>
              {headerMenus.map((menu, key) => (
                <ul
                  className="middle-rank-list"
                  key={key}
                  style={middleRankListStyle}
                >
                  <li
                    className={location.pathname === menu.src ? "actvie" : ""}
                  >
                    <div
                      className="middle-rank-list__title"
                      onClick={handleLowRankListClick}
                    >
                      <div className="triangle triangle-down line_up"></div>
                      <div className="team-photo">{menu.title}</div>
                      <div className="team-name">{menu.title}</div>
                      <div className="left_bookmark"></div>
                    </div>

                    <ul
                      className="low-rank-list"
                      style={{
                        display: isLowRankListVisible ? "block" : "none",
                      }}
                    >
                      {menu.submenu.map((subMenu, subKey) => (
                        <li key={subKey}>
                          <Link>{subMenu}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              ))}
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
