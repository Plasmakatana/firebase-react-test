import React from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

const RemoveUser = ({ userId, onDelete }) => {
  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (confirmDelete) {
      try {
        await deleteDoc(doc(db, "users", userId));
        onDelete(userId);  // Call onDelete to update the user list
      } catch (error) {
        console.error("Error deleting user: ", error);
      }
    }
  };

  return (
    <button class="delete" onClick={handleDelete} style={{ color: "red", marginLeft: "10px" }}>
      Delete
    </button>
  );
};

export default RemoveUser;