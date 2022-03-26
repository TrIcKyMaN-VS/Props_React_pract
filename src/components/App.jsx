import "./../styles.css";
import React from "react";
import Card from "./card";
import contacts from "./../contacts";

console.log(contacts);

function createCard(contact) {
  return (
    <Card
      id={contact.id}
      key={contact.id}
      name={contact.name}
      img={contact.imgUrl}
      tel={contact.tel}
      email={contact.email}
    />
  );
}

export default function App() {
  return (
    <div className="App">
      <h1 className="heading">Contacts</h1>

      {contacts.map(createCard)}
    </div>
  );
}
