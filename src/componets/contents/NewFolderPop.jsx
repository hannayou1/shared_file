import React from "react";

const NewFolderPop = () => {
  return (
    <div class="popup-new" id="folder-modal">
      <div class="header">
        <div class="title">폴더</div>
        <a href="javascript:void(0)" class="btn-close new-folerOrFile-modal">
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
          <a
            href="javascript:void(0)"
            class="btn_blue2 btn-make-folder btn-basic"
          >
            만들기
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewFolderPop;
