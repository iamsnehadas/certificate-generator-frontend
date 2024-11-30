import React, { useEffect, useState } from "react";
import api from "../api/api";

const CertificateList = () => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await api.get("/certificates");
        setCertificates(response.data);
      } catch (error) {
        console.error("Error fetching certificates:", error);
      }
    };

    fetchCertificates();
  }, []);

  return (
    <div className="container">
      <h2>Certificates</h2>
      <ul>
        {certificates.map((cert) => (
          <li key={cert._id}>
            <p>
              <strong>{cert.name}</strong> ({cert.course}) -{" "}
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                View Certificate
              </a>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CertificateList;
