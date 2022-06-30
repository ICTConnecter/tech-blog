/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import HeaderButton from "./atoms/headerButton";

export default function Header() {
  return (
    <header css={headerStyle}>
      <div css={titleStyle}>
        <a>Mark-T's Study Room</a>
      </div>
      <div css={buttonStyle}>
        <HeaderButton href={""} name={"TOP"} />
        <HeaderButton href={""} name={"Report"} />
        <HeaderButton href={""} name={"Tech Blog"} />
      </div>
    </header>
  );
}

const headerStyle = css({
  display: "flex",
  alignItems: "center",
  height: "80px",
  background: "#000",
  color: "#fff",
});

const titleStyle = css({
  width: "100%",
  fontFamily: "fantasy",
  fontSize: "50px",
  margin: "10px",
});

const buttonStyle = css({
  display: "flex",
  alignSelf: "flex-end",
  justifySelf: "flex-end",
});
