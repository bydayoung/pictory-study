import React from "react";
import Calendar from "../components/Calendar/Calendar";
import { Link } from "react-router-dom";


function CalendarPage() {
  return (
    <div>
        <Link to ='/'>
            Back to the Home
        </Link>
      <Calendar />
    </div>
  );
}

export default CalendarPage;
