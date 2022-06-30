/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { ja } from "date-fns/locale";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function DatePicker(props) {
  
  // propsの取り出し
  const value = props.value;
  const onChange = props.onChange;

  return (
    <div css={calendarStyle}>
      <Calendar onChange={onChange} value={value} locale={ja} calendarType={"US"}/>
    </div>
  );
}

const calendarStyle = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "center",
  width: "450px",
  height: "320px",
  margin: "50px",
});
