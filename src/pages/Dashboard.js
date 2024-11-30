import React from "react";
import CertificateForm from "../components/CertificateForm";
import CertificateList from "../components/CertificateList";

const Dashboard = () => {
  return (
    <div>
      <CertificateForm />
      <CertificateList />
    </div>
  );
};

export default Dashboard;
