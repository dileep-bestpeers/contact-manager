import React, { useEffect, useState } from "react";
import { useNavigate ,useParams } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditContacts() {
    const params = useParams();
    const navigate = useNavigate();
  const [contact_details, setContact_details] = useState({
    name: "",
    email: "",
    phone: +91,
    phone2: +91,
    address: "",
  });

  const addFormData = (e) => {
    e.preventDefault();
    let { name, email, address, phone, phone2 } = contact_details;
    if (name && email && address && phone && phone2) {
      phone = parseInt(phone, 10);
      phone2 = parseInt(phone2, 10);
      if (typeof phone === "number" || typeof phone2 === "number") {
        const localStorageDATA = JSON.parse(localStorage.getItem("contact"))
        let newData = []
        localStorageDATA.map((item,index) => {
            if (item.name === params.name){
                newData.push(contact_details)
                return ""
            }
            else {
                newData.push(item)
                return ""
            }
        })
        localStorage.setItem("contact", JSON.stringify(newData))
        setContact_details("");
        navigate('/')
      } else {
        toast("plz enter a valid contact number");
      }
    } else {
      toast("Please add all the values");
    }
  };


  useEffect(() => {
    const localStorageDATA = JSON.parse(localStorage.getItem("contact"))
    const data  = localStorageDATA.filter((item)=>item.name === params.name)[0];
    setContact_details({
    name: data.name,
    email: data.email,
    phone: data.phone,
    phone2: data.phone2,
    address: data.address,
    })
}, [])




    return (
        <div className="container py-3">
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
        <div className="form_wrapper row mx-auto">
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
  
            <button className="btn btn-primary w-100">Update Contact</button>
          </form>
        </div>
      </div>
    )
}

export default EditContacts
