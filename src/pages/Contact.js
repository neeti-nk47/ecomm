import React from "react";
import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  async function handleSubmit(event) {
    event.preventDefault();

    let details = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    };

    const response = await fetch(
      "https://ecomm-af551-default-rtdb.asia-southeast1.firebasedatabase.app/contact.json",
      {
        method: "POST",
        body: JSON.stringify(details),
      }
    );
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="card box">
        <h3 className="text-center">Contact Us</h3>

        <form
          className="form mb-3 card-body"
          id="addForm"
          onSubmit={handleSubmit}
        >
          <label for="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control mb-3"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label for="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control mb-3"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label for="number" className="form-label">
            Phone:
          </label>
          <input
            type="number"
            className="form-control mb-3"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn form-control btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
