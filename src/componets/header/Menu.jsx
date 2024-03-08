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
    e.stopPropagation();
    setIsLowRankListVisible((prevState) => !prevState);
  };

  const [isLowRankListVisible02, setIsLowRankListVisible02] = useState(true);

  const handleLowRankListClick02 = (e) => {
    e.stopPropagation();
    setIsLowRankListVisible02((prevState) => !prevState);
  };

  const middleRankListStyle = {
    maxHeight: isMiddleRankListVisible ? "500px" : "0",
    overflow: "hidden",
    //transition: "max-height 0.2s ease-in-out",
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const [isBookmarkOn, setIsBookmarkOn] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setIsBookmarkOn(!isBookmarkOn);
  };

  const [isBookmarkOn02, setIsBookmarkOn02] = useState(false);

  const handleClick02 = (e) => {
    e.stopPropagation();
    setIsBookmarkOn02(!isBookmarkOn02);
  };
  return (
    <>
      <nav className="header__menu">
        <ul className="highest-rank-lsit">
          <li>
            <div
              className="highest-rank-lsit__title"
              onClick={handleTitleClick}
            >
              <div
                className="triangle triangle-gray"
                style={{
                  transform: isMiddleRankListVisible
                    ? "none"
                    : "rotate(270deg)",
                }}
              ></div>
              <span>내 팀즈 그룹</span>

              <ul className="middle-rank-list" style={middleRankListStyle}>
                <li className="">
                  <div
                    className="middle-rank-list__title"
                    onClick={handleLowRankListClick}
                  >
                    <div
                      className="triangle triangle-down line_up"
                      style={{
                        transform: isLowRankListVisible
                          ? "rotate(270deg)"
                          : "none",
                      }}
                    ></div>
                    <div className="team-photo">{headerMenus[0].title}</div>
                    <div className="team-name">{headerMenus[0].title}</div>
                    <div
                      className={
                        isBookmarkOn ? "left_bookmark active" : "left_bookmark"
                      }
                      onClick={handleClick}
                    ></div>
                  </div>

                  <ul
                    className="low-rank-list"
                    style={{
                      display: isLowRankListVisible ? "block" : "none",
                    }}
                  >
                    <li onClick={stopPropagation}>
                      <Link>{headerMenus[0].submenu[0]}</Link>
                    </li>
                    <li onClick={stopPropagation}>
                      <Link>{headerMenus[0].submenu[1]}</Link>
                    </li>
                    <li onClick={stopPropagation}>
                      <Link>{headerMenus[0].submenu[2]}</Link>
                    </li>
                  </ul>
                </li>

                <li className="">
                  <div
                    className="middle-rank-list__title"
                    onClick={handleLowRankListClick02}
                  >
                    <div
                      className="triangle triangle-down line_up"
                      style={{
                        transform: isLowRankListVisible02
                          ? "rotate(270deg)"
                          : "none",
                      }}
                    ></div>
                    <div className="team-photo">{headerMenus[1].title}</div>
                    <div className="team-name">{headerMenus[1].title}</div>
                    <div
                      className={
                        isBookmarkOn02
                          ? "left_bookmark active"
                          : "left_bookmark"
                      }
                      onClick={handleClick02}
                    ></div>
                  </div>

                  <ul
                    className="low-rank-list"
                    style={{
                      display: isLowRankListVisible02 ? "block" : "none",
                    }}
                  >
                    <li onClick={stopPropagation}>
                      <Link>{headerMenus[1].submenu[0]}</Link>
                    </li>
                    <li onClick={stopPropagation}>
                      <Link>{headerMenus[1].submenu[1]}</Link>
                    </li>
                    <li onClick={stopPropagation}>
                      <Link>{headerMenus[1].submenu[2]}</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
