import React from "react";
import {  Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AllContacts from "../body/AllContacts";
import AddContact from "../body/AddContact";
import DeleteContact from "../body/DeleteContact";
import ViewContact from "../body/ViewContact";
import EditContacts from "../body/EditContacts";
import ErrorPage from "../body/ErrorPage";

function Home() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<AllContacts />} />
        <Route exact path="/add_contact" element={<AddContact />} />
        <Route exact path="/delete/:name" element={<DeleteContact />} />
        <Route exact path="/view/:name" element={<ViewContact />} />
        <Route exact path="/edit/:name" element={<EditContacts />} />
        <Route path="*"  element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Home;
