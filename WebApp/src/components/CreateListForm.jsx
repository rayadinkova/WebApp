import "../styles/components_styles/createlistform.css";
import React, { useState } from "react";
import { BiSolidLockAlt } from "react-icons/bi";

export default function CreateListForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className="create-list-form">
          <input
            type="text"
            name="title"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="List name*"
            className="list-name"
          />
          <input
            type="text"
            name="description"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Description"
            className="list-description"
          />
        </form>
        <div className="createlist-visibility">
          <div className="createlist-visibility-text">
            <p>Visibility of your list</p>
          </div>

          <div className="createlist-visibility-status">
            <p>Private</p>
            <BiSolidLockAlt />
          </div>
        </div>
      </div>
    </>
  );
}
