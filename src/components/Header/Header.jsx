import React from "react";

function Header() {
  return (
    <div className="container header_styles shadow py-4">
      <h3 className="text-uppercase">
        <i className="fas fa-address-card"></i> My Contacts
      </h3>
      <div className="add_icon">
        <i className="fas fa-user-plus"></i>
        {/* <small>Add New</small> */}
      </div>
    </div>
  );
}

export default Header;
