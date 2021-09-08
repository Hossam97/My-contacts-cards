import React from "react";
import Avatar from "./Avatar";
import Card from "./Card";
import contacts from "./contacts.js";

function createCard(contact){
    return ( <Card
        id={contact.id}
        key={contact.id}
        name={contact.name}
        image={contact.imgURL}
        tel={contact.phone}
        email={contact.email}
    />
    );
}

function App(){
    return (
        <div>
        <h1 className="heading">My Contacts</h1>
        <Avatar
         image= "https://media-exp1.licdn.com/dms/image/C5603AQHkrhT2fjFFnw/profile-displayphoto-shrink_800_800/0/1622108309950?e=1636588800&v=beta&t=zvTCATKicxzQqoJTBooFXW9q-3GO5coYZ_hcaLLZZns"
         />
    {contacts.map(createCard)}
    </div>
    )
    
}

export default App;