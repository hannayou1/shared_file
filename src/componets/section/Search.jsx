import React, { useRef, useState } from "react";
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
import tabIcon from "../../assets/img/icon/board_01.png";
import file_excel from "../../assets/img/icon/xlsx.svg";
import { FaAngleDown } from "react-icons/fa6";
import teamsIcon from "../../assets/img/icon/teams-icon.png";
import { IoSettingsOutline } from "react-icons/io5";

const headerNav = [
  {
    id: "newFile",
    icon: plus,
    title: "새로 만들기",
  },
  {
    id: "uploadFile",
    icon: upload,
    title: "업로드",
  },
  {
    id: "refreshFile",
    icon: refresh,
    title: "새로 고침",
  },
  {
    id: "downloadFile",
    icon: download,
    title: "다운로드",
  },
  {
    id: "deleteFile",
    icon: deleteIcon,
    title: "삭제",
  },
  {
    id: "modifyFile",
    icon: modifyIcon,
    title: "이름 바꾸기",
  },
  {
    id: "moveFile",
    icon: moveIcon,
    title: "이동",
  },
  {
    id: "copyFile",
    icon: copyIcon,
    title: "복사",
  },
  {
    id: "tabFile",
    icon: tabIcon,
    title: "탭으로 설정",
  },
  {
    id: "excelFile",
    icon: file_excel,
    title: "편집",
  },
];

