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
        <div className="calendar">
            <div className="calendar-header">
            <CalendarHeader 
            currentDate = {currentDate}
            onNext = {handleNextMonth}
            onPrev = {handlePrevMonth}
            /> 
            </div>
            <div className = "calendar-body">
                <div className="calendar-day">
                    <CalendarGrid currentDate = {currentDate} />
                </div>
                <div className="list">    
                    <List />
                </div>
            </div>
            
        </div>
    );


}

export default Calendar;