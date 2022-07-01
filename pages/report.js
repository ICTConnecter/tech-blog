/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import DefaultHead from "../components/defaultHead";
import Header from "../components/header";
import DatePicker from "../components/datePicker";
import HundredDaysChallenge from "../components/hundredDaysChallenge";
import DayReport from "../components/dayReport";
import { useEffect, useState } from "react";

export default function Report() {

  // useState設定
  const [dateValue, setDateValue] = useState(new Date());
  const [report, setReport] = useState();
  
  // Fetch処理
  async function getData(){
    var data = {
      date: dateValue
    }
    console.log(JSON.stringify(data))
    await fetch(selectDateUrl, {
      method: `POST`,
      body: JSON.stringify(data),
    })
      .then((r) => r.json())
      .then((j) => setReport(j.report))
  }

  // useEffect設定
  const selectDateUrl = "./api/firestore/reports/read";
  useEffect(
    () => {
      getData(); 
    }, [dateValue]
  )
  

  return (
    <>
      <DefaultHead />
      <main>
        <Header />
        <div css={mainStyle}>
          <HundredDaysChallenge count={5}/>
          <DatePicker onChange={setDateValue} value={dateValue}/>
          <DayReport report={report}/>
        </div>
      </main>
    </>
  );
}

const mainStyle = css({
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  justifyContent: "center",
  alignItems: "stretch",
});
