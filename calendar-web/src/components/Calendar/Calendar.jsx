import React, { useState } from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";
import List from "./List";
import "../assets/styles.css";
import { addMonths, subMonths, format } from "date-fns";


function Calendar() {

    const [currentDate, setCurrentDate] = useState(new Date());

    const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));
    const handlePrevMonth = () => setCurrentDate(subMonths(currentDate, 1));

    return (
        <div>
            <CalendarHeader 
            currentDate = {currentDate}
            onNext = {handleNextMonth}
            onPrev = {handlePrevMonth}
            /> 
            <div className = "calendar-container">
                <div className="calendar-grid">
                    <CalendarGrid currentDate = {currentDate} />
                </div>
            </div>
            <div className="post-list">
                <List />
            </div>
            
        </div>
    );


}

export default Calendar;