import React from "react";
import "./Notice.css";

const Notice = () => {
  return (
    <div className="notice-container">
      <h1>Website Temporarily Closed Due to Pending Payment</h1>

      <p>
        Kindly settle the outstanding payment at your earliest convenience to
        restore access. For any assistance please contact our{" "}
        <strong>developer team</strong>.
      </p>
    </div>
  );
};

export default Notice;