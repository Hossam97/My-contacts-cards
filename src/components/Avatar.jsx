import React from "react";

function Avatar(props){
    return <img
    src={props.image}
    alt={props.name + "'s image"}
    className="img circle-img"
  />
}

export default Avatar;