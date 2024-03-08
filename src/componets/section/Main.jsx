import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Header from "./Header";

import { Search } from "./Search";
import ScrollTo from "../../utils/scrollTo";
import Filter from "../contents/Filter";
import NewFolderPop from "../contents/NewFolderPop";
import Developer from "../contents/Developer";

export const Main = (props) => {
  // 필터
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  // 왼쪽 메뉴
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsHeaderVisible(window.innerWidth >= 1200);
    };

    // 초기 렌더링 시와 창 크기 변경 시에 호출
    handleResize();

    window.addEventListener("resize", handleResize);

    // cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // 빈 배열을 전달하여 초기 렌더링 시에만 실행되도록 함

  const toggleHeader = () => {
    setIsHeaderVisible(!isHeaderVisible);
  };

  const [isSearchHeaderVisible, setIsSearchHeaderVisible] = useState(true);
  const toggleSearchHeader = () => {
    setIsSearchHeaderVisible(!isSearchHeaderVisible);
  };

  return (
    <HelmetProvider>
      <ScrollTo />
      <Helmet titleTemplate="%s" defer={false}>
        {props.title && <title>{props.title}</title>}
      </Helmet>
      <Header isActive={isHeaderVisible} toggleHeader={toggleHeader} />
      <main
        id="main"
        role="main"
        className={isHeaderVisible ? "menu-open" : "menu-closed"}
      >
        <Search
          toggleHeader={toggleHeader}
          toggleFilter={toggleFilter}
          isSearchHeaderVisible={isSearchHeaderVisible}
        />
        <Filter isVisible={isFilterVisible} />
        <NewFolderPop />
        <Developer id="developer" toggleSearchHeader={toggleSearchHeader} />
      </main>
    </HelmetProvider>
  );
};

export default Main;
