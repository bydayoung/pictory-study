import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>This is 'Home' page</h2>
      <Link to = '/calendar'>Start Here!</Link>
    </div>
  );
}

export default Home;
