import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { headerMenus } from "../../data/header";
import { tableTitle, tableContents } from "../../data/developer";
import { FaAngleDown } from "react-icons/fa6";

export const Developer = ({ toggleSearchHeader }) => {
  const [loading, setLoading] = useState(true); //변수 설정 true로 설정

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, []);

  const developerClass = loading ? "isLoading" : "isLoaded";

  const [isRotated, setIsRotated] = useState(false);

  const toggleRotation = () => {
    setIsRotated(!isRotated);
  };

  const [isRotated02, setIsRotated02] = useState(false);

  const toggleRotation02 = () => {
    setIsRotated02(!isRotated02);
  };

  const [isRotated03, setIsRotated03] = useState(false);

  const toggleRotation03 = () => {
    setIsRotated03(!isRotated03);
  };

  const [isRotated04, setIsRotated04] = useState(false);

  const toggleRotation04 = () => {
    setIsRotated04(!isRotated04);
  };

  const chkboxClick = () => {
    console.log("chkboxClick");
    toggleSearchHeader();
  };

  return (
    <section className={`${developerClass} content__section`}>
      <div className="Breadcrumb-list">
        <a href="javascript:void(0)" className="Breadcrumb-list__item">
          {headerMenus[0].title}
        </a>
        <a
          href="javascript:void(0)"
          className="Breadcrumb-list__item readcrumb-list__item--select"
        >
          {headerMenus[0].submenu[0]}
        </a>
      </div>

      <div className="table__inner">
        <div className="file-table">
          <div class="table-file-list">
            <div class="thead">
              <div class="theadList-inner">
                <div class="data-select">
                  <div class="item" onClick={chkboxClick}>
                    <div class="div-check-box">
                      <input type="checkbox" name="" id="chk3" />
                      <label for="chk3" class="check-box check-box__chk">
                        <span class="CircleRing"></span>
                      </label>
                    </div>
                  </div>
                  <div class="item text-center">
                    <img src={tableTitle.img} alt="" class="text-img" />
                  </div>
                </div>
                <div className="data-body">
                  <div className="data-title">
                    <div className="item">
                      <span href="/" className="a_folder">
                        {tableTitle.name}{" "}
                      </span>
                      <FaAngleDown
                        className={
                          isRotated ? "arr_bottom rotated" : "arr_bottom"
                        }
                        onClick={toggleRotation}
                      />
                    </div>
                  </div>
                  <div className="data-detail">
                    <div className="item">
                      <span href="/" className="a_folder">
                        {tableTitle.size}
                      </span>
                      <FaAngleDown
                        className={
                          isRotated02 ? "arr_bottom rotated" : "arr_bottom"
                        }
                        onClick={toggleRotation02}
                      />
                    </div>

                    <div className="item">
                      <span href="/" className="a_folder">
                        {" "}
                        {tableTitle.date}
                      </span>
                      <FaAngleDown
                        className={
                          isRotated03 ? "arr_bottom rotated" : "arr_bottom"
                        }
                        onClick={toggleRotation03}
                      />
                    </div>
                    <div className="item">
                      <span href="/" className="a_folder">
                        {" "}
                        {tableTitle.person}
                      </span>
                      <FaAngleDown
                        className={
                          isRotated04 ? "arr_bottom rotated" : "arr_bottom"
                        }
                        onClick={toggleRotation04}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tbodyList-file">
              {tableContents.map((contents, key) => (
                <div className="tbodyList-inner">
                  <div className="data-select">
                    <div className="item">
                      <div className="div-check-box opacity_1">
                        <input type="checkbox" name="" id="chk3" />
                        <label for="chk3" className="check-box check-box__chk">
                          <span className="CircleRing"></span>
                        </label>
                      </div>
                    </div>
                    <div className="item text-center">
                      <img src={contents.img} alt="" className="text-img" />
                    </div>
                  </div>
                  <div className="data-body">
                    <div className="data-title">
                      <div className="item">
                        <a
                          href="javascript:void(0)"
                          className="a_folder"
                          data-id="4fbcfa8035f7"
                          title="01"
                        >
                          {contents.name}
                        </a>
                        {/* <span>Projects &gt; 자이소프트 &gt; publishing &gt; potal &gt; contents</span> */}
                      </div>
                      <div className="ellipsis">
                        <ul className="dropdown-popup">
                          <li>
                            <span>Teams에서 편집</span>
                          </li>
                          <li>
                            <span>데스크톱앱에서 열기</span>
                          </li>
                          <li>
                            <span>브라우저에서 열기</span>
                          </li>
                          <li>
                            <span>다운로드</span>
                          </li>
                          <li>
                            <span>링크복사</span>
                          </li>
                          <li>
                            <span>이동</span>
                          </li>
                          <li>
                            <span>복사</span>
                          </li>
                          <li>
                            <span>삭제</span>
                          </li>
                          <li>
                            <span>이름변경</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="data-detail">
                      <div className="item">{contents.size}</div>
                      <div className="item">{contents.date}</div>
                      <div className="item">{contents.person}</div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="file-more">
                <a href="javascript:void(0)" className="btn-more">
                  더보기
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Developer;
