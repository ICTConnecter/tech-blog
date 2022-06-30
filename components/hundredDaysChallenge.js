/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { fontFamily } from "@mui/system";

export default function HundredDaysChallenge(props) {
  // propsの取り出し
  const count = props.count;
  // コンポーネントのリターン
  return (
    <div css={hundredDaysChallengeStyle}>
      <div css={parts}>
        <div>
          <p>#100日チャレンジ<br/>100日後にフロントエンドを極める</p>
        </div>
      </div>
      <div css={parts}>
        <p>{count}日目</p>
      </div>
    </div>
  );
}

const hundredDaysChallengeStyle = css({
  display: "flex",

  justifyContent: "center",
  alignItems: "center",
  width: "60%",
  boxShadow: "0 3px 6px rgba(0, 0, 0, 0.25)",
  background: "-moz-linear-gradient(#14ffec, #ff708d, #bb15fe)",
  background: "-webkit-linear-gradient(#14ffec, #ff708d, #bb15fe)",
  background: "linear-gradient(to right, #14ffec, #1534ff, #bb15fe)",
  borderBottom: "solid 6px #8a8a8a",
  borderRadius: "9px",
  margin: "20px",
});

const parts = css({
  display: "flex",
  flexDirection: "column",
  width: "300px",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  fontFamily:"sans-serif",
  fontWeight: "bold",
  textShadow: "0 0 10px #000;"
});
