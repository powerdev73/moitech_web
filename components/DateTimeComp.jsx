import React, { useEffect, useState } from "react";

const DateTimeComp = () => {
  const [time, setTime] = useState();

  const getTime = () => {
    const dateToday = new Date();

    const dateYear = dateToday.getFullYear(); // 년도
    const dateMonth = dateToday.getMonth() + 1; // 월
    const dateDay = dateToday.getDate(); // 일

    const dateHour = dateToday.getHours();
    const dateMinute = dateToday.getMinutes();
    const dateSecond = dateToday.getSeconds();

    const nowDateTime = `${dateYear}년 ${dateMonth}월 ${dateDay}일 ${dateHour}시 ${dateMinute}분 ${dateSecond}초`;

    setTime(nowDateTime);
  };

  useEffect(() => {
    setInterval(getTime, 1000);
    return () => {
      setInterval(getTime, 1000);
    };
  }, []);

  return `${time}`;
};

export default DateTimeComp;
