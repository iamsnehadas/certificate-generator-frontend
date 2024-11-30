import React, { createContext, useContext, useState } from "react";

const CertificateContext = createContext();

export const useCertificateContext = () => useContext(CertificateContext);

export const CertificateProvider = ({ children }) => {
  const [certificates, setCertificates] = useState([]);

  const addCertificate = (certificate) => {
    setCertificates((prev) => [...prev, certificate]);
  };

  return (
    <CertificateContext.Provider value={{ certificates, addCertificate }}>
      {children}
    </CertificateContext.Provider>
  );
};
