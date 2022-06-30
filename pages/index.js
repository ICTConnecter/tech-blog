/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Career from "../components/career";
import DefaultHead from "../components/defaultHead";
import Header from "../components/header";
import Profile from "../components/profile";

export default function Home() {
  return (
    <>
      <DefaultHead />
      <main>
        <Header />
        <div css={mainStyle}>
          <Profile />
          <Career />
        </div>
      </main>
    </>
  );
}

const mainStyle = css({
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "stretch",
});
