/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";

const name = "Mark-T";

export default function Profile() {
  return (
    <div css={profileStyle}>
      <Image
        priority
        src="/images/profile.jpg"
        className={utilStyles.borderCircle}
        height={144}
        width={144}
        alt={name}
      />
      <h1 className={utilStyles.heading2Xl}>Mark-T</h1>
      <p>
        旅好きのエンジニアのMark-Tです。
        <br />
        現在、Webエンジニアとして修行中!!
      </p>
    </div>
  );
}

const profileStyle = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "450px",
  margin: "50px",
});
