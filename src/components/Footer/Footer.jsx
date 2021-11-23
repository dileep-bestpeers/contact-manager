import React from "react";
import {Link} from 'react-router-dom'; 

function Footer() {
  return (
    <div className=" footer mt-4 text-light p-3 bg-dark">
      <div className=" container text-center d-flex justify-content-between">
        <span>You can do certian operations with your Contacts</span>
        <span>
        <Link to="add_contact"><button className="btn btn-primary btn-sm">add new</button></Link>
        </span>
      </div>
    </div>
  );
}

export default Footer;
