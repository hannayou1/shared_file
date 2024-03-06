import React, { useState } from "react";
import { TbFilterX } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

import fileImg from "../../assets/img/icon/genericfile.svg";
import file_ppt from "../../assets/img/icon/pptx.svg";
import file_excel from "../../assets/img/icon/xlsx.svg";

const Filter = ({ isVisible }) => {
  const displayStyle = isVisible ? { display: "block" } : { display: "none" };

  return (
    <div class="right-pannel" id="publishing_rightPannel" style={displayStyle}>
      <div class="rp_header">
        <div class="top">
          <div class="title" id="filter_title">
            필터
          </div>
          <div class="option">
            <TbFilterX className="pannel_icon mr_5" />
            <IoClose className="pannel_icon" id="publishing_filterClose" />
          </div>
        </div>
        <div class="bot">
          <span id="filterSearchCnt">4</span>
          <span id="filterSearchCntInfo">개 항목</span>
        </div>
      </div>
      <div class="rp_contents">
        <div>
          <div class="sub_head">
            <div class="title">
              <span id="filter_year">2024 이후 수정된 날짜</span>
            </div>
            <div class="option">
              <i
                class="ms-Icon ms-Icon--More ico-ms ico-14"
                aria-hidden="true"
              ></i>
              <div class="popup-opne more_option">
                <ul>
                  <li>고정</li>
                  <li>제거</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="section">
            <div>
              <input
                class="gage"
                id="filter-date-selector"
                min="0"
                max="100"
                value="0"
                step="20"
                type="range"
                list="steplist"
                onchange="onFilterDateChanged()"
              />
              {/* <datalist id="steplist">
                        <option value="0" title="0">0</option>
                        <option value="20">20</option>
                        <option value="40">40</option>
                        <option value="60">60</option>
                        <option value="80">80</option>
                        <option value="100">100</option>
                    </datalist> */}
              <div class="date" id="filter_modate_spanlist">
                <span>2024</span>
                <span id="filter_date_today" style={{ marginRight: "5px" }}>
                  {" "}
                  오늘{" "}
                </span>
              </div>
              <a
                class="filter-select-info"
                id="btn_filter_modate_more"
                onclick="openPanelFilterModateMore()"
              >
                특정 날짜를 선택하세요
              </a>
            </div>
          </div>
        </div>

        <div>
          <div class="sub_head">
            <div class="title" id="filter_modified">
              수정한 사람
            </div>
            <div class="option">
              <i
                class="ms-Icon ms-Icon--More ico-ms ico-14"
                aria-hidden="true"
              ></i>
              {/* <div class="popup-opne more_option">
                        <ul>
                            <li>고정</li>
                            <li>제거</li>
                        </ul>
                    </div> */}
            </div>
          </div>

          <div class="section" id="filter_modified_list">
            <ul style={{ overflow: "auto", maxHeight: "150px" }}>
              <li>
                <div class="con">
                  <div>
                    <input
                      type="checkbox"
                      name="list-chk"
                      id="modified-list-chk-0"
                      data-modified="유한나 (You Han-Na)"
                      usertype="modified"
                    />
                    <label
                      for="modified-list-chk-0"
                      style={{ cursor: "pointer" }}
                    >
                      <span class="chk-area purple"></span>
                      <span class="chk-text">
                        {" "}
                        <span class="user_pic"></span> 유한나 (You Han-Na){" "}
                      </span>
                    </label>
                  </div>
                </div>
              </li>
            </ul>
            <a
              class="filter-select-info"
              id="btn_filter_modified_more"
              onclick="openPanelFilterModifiedMore()"
            >
              모두 보기
            </a>
          </div>
        </div>

        <div>
          <div class="sub_head">
            <div class="title" id="filter_ext">
              유형
            </div>
            {/* <div class="option">
                    <i class="ms-Icon ms-Icon--More ico-ms ico-14" aria-hidden="true" style={{display:'none'}}></i>
                    <div class="popup-opne more_option">
                        <ul>
                            <li>고정</li>
                            <li>제거</li>
                        </ul>
                    </div>
                </div> */}
          </div>

          <div class="section" id="filter_ext_list">
            <ul style={{ overflow: "auto", maxHeight: "200px" }}>
              <li>
                <div class="con">
                  <div>
                    <input
                      type="checkbox"
                      name="list-chk"
                      id="ext-list-chk-0"
                      style={{ display: "none" }}
                      data-ext="zip"
                      usertype="ext"
                    />
                    <label for="ext-list-chk-0" style={{ cursor: "pointer" }}>
                      <span class="chk-area purple"></span>
                      <span class="chk-text">
                        <img src={fileImg} alt="" class="text-img" />
                        <span> zip </span>
                      </span>
                    </label>
                  </div>
                </div>
              </li>
              <li>
                <div class="con">
                  <div>
                    <input
                      type="checkbox"
                      name="list-chk"
                      id="ext-list-chk-1"
                      style={{ display: "none" }}
                      data-ext="xlsx"
                      usertype="ext"
                    />
                    <label for="ext-list-chk-1" style={{ cursor: "pointer" }}>
                      <span class="chk-area purple"></span>
                      <span class="chk-text">
                        <img class="text-img" src={file_excel} />
                        <spa> xlsx </spa>
                      </span>
                    </label>
                  </div>
                </div>
              </li>
            </ul>
            <a
              class="filter-select-info"
              id="btn_filter_ext_more"
              onclick="openPanelFilterExtMore()"
            >
              모두 보기
            </a>
          </div>
        </div>
      </div>

      <div class="rp_footer">
        <a class="btn-basic" id="btn_FilterSearch">
          적용
        </a>
      </div>
    </div>
  );
};

export default Filter;
