/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

export default function DayReport(props) {
  // propsの取り出し
  const report = props.report;

  return (
    <div css={dayReportStyle}>
      <p>{report}</p>
    </div>
  );

}
const dayReportStyle = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "center",
  width: "450px",
  margin: "50px",
});
