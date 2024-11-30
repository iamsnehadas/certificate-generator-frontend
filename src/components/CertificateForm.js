// src/components/certificateForm.js
import React, { useState } from "react";
import api from "../api/api";

const CertificateForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/", formData);  // Corrected API endpoint
      alert(`Certificate created! Link: ${response.data.link}`);
    } catch (error) {
      console.error("Error creating certificate:", error);
      alert("Failed to create certificate.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <h2>Create Certificate</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="course"
        placeholder="Course"
        value={formData.course}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <button type="submit">Generate Certificate</button>
    </form>
  );
};

export default CertificateForm;
