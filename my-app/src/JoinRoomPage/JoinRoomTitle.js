import React from "react";

const JoinRoomTitle = ({ isRoomHost }) => {
  const titleText = isRoomHost ? "Toplantı oluştur" : "Toplantıya katıl";

  return <p className="join_room_title">{titleText}</p>;
};

export default JoinRoomTitle;
