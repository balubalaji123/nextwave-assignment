import React, { useState } from "react";
import "../styles/ResourceForm.css";
import AddResource from "../images/add-resource.png";
import axios from "axios"; // Import axios for making HTTP requests

function AddResourceForm() {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({}); // State for validation errors
  const [toastMessage, setToastMessage] = useState(""); // State for toast message

  const validateForm = () => {
    const newErrors = {};
    if (!name) {
      newErrors.name = "Name is required";
    }
    if (!link) {
      newErrors.link = "Link is required";
    } else if (!/^(http|https):\/\/[^ "]+$/.test(link)) {
      newErrors.link = "Invalid URL format";
    }
    if (!description) {
      newErrors.description = "Description is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post(
          "https://media-content.ccbp.in/website/react-assignment/add_resource.json",
          {
            name,
            link,
            description,
          }
        );
        console.log(response.data); // Handle successful response (for demo)
        setToastMessage("Resource added successfully!");
      } catch (error) {
        console.error(error); // Handle errors appropriately in production
        setToastMessage("An error occurred. Please try again later.");
      } finally {
        setName("");
        setLink("");
        setDescription("");
        setErrors({}); // Clear errors and form data
      }
    }
  };

  return (
    <div className="resource-form-container">
      <div className="back-option"></div>
      <div className="resource-form">
        <div className="resource-form-heading"> Add a Resource</div>
        <form onSubmit={handleSubmit} className="addResourceForm">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="error-msg">
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <label>Link:</label>

          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <div className="error-msg">
            {errors.link && <span className="error">{errors.link}</span>}
          </div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="error-msg">
            {errors.description && (
              <span className="error">{errors.description}</span>
            )}
          </div>
          <button
            className="resource-form-button"
            type="submit"
            disabled={Object.keys(errors).length > 0}
          >
            Create
          </button>
          {toastMessage && <div className="toast">{toastMessage}</div>}
        </form>
      </div>
      <div className="resource-form-image">
        <img src={AddResource} />
      </div>
    </div>
  );
}

export default AddResourceForm;
