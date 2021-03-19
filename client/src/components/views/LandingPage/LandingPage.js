import axios from "axios";
import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

function LandingPage(props) {
  const onClickHandler = () => {
    axios.get("/api/users/logout").then((response) => {
      if (response.data.success) {
        props.history.push("/login");
      } else {
        alert("Failed to sign out.");
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "95vh",
      }}
    >
      <h1>Landing Page</h1>

      <button onClick={onClickHandler}>Sign Out</button>
    </div>
  );
}

export default withRouter(LandingPage);
