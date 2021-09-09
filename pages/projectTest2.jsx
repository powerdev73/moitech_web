import React, { useState } from "react";
import NavigationComp from "../components/NavigationComp";

const ProjectTest2 = () => {
  const [currnetDate, setCurrentDate] = useState();
  const [historyList, setHistoryList] = useState([]);

  const loadList = async () => {
    await axios.get(process.env.MOITECH_API_URL + `/api/JetAuthTestHistory`).then((res) => {
      console.log(res.data.list);
      setHistoryList(res.data.list);
    });
  };
  const loadUpdatTimeList = async () => {
    await axios.get(process.env.MOITECH_API_URL + `/api/JetAuthTestHistory/${currentDateTime}`).then((res) => {
      setHistoryList(res.data.list);
    });
  };
  return (
    <>
      <NavigationComp />
      <div class="container mt-5 pb-5">
        <div
          style={{
            borderBottom: "3px solid #333",
            padding: "1.5rem 1rem",
            borderTopStyle: "3xp solid #666",
            borderTopWidth: "3px",
            borderTopColor: "#666",
          }}
        >
          <h3 style={{ marginBbottom: "1rem" }}>시험 항목 #2 - 초미세먼지 제거율</h3>
          <h3 style={{ color: "white", background: "#333", padding: ".2rem .5rem", borderRadius: ".4rem" }}>상세</h3>
          <table class="table table-bordered mt-4">
            <thead>
              <tr style={{ background: "var(--bs-table-striped-bg)" }}>
                <th>시험항목</th>
                <th>
                  시험기준
                  <br />
                  (신청자 제시기준)
                </th>
                <th>시험반복수</th>
                <th>기타</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>초미세먼지 제거율</td>
                <td>90% 이상</td>
                <td style={{ fontWeight: "bold" }}></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <table class="table table-bordered">
            <thead>
              <tr style={{ background: "var(--bs-table-striped-bg)" }}>
                <th style={{ width: "150px" }}>시험항목</th>
                <th style={{ width: "150px" }}>구분</th>
                <th>내용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan="5">2. 초미세먼지 제거율</td>
                <td>시험목적</td>
                <td>
                  실험설비(미세먼지 챔버)에서 정상작동(동일 환경)된 후 샘플링 수집부에서 수집된 시료 비교하여 제거율
                  증명
                </td>
              </tr>
              <tr>
                <td>시험 기준</td>
                <td>80% 이상</td>
              </tr>
              <tr>
                <td>시험 데이터</td>
                <td></td>
              </tr>
              <tr>
                <td>시험절차</td>
                <td style={{ textAlign: "justify" }}>
                  <b>규격</b> SPS-KACA 002-0132 (CA인증시험-실내공기청정기)시험방식이 있으나, 청정기의 처리용량 (분당
                  처리공기량) 기준의 시험방식이라, 성능위주의 시험방식으로 진행
                  <br />
                  ※공인시험에 준하는 방식으로 시험
                  <br />
                  <b>시험체임버평가</b> : 일정 미세먼지 분진을 투입하여, 샘플 집진기 전단의 초미세먼지 수치와 후단의
                  초미세먼지 수치를 비교
                  <br />
                  a) 온도 : 23±5C,
                  <br />
                  b) 상대습도 : 55±15%
                  <br />
                  c)초미세먼지 수치 지하철 수준 150이상
                </td>
              </tr>
              <tr>
                <td>예상결과</td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <hr style={{ margin: "2rem 0" }} />
          <h3 style={{ color: "white", background: "#333", padding: ".2rem .5rem", borderRadius: ".4rem" }}>
            시험 데이타 및 결과
          </h3>
          <div
            style={{
              border: "1px solid rgba(0,0,0,.3)",
              backgroundColor: "#f3f3f3",
              padding: "1rem 2rem .5rem",
              borderRadius: "1rem",
              margin: "1rem 0",
            }}
          >
            <h5 style={{ fontWeight: "bold" }}>시험방법</h5>
            <ol>
              <li>
                <kbd class="blue-kbd">시작</kbd> 버튼 을 누르면 하이브리드 싸이클론 집진기 센서가 동작하며, 약 20분 내
                센서 값이 표시됨.
              </li>
              <li>
                TSI-9306 측정기로 PM10 값을 측정, 그 값을 TEXT창에 입력한 후에 <kbd class="yellow-kbd">입력</kbd> 버튼을
                누르면 1회 측정 정확도가 산출됨
              </li>
              <li>1-2회의 과정을 통해 5회까지 측정을 하여 완료가 됨</li>
            </ol>
          </div>
        </div>
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj"
        crossorigin="anonymous"
      ></script>
    </>
  );
};

export default ProjectTest2;
