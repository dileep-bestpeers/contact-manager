import React from "react";
import { Link } from "react-router-dom";

function ListContacts({ all_Contacts }) {
  return all_Contacts.map((e, index) => {
    return (
      <div key={index} className=" col-12">
        <div className="contact_box shadow">
          <div className="contact_inner_left">
            <span className="first_letter">{e.name[0].toUpperCase()}</span>
            <div className="contact_info">
              <span className="contact_name">{e.name}</span>
              <span className="contact_email">{e.email}</span>
            </div>
          </div>
          <div>
            <div className="contact_btns">
              <Link to={`/view/${e.name}`}>
                <button className="btn m-1 btn-primary btn-sm">
                  <i className="fas fa-eye"></i>
                </button>
              </Link>
              <Link to={`/edit/${e.name}`}>
                <button className="btn m-1 btn-info btn-sm">
                  <i className="fas fa-edit"></i>
                </button>
              </Link>
              <Link to={`/delete/${e.name}`}>
                <button className="btn m-1 btn-danger btn-sm">
                  <i className="fas fa-trash-alt"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  });
}

export default ListContacts;
