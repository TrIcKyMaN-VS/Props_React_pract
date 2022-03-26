import React from "react";

function Avatar(props) {
  return (
    <img
      className="circle-img"
      src={props.img}
      width="100px"
      alt="avatat_img"
    />
  );
}

export default Avatar;
