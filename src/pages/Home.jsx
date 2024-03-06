import React from "react";
import { Main } from "../componets/section/Main";

import { Developer } from "../componets/contents/Developer";
import { developerText } from "../data/developer";

const Home = () => {
  return (
    <Main title="공유 파일" description="공유 파일 페이지 입니다.">
      <Developer videos={developerText} id="developer" />
    </Main>
  );
};

export default Home;
