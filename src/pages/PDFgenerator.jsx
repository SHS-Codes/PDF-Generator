// App.jsx
import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaCommentDots } from 'react-icons/fa';
import { jsPDF } from 'jspdf';
import '../index.css';


function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Form Submission Details', 20, 20);
    doc.setFontSize(12);
    doc.text(`Full Name: ${formData.fullName}`, 20, 40);
    doc.text(`Email: ${formData.email}`, 20, 50);
    doc.text(`Phone: ${formData.phone}`, 20, 60);
    doc.text(`Message: ${formData.message}`, 20, 70);
    doc.save('form-data.pdf');
  };

  return (
    <div className="app-wrapper">
      <div className="form-container">
        <h1>PDF Generator from Form Data</h1>
        <form>
          <div className="form-group">
            <FaUser className="icon" />
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <FaEnvelope className="icon" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <FaPhone className="icon" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <FaCommentDots className="icon" />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="button" onClick={generatePDF}>
            Generate PDF
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