export const Search = ({
  toggleHeader,
  toggleFilter,
  isSearchHeaderVisible,
}) => {
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

  const handleItemClick = () => {
    setPopupOpen(!isPopupOpen);
  };

  const [isPopupOpen02, setPopupOpen02] = useState(false);
  const handleItemClick02 = () => {
    setPopupOpen02(!isPopupOpen02);
  };

  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();

  const [modalOpen02, setModalOpen02] = useState(false);

  const [modalDelete, setModalDelete] = useState(false);
  const [modalModify, setModalModify] = useState(false);
  const [modalMove, setModalMove] = useState(false);

  return (
    <>
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
              <ul
                className={
                  isSearchHeaderVisible ? "header_ul dp_b" : "header_ul dp_n"
                }
              >
                <li>
                  <Link
                    to="/"
                    className="title_box"
                    onClick={() => handleItemClick()}
                  >
                    <img src={headerNav[0].icon} className="title_icon" />
                    <span>{headerNav[0].title}</span>
                  </Link>
                </li>

                <div
                  class="popup-opne"
                  id="newFileCreateMenu"
                  style={{ display: isPopupOpen ? "block" : "none" }}
                >
                  <ul>
                    <li
                      className="folder_li"
                      id="btn-new-folder"
                      onClick={() => setModalOpen(true)}
                    >
                      <img src={folderIcon} className="pop_icon" alt="" />
                      <span>폴더</span>
                    </li>
                  </ul>
                </div>

                <li>
                  <Link to="/" className="title_box">
                    <img src={headerNav[1].icon} className="title_icon" />
                    <span>{headerNav[1].title}</span>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="title_box">
                    <img src={headerNav[2].icon} className="title_icon" />
                    <span>{headerNav[2].title}</span>
                  </Link>
                </li>
              </ul>
              <ul
                className={
                  isSearchHeaderVisible ? "header_ul dp_n" : "header_ul dp_b"
                }
              >
                <li>
                  <Link
                    to="/"
                    className="title_box"
                    onClick={() => handleItemClick02()}
                  >
                    <img src={headerNav[9].icon} className="title_icon" />
                    <span>{headerNav[9].title}</span>
                    <FaAngleDown className="arr_icon" />
                  </Link>
                </li>
                <div
                  class="popup-opne"
                  id=""
                  style={{ display: isPopupOpen02 ? "block" : "none" }}
                >
                  <ul>
                    <li className="folder_li" id="btn-new-folder">
                      <img src={teamsIcon} className="pop_icon" alt="" />
                      <span>Teams에서 편집(기본값)</span>
                    </li>
                    <li className="folder_li" id="btn-new-folder">
                      <img src={file_excel} className="pop_icon" alt="" />
                      <span>웹 브라우저에서 편집</span>
                    </li>
                    <li
                      class="folder_li set-nomal btn-default-change"
                      id=""
                      onClick={() => setModalOpen02(true)}
                    >
                      <IoSettingsOutline class="pop_icon small" />
                      <span class="btn-default-edit-option">기본값 변경</span>
                    </li>
                  </ul>
                </div>
                <li>
                  <Link to="/" className="title_box">
                    <img src={headerNav[3].icon} className="title_icon" />
                    <span>{headerNav[3].title}</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/"
                    className="title_box"
                    onClick={() => setModalDelete(true)}
                  >
                    <img src={headerNav[4].icon} className="title_icon" />
                    <span>{headerNav[4].title}</span>
                  </Link>
                </li>
                <li onClick={() => setModalModify(true)}>
                  <Link to="/" className="title_box">
                    <img src={headerNav[5].icon} className="title_icon" />
                    <span>{headerNav[5].title}</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="title_box"
                    onClick={() => setModalMove(true)}
                  >
                    <img src={headerNav[6].icon} className="title_icon" />
                    <span>{headerNav[6].title}</span>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="title_box">
                    <img src={headerNav[7].icon} className="title_icon" />
                    <span>{headerNav[7].title}</span>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="title_box">
                    <img src={headerNav[8].icon} className="title_icon" />
                    <span>{headerNav[8].title}</span>
                  </Link>
                </li>
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

      {/* 새로 만들기 팝업 */}
      {modalOpen && (
        <div
          className={"modal-container"}
          ref={modalBackground}
          onClick={(e) => {
            if (e.target === modalBackground.current) {
              setModalOpen(false);
            }
          }}
        >
          <div className={"modal-content"}>
            <div class="header">
              <div class="title">폴더</div>
              <a
                href="javascript:void(0)"
                class="btn-close new-folerOrFile-modal"
                onClick={() => setModalOpen(false)}
              >
                {" "}
                X{" "}
              </a>
            </div>
            <div class="main">
              <div class="input-box">
                <input
                  type="text"
                  name=""
                  id="newNameTextBox"
                  class="folder-name"
                  placeholder="새 이름을 입력하세요."
                />
                <span class="folder-extension"></span>
              </div>
              <div class="box-right">
                <a class="btn_blue2 btn-make-folder btn-basic">만들기</a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 기본값 변경 팝업 */}
      {modalOpen02 && (
        <div
          className={"modal-container"}
          ref={modalBackground}
          onClick={(e) => {
            if (e.target === modalBackground.current) {
              setModalOpen02(false);
            }
          }}
        >
          <div className={"modal-content w400"}>
            <div class="header">
              <div class="title">기본값 변경</div>
              <a
                href="javascript:void(0)"
                class="btn-close new-folerOrFile-modal"
                onClick={() => setModalOpen02(false)}
              >
                {" "}
                X{" "}
              </a>
            </div>

            <div class="main">
              <div class="sub-exp" id="defaultDialogInfo">
                Word, PowerPoint 및 Excel등의 Office 파일을 항상 다음 위치에서
                편집
              </div>
              <label for="set_check001">
                <input
                  type="radio"
                  class="defaultValueSetting-options"
                  name="set_check"
                  id="set_check001"
                  value="teams"
                />
                <span class="chk-box"></span>
                <span class="chk-box-text" id="btn-selectTeams">
                  Teams
                </span>
              </label>
              <label for="set_check03">
                <input
                  type="radio"
                  class="defaultValueSetting-options"
                  name="set_check"
                  id="set_check03"
                  value="web"
                />
                <span class="chk-box"></span>
                <span class="chk-box-text" id="btn-selectBrowser">
                  브라우저
                </span>
              </label>

              <div class="box-right">
                <a
                  class="btn-white btn-default-close"
                  onClick={() => setModalOpen02(false)}
                >
                  취소
                </a>
                <a class="btn-basic btn-defaultsetting">저장</a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 삭제 팝업 */}
      {modalDelete && (
        <div
          className={"modal-container"}
          ref={modalBackground}
          onClick={(e) => {
            if (e.target === modalBackground.current) {
              setModalDelete(false);
            }
          }}
        >
          <div className={"modal-content w400"}>
            <div class="header">
              <div class="title">삭제하시겠습니까?</div>
              <a
                href="javascript:void(0)"
                class="btn-close new-folerOrFile-modal"
                onClick={() => setModalDelete(false)}
              >
                {" "}
                X{" "}
              </a>
            </div>

            <div class="main">
              <div class="sub-exp">해당 항목을 사이트 휴지통으로 보낼까요?</div>

              <div class="box-right">
                <a
                  class="btn-white btn-default-close"
                  onClick={() => setModalDelete(false)}
                >
                  취소
                </a>
                <a class="btn-basic btn-defaultsetting">삭제</a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 이름바꾸기 팝업 */}
      {modalModify && (
        <div
          className={"modal-container"}
          ref={modalBackground}
          onClick={(e) => {
            if (e.target === modalBackground.current) {
              setModalModify(false);
            }
          }}
        >
          <div className={"modal-content w400"}>
            <div class="header">
              <div class="title">이름 바꾸기</div>
              <a
                href="javascript:void(0)"
                class="btn-close new-folerOrFile-modal"
                onClick={() => setModalModify(false)}
              >
                {" "}
                X{" "}
              </a>
            </div>

            <div class="main">
              <div class="input-box">
                <input
                  type="text"
                  name=""
                  id="reNameTextBox"
                  class="folder-rename"
                  placeholder="새 이름을 입력하세요."
                />
                <span class="folder-rename-extension" id="reNameFileExt">
                  .xlsx
                </span>
              </div>
              <div class="box-right">
                <a
                  class="btn-white btn-default-close"
                  onClick={() => setModalModify(false)}
                >
                  취소
                </a>
                <a class="btn-basic btn-defaultsetting">저장</a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 파일이동 팝업 */}
      {modalMove && (
        <div
          className={"modal-container"}
          ref={modalBackground}
          onClick={(e) => {
            if (e.target === modalBackground.current) {
              setModalMove(false);
            }
          }}
        >
          <div className={"modal-content w800"}>
            <div class="ts-modal-dialog-header">
              <div class="title">파일 이동</div>
              <div class="pos">
                <span id="txt-file-source">현재 파일 위치 : </span>
                <span>
                  <a class="currentFilePath">전사메일 &gt; 일반</a>
                </span>
              </div>
            </div>
            <div class="ts-modal-dialog-content">
              <div class="files-navigation">
                <ul>
                  <li class="teamOrChannelMoveTab">
                    <div class="file-icon teams-icon"></div>
                    <span id="btn-teamsChannel-search">내 Teams 그룹</span>
                  </li>
                </ul>
              </div>
              <div class="sharepoint-files-list">
                <div class="header">
                  <div class="icon-box"></div>
                  <div class="route">
                    <a href="javascript:void(0)" class="route-file-root">
                      <div class="file-icon teams-icon icon-teams-image"></div>
                    </a>

                    <span
                      id="file-channel-name"
                      onclick="onChangedTeamChannels(this);"
                    >
                      전사메일 <div class="clamp"></div>{" "}
                    </span>
                    <span
                      id="file-channel-name"
                      onclick="onTopRootLinkMove(this, 'teamChannelType');"
                    >
                      일반
                    </span>
                  </div>
                </div>
                <div class="ts-files-table-container exist-fileList">
                  <table>
                    <thead>
                      <tr class="modal-thead-list">
                        <td id="modal-thead-list-type">
                          <span></span>
                        </td>
                        <td id="modal-thead-list-name">
                          <span>이름</span>
                        </td>
                        <td id="modal-thead-list-filezise">
                          <span>크기</span>
                        </td>
                        <td id="modal-thead-list-modate">
                          <span>수정된 날짜</span>
                        </td>
                        <td id="modal-thead-list-moduser">
                          <span>수정한 사람</span>
                        </td>
                      </tr>
                    </thead>
                    <tbody class="modal-tbodyList-file">
                      <tr class="" data-id="59b8ae97f8f7">
                        <td>
                          <div class="file-icon folder"></div>
                        </td>
                        <td>
                          비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더
                        </td>
                        <td>24.67KB</td>
                        <td>2020년 11월 25일</td>
                        <td className="text-hidden">
                          박진식(Park Jin-Sik)박진식(Park Jin-Sik)박진식(Park
                          Jin-Sik)박진식(Park Jin-Sik)박진식(Park Jin-Sik)
                        </td>
                      </tr>
                      <tr class="" data-id="59b8ae97f8f7">
                        <td>
                          <div class="file-icon folder"></div>
                        </td>
                        <td>
                          비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더
                        </td>
                        <td>24.67KB</td>
                        <td>2020년 11월 25일</td>
                        <td className="text-hidden">
                          박진식(Park Jin-Sik)박진식(Park Jin-Sik)박진식(Park
                          Jin-Sik)박진식(Park Jin-Sik)박진식(Park Jin-Sik)
                        </td>
                      </tr>
                      <tr class="" data-id="59b8ae97f8f7">
                        <td>
                          <div class="file-icon folder"></div>
                        </td>
                        <td>
                          비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더
                        </td>
                        <td>24.67KB</td>
                        <td>2020년 11월 25일</td>
                        <td className="text-hidden">
                          박진식(Park Jin-Sik)박진식(Park Jin-Sik)박진식(Park
                          Jin-Sik)박진식(Park Jin-Sik)박진식(Park Jin-Sik)
                        </td>
                      </tr>
                      <tr class="" data-id="59b8ae97f8f7">
                        <td>
                          <div class="file-icon folder"></div>
                        </td>
                        <td>
                          비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더
                        </td>
                        <td>24.67KB</td>
                        <td>2020년 11월 25일</td>
                        <td className="text-hidden">
                          박진식(Park Jin-Sik)박진식(Park Jin-Sik)박진식(Park
                          Jin-Sik)박진식(Park Jin-Sik)박진식(Park Jin-Sik)
                        </td>
                      </tr>
                      <tr class="" data-id="59b8ae97f8f7">
                        <td>
                          <div class="file-icon folder"></div>
                        </td>
                        <td>
                          비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더
                        </td>
                        <td>24.67KB</td>
                        <td>2020년 11월 25일</td>
                        <td className="text-hidden">
                          박진식(Park Jin-Sik)박진식(Park Jin-Sik)박진식(Park
                          Jin-Sik)박진식(Park Jin-Sik)박진식(Park Jin-Sik)
                        </td>
                      </tr>
                      <tr class="" data-id="59b8ae97f8f7">
                        <td>
                          <div class="file-icon folder"></div>
                        </td>
                        <td>
                          비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더
                        </td>
                        <td>24.67KB</td>
                        <td>2020년 11월 25일</td>
                        <td className="text-hidden">
                          박진식(Park Jin-Sik)박진식(Park Jin-Sik)박진식(Park
                          Jin-Sik)박진식(Park Jin-Sik)박진식(Park Jin-Sik)
                        </td>
                      </tr>
                      <tr class="" data-id="59b8ae97f8f7">
                        <td>
                          <div class="file-icon folder"></div>
                        </td>
                        <td>
                          비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더
                        </td>
                        <td>24.67KB</td>
                        <td>2020년 11월 25일</td>
                        <td className="text-hidden">
                          박진식(Park Jin-Sik)박진식(Park Jin-Sik)박진식(Park
                          Jin-Sik)박진식(Park Jin-Sik)박진식(Park Jin-Sik)
                        </td>
                      </tr>
                      <tr class="" data-id="59b8ae97f8f7">
                        <td>
                          <div class="file-icon folder"></div>
                        </td>
                        <td>
                          비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더
                        </td>
                        <td>24.67KB</td>
                        <td>2020년 11월 25일</td>
                        <td className="text-hidden">
                          박진식(Park Jin-Sik)박진식(Park Jin-Sik)박진식(Park
                          Jin-Sik)박진식(Park Jin-Sik)박진식(Park Jin-Sik)
                        </td>
                      </tr>
                      <tr class="" data-id="59b8ae97f8f7">
                        <td>
                          <div class="file-icon folder"></div>
                        </td>
                        <td>
                          비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더
                        </td>
                        <td>24.67KB</td>
                        <td>2020년 11월 25일</td>
                        <td className="text-hidden">
                          박진식(Park Jin-Sik)박진식(Park Jin-Sik)박진식(Park
                          Jin-Sik)박진식(Park Jin-Sik)박진식(Park Jin-Sik)
                        </td>
                      </tr>
                      <tr class="" data-id="59b8ae97f8f7">
                        <td>
                          <div class="file-icon folder"></div>
                        </td>
                        <td>
                          비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더
                        </td>
                        <td>24.67KB</td>
                        <td>2020년 11월 25일</td>
                        <td className="text-hidden">
                          박진식(Park Jin-Sik)박진식(Park Jin-Sik)박진식(Park
                          Jin-Sik)박진식(Park Jin-Sik)박진식(Park Jin-Sik)
                        </td>
                      </tr>
                      <tr class="" data-id="59b8ae97f8f7">
                        <td>
                          <div class="file-icon folder"></div>
                        </td>
                        <td>
                          비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더비밀폴더
                        </td>
                        <td>24.67KB</td>
                        <td>2020년 11월 25일</td>
                        <td className="text-hidden">
                          박진식(Park Jin-Sik)박진식(Park Jin-Sik)박진식(Park
                          Jin-Sik)박진식(Park Jin-Sik)박진식(Park Jin-Sik)
                        </td>
                      </tr>
                      <tr class="" data-id="cf7ba04a277a" id="">
                        <td>
                          <div class="file-icon teams-icon icon-teams-image"></div>
                        </td>
                        <td>전사메일</td>
                        <td></td>
                        <td className="text-hidden"></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div class="ts-modal-dialog-footer">
              <div class="opne-side opne-side-left"></div>
              <a
                href="javascript:void(0)"
                class="btn-white"
                id="btn-moveOrCopy-close"
              >
                취소
              </a>
              <a
                href="javascript:void(0)"
                class="btn-basic btn-lock"
                id="btn-fileMove"
              >
                이동
              </a>
              <a href="javascript:void(0)" class="btn-basic" id="btn-fileMove">
                이동
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
