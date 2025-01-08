import React from "react";
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays } from "date-fns";
import CalendarDay from "./CalendarDay";

function CalendarGrid({ currentDate }) {
  const startDate = startOfWeek(startOfMonth(currentDate));
  const endDate = endOfWeek(endOfMonth(currentDate));

  const days = [];
  let day = startDate;

  while (day <= endDate) {
    days.push(day);
    day = addDays(day, 1);
  }

  const weekDays = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)" }}>
      
      {weekDays.map((weekday, index) => (
        <div key={index} style={{ textAlign: "center", fontWeight: "bold" }}>
          {weekday}
        </div>
      ))}
      
      {days.map((day, index) => (
        <CalendarDay key={index} date={day} />
      ))}
    </div>
  );
}

export default CalendarGrid;
