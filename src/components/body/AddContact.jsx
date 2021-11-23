import React, { useState } from "react";
// import { useHistory } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddContact(props) {
  // const history = useHistory()
  const navigate = useNavigate();
  const [contact_details, setContact_details] = useState({
    name: "",
    email: "",
    phone: "",
    phone2: "",
    address: "",
  });

  const addFormData = (e) => {
    e.preventDefault();
    let { name, email, address, phone, phone2 } = contact_details;
    if (name && email && address && phone && phone2) {
      let p1 = /^\d+$/.test(phone);
      let p2 = /^\d+$/.test(phone2);

      if (phone.length === 10 && phone2.length === 10) {
        if (p1 && p2) {
          let localStorageDATA = JSON.parse(localStorage.getItem("contact"));
          if (localStorageDATA) {
            localStorageDATA.push(contact_details);
            localStorage.setItem("contact", JSON.stringify(localStorageDATA));
          } else {
            localStorage.setItem("contact", JSON.stringify([contact_details]));
          }
          setContact_details("");
          toast.success("contact_details added successfully")
          // history.push("/");
          navigate("/");
        } else {
          toast("plz enter a valid contact number");
        }
      } else {
        toast("contact must be 10 digits long");
      }
    } else {
      toast("Please add all the values");
    }
  };

  return (
    <div className="container py-3">
      <div className="form_wrapper row mx-auto">
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <form
          onSubmit={addFormData}
          action=""
          className="shadow p-4 mx-auto col-md-7 col-lg-6 col-10"
        >
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="name"
              name="name"
              value={contact_details.name}
              onChange={(e) =>
                setContact_details({ ...contact_details, name: e.target.value })
              }
            />
            <label htmlFor="floatingInput">Full Name</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="email@gmail.com"
              name="email"
              value={contact_details.email}
              onChange={(e) =>
                setContact_details({
                  ...contact_details,
                  email: e.target.value,
                })
              }
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>

          <div className="form-floating mb-3">
            <input
              name="phone"
              value={contact_details.phone}
              onChange={(e) =>
                setContact_details({
                  ...contact_details,
                  phone: e.target.value,
                })
              }
              type="text"
              className="form-control"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Phone Number (main)</label>
          </div>

          <div className="form-floating mb-3">
            <input
              name="phone2"
              value={contact_details.phone2}
              onChange={(e) =>
                setContact_details({
                  ...contact_details,
                  phone2: e.target.value,
                })
              }
              type="text"
              className="form-control"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Phone Number (other)</label>
          </div>

          <div className="form-floating mb-3">
            <input
              value={contact_details.address}
              onChange={(e) =>
                setContact_details({
                  ...contact_details,
                  address: e.target.value,
                })
              }
              type="text"
              className="form-control"
              placeholder="Password"
              name="address"
            />
            <label htmlFor="floatingPassword">Address</label>
          </div>

          <button className="btn btn-primary w-100">Add Contact</button>
        </form>
      </div>
    </div>
  );
}

export default AddContact;
