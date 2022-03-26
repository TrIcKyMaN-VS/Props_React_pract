import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

function Card(props) {
  console.log(props);
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2>{props.id}</h2>
          <h2 className="name">{props.name}</h2>
          <Avatar img={props.img} />
        </div>
        <div className="bottom">
          <Details tel={props.tel} email={props.email} />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Card;
