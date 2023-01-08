import React from "react";

const LeaveRoomButton = () => {
  const handleRoomDisconnection = () => {
    const siteUrl = window.location.origin;
    window.location.href = siteUrl;
  };

  return (
    <div className="video_button_container">
      <button className="video_button_end" onClick={handleRoomDisconnection}>
        Odadan Ayrıl
      </button>
    </div>
  );
};

export default LeaveRoomButton;
