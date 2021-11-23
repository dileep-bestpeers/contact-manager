import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import userProfile from "../../assets/user_profile.png";

function ViewContact(props) {
  const params = useParams();
  const [user, setUser] = useState("");

  useEffect(() => {
    const localStorageDATA = JSON.parse(localStorage.getItem("contact")).filter(
      (userProfile) => userProfile.name === params.name
    );
    setUser(localStorageDATA[0]);
  }, []);

  const UesrDetails = [
    {
      field: "Name",
      value: user.name,
    },
    {
      field: "Email",
      value: user.email,
    },
    {
      field: "Phone",
      value: user.phone,
    },
    {
      field: "Phone2",
      value: user.phone2,
    },
    {
      field: "Address",
      value: user.address,
    },
  ];

  // const ActionBtns = [
  //   {
  //     path ="/",
  //     name = 'Home',
  //     clsName='btn btn-primary btn-sm m-1'
  //   },
  //   {
  //     path =`/edit/${user.name}`,
  //     name = 'Update',
  //     clsName='btn btn-info btn-sm m-1'
  //   },
  //   {
  //     path =`/delete/${params.name}`,
  //     name = 'Delete',
  //     clsName='btn btn-danger btn-sm m-1'
  //   }
  // ]

  const FooterCardView = () => {
    return (
      <>
        <Link to="/">
          <button className="btn btn-primary btn-sm m-1">Home</button>
        </Link>

        <Link to={`/edit/${user.name}`}>
          <button className="btn btn-info btn-sm m-1">update</button>
        </Link>

        <Link to={`/delete/${params.name}`}>
          <button className="btn btn-danger btn-sm m-1">Delete</button>
        </Link>
      </>
    );
  };

  return (
    <div>
      <div className="gx-0 row py-4 ">
        <div className="col-md-7 col-10 mx-auto">
          <div className="shadow text-center profile_img">
            <img src={userProfile} className="card-img-bottom" alt="..." />
            <div className="card-body text-center">
              {UesrDetails.map((item, index) => (
                <h6 key={index} className="card-title">
                  {item.field} : {item.value}
                </h6>
              ))}
              <div className="card-footer">
                <FooterCardView />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewContact;
