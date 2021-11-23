import { Link } from "react-router-dom";
import React from "react";

function NoContacts() {
  return (
    <div className="no_contacts text-center shadow bg-Secondary text-dark border pt-4 text-light">
      <p className="">No Contacts Available</p>
      <p>plz add some</p>
      <Link to="/add_contact">
        <button className="btn btn-primary btn-sm">Add Contact</button>
      </Link>
    </div>
  );
}

export default NoContacts;
