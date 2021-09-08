import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

function Card(props){
    return <div>
      
      <div className="card">
    <div className="top">
    <p style={{margin:"15px"}}>{props.id}</p>
      <h2 className="name">{props.name}</h2>
      <Avatar image={props.image}/>
    </div>
      <Details tel={props.tel} email={props.email}/>
    </div>
    </div>
}

export default Card;