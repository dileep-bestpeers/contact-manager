import React, { useEffect, useState } from "react";
import ListContacts from "../ListContacts/ListContacts";
import NoContacts from "./NoContacts";

function AllContacts() {
  const [all_Contacts, setAll_Contacts] = useState([]);

  const searchContact = (text) => {
    let data = JSON.parse(localStorage.getItem("contact"));
    if (data) {
      if (text !== "") {
        let filteredData = data.filter((contact) => {
          return (
            // contact.name.includes(text)
            Object.values(contact)
              .join(" ")
              .toLocaleLowerCase()
              .includes(text.toLocaleLowerCase())
          );
        });
        if (filteredData) setAll_Contacts(filteredData);
        
        
      }
    }
  };

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("contact"));
    setAll_Contacts(data);
  }, []);

  return (
    <div className="container">
      <div className="my-2 contactSearch">
        <input
          onChange={(e) => searchContact(e.target.value)}
          placeholder="Search Contact"
          className=" w-100"
          type="text"
        />
        <i className="fas fa-search-plus"></i>
      </div>
      <div className="all_contacts  my-3">
        <div className="gx-0  row">
          {all_Contacts ? (
            <ListContacts all_Contacts={all_Contacts} />
          ) : (
            <NoContacts />
          )}
        </div>
      </div>
    </div>
  );
}

export default AllContacts;
