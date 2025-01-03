import React from "react";
import { format } from "date-fns";
import style from "../assets/styles.css";
import img from "../img";


function CalendarHeader({ currentDate, onNext, onPrev }) {
  return (
    <div>
        <div>
            <img src={img.PICTORYsmall} alt="Pictory" style={{ width: "235.238px", height: "59.471px" }} />
        </div>
        <div>
            
            <img src={img.HeaderIcon} alt="HeaderIcon" style={{ width: "42px", height: "42px" }} />
            <span>날짜를 선택해주세요.</span>
            
            <button type="button">
                <img src={img.GoInputInactive} alt="GoInputInactive" style={{ width: "77px", height: "51px" }}  />
            </button>
            
        </div>

        <div>
          <button onClick={onPrev}>Previous</button>
          <span>{format(currentDate, "MMMM yyyy")}</span>
          <button onClick={onNext}>Next</button>
        </div>
    </div>
  );
}

export default CalendarHeader;
