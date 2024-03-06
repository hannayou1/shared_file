import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import plus from "../../assets/img/icon/plus.png";
import upload from "../../assets/img/icon/upload.svg";
import refresh from "../../assets/img/icon/refresh.svg";
import close from "../../assets/img/icon/close.png";
import filter from "../../assets/img/icon/filter.svg";
import download from "../../assets/img/icon/download.png";
import deleteIcon from "../../assets/img/icon/delete.svg";
import modifyIcon from "../../assets/img/icon/modify.svg";
import moveIcon from "../../assets/img/icon/gnb_icon13.png";
import copyIcon from "../../assets/img/icon/gnb_icon07.png";
import folderIcon from "../../assets/img/icon/folder.svg";

const headerNav = [
  {
    icon: plus,
    title: "새로 만들기",
    id: "newFile",
  },
  {
    icon: upload,
    title: "업로드",
  },
  {
    icon: refresh,
    title: "새로 고침",
  },
  {
    icon: download,
    title: "다운로드",
  },
  {
    icon: deleteIcon,
    title: "삭제",
  },
  {
    icon: modifyIcon,
    title: "이름 바꾸기",
  },
  {
    icon: moveIcon,
    title: "이동",
  },
  {
    icon: copyIcon,
    title: "복사",
  },
];

export const Search = ({ toggleHeader, toggleFilter }) => {
  const handleClick = () => {
    // 헤더 표시를 토글하는 함수 호출
    toggleHeader();
  };

  const [searchKeyword, setSearchKeyword] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    console.log(searchKeyword);
    if (searchKeyword) {
      navigate(`/search/${searchKeyword}`);
      setSearchKeyword("");
    }
  };

  // 토글 메뉴를 위해 변수 선언
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow((prevShow) => !prevShow);
  };

  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleItemClick = (navId) => {
    if (navId === "newFile") {
      setPopupOpen(!isPopupOpen);
      console.log(navId);
    }
  };

  return (
    <div id="search" className="search__wrap">
      <div className="search__inner">
        <div className="header_left">
          <div
            class="btn-text btn-text__ham"
            id="publishing_toggleMenu"
            onClick={handleClick}
          ></div>
          <nav
            className={`header__nav ${show ? "show" : ""}`}
            role="navigation"
            aria-label="메인 메뉴"
          >
            {" "}
            {/* 이 값이 true면 show 넣어주고 아니면 아무것도 넣지 마라*/}
            <ul className="header_ul">
              {/* key 는 index를 의미함 */}
              {headerNav.map((nav, key) => (
                <li key={key}>
                  <Link
                    to="/"
                    className="title_box"
                    onClick={() => handleItemClick(nav.id)}
                  >
                    <img src={nav.icon} className="title_icon" />
                    <span>{nav.title}</span>
                  </Link>
                </li>
              ))}

              <div
                class="popup-opne"
                id="newFileCreateMenu"
                style={{ display: isPopupOpen ? "block" : "none" }}
              >
                <ul>
                  <li className="folder_li" id="btn-new-folder">
                    <img src={folderIcon} className="pop_icon" alt="" />
                    <span>폴더</span>
                  </li>
                </ul>
              </div>
            </ul>
          </nav>
        </div>
        <div className="header_right">
          <div class="btn-text select_wrap">
            <div className="title_box">
              <img src={close} className="title_icon" />
              <span className="select_text">
                <em>1</em>개 선택됨
              </span>
            </div>
            <div
              className="title_box"
              id="publishingFilterBtn"
              onClick={toggleFilter}
            >
              <img src={filter} className="title_icon mr_5 ml_5" />
            </div>
          </div>

          <div className="btn-text search_wrap">
            <label htmlFor="searchInput">
              <span className="ir">검색</span>
            </label>
            <input
              type="search"
              name="searchInput"
              id="searchInput"
              autoComplete="off"
              className="search__input"
              placeholder="검색어를 입력해주세요!"
              onChange={(e) => setSearchKeyword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />
          </div>
          <div class="search_wrap_mobile">
            <label htmlFor="searchInput">
              <span className="ir">검색</span>
            </label>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
