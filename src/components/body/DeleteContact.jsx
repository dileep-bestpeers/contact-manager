import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
function DeleteContact() {
  const params = useParams();
  const navigate = useNavigate();
  const [contactName, setContactName] = useState(params.name);

  const deleteContact = () => {
      // debugger
       const yes = window.confirm('Are you sure you want to delete this contact')
       if (yes) {
           let localStorageData = JSON.parse(localStorage.getItem("contact"));
           const filteredData = localStorageData.filter((item) => item.name != contactName)
            localStorage.setItem("contact",JSON.stringify(filteredData));
            navigate('/')
       }
}


  return (

    <div className="delete_contact_box">
      Name: {contactName} <br />
      <div>
        <button onClick={deleteContact} className="btn btn-danger btn-sm m-1 mt-4">Delete</button>
        <Link to="/">
          <button className="btn btn-primary btn-sm m-1 mt-4">cancel</button>
        </Link>
      </div>
      
    </div>
  );
}

export default DeleteContact;
