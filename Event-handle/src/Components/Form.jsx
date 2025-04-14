import React from "react";
import { useState } from "react";
import "../styles/main.scss";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    address: "",
    phone: "",
    password: "",
  });
  const [title, setTitle] = useState("Double Click Me");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(`${name}: ${value}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleCopy = () => {
    const text = "test@gmail.com";
    navigator.clipboard.writeText(text);
    alert("Message copied to clipboard!");
  };

  const handleClick = () => {
    alert("Form submitted successfully!");
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      city: "",
      address: "",
      phone: "",
      password: "",
    });
  };

  const handleTitleDoubleClick = () => {
    setTitle((e) =>
      e === "Double Click Me"
        ? "Event Activated! 🎉"
        : "Double Click Me"
    );
  };

  return (
    <div
      onContextMenu={(e) => {
        e.preventDefault();
        alert("Right-click is disabled on this form!");
      }}
    >
      <div className="form-container">
        <h1>React Event Handling Form</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your E-mail"
            value={formData.email}
            onChange={handleChange}
          />
          <select name="city" value={formData.city} onChange={handleChange}>
            <option value="">Select City</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Vadodara">Vadodara</option>
            <option value="Surat">Surat</option>
            <option value="Rajkot">Rajkot</option>
          </select>
          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />
          <input
            type="number"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="button" onClick={() => handleCopy(formData.email)} className="copy">
            Copy Email to Clipboard
          </button>

          <button type="submit" onClick={handleClick}>
            Submit
          </button>
          <button type="button" onClick={handleReset} className="reset">
            Reset
          </button>
          <button onDoubleClick={handleTitleDoubleClick} className="double">
            {title}
          </button>
          <button
            draggable
            onDragStart={() => console.log("Dragging started")}
            className="drag"
          >
            Drag me
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
