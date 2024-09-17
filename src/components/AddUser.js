// src/components/AddUser.js
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);

    try {
      // Add a new document with a generated ID
      await addDoc(collection(db, "users"), {
        name: name,
        email: email,
      });
      setSuccess(true);
      setName("");  // Clear input after successful submission
      setEmail(""); // Clear input after successful submission
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div>
      <h2>Add User</h2>
      {success && <p style={{ color: "green" }}>User added successfully!</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label style={{marginRight:10}}>Name:</label>
          <input
            class="nameinput"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label style={{marginRight:10}}>Email:</label>
          <input
            class="emailinput"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button class="submit" type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
