import React from "react";

const Input = ({ placeholder, value, changeHandler }) => {
  return (
    <input
      value={value}
      onChange={changeHandler}
      className="join_room_input"
      placeholder={placeholder}
    />
  );
};

const JoinRoomInputs = (props) => {
  const { roomIdValue, setRoomIdValue, nameValue, setNameValue, isRoomHost } =
    props;

  const handleRoomIdValueChange = (event) => {
    setRoomIdValue(event.target.value);
  };

  const handleNameValueChange = (event) => {
    setNameValue(event.target.value);
  };

  return (
    <div className="join_room_inputs_container">
      {!isRoomHost && (
        <Input
          placeholder="Toplantı ID giriniz"
          value={roomIdValue}
          changeHandler={handleRoomIdValueChange}
        />
      )}
      <Input
        placeholder="Adınızı giriniz"
        value={nameValue}
        changeHandler={handleNameValueChange}
      />
    </div>
  );
};

export default JoinRoomInputs;
