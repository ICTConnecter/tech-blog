/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

export default function Career() {
  return (
    <div css={careerStyle}>
      <p>
        経歴
        <br />
        ・遺伝子工学で大学院修了
        <br />
        ・工業用ラインマシンの開発、技術営業
        <br />
        ・地元に戻ってくるときにIT企業に転職
        <br />
        ・スキルアップの時間を確保するために自営業に転身
        <br />
      </p>
    </div>
  );

}
const careerStyle = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "450px",
  margin: "50px",
});
