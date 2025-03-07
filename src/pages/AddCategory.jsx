import React, { useState } from "react";
import { toast } from "react-toastify";
import { databases } from "../config/appwriteConfig";
import CONFIG from "../config/constant";
import { useNavigate } from "react-router";
import { ID } from "appwrite";
import { useAuth } from "../context/AuthContext";

const AddCategory = () => {
  const [category, setCategory] = useState("");
  const { DATABASE_ID, COLLECTION_ID } = CONFIG;
  const { user } = useAuth();

  if (!user) {
    toast.error("User not logged in!");
    return;
  }

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        { categoryName: category, userId: user.$id }
      );
      console.log(DATABASE_ID);

      navigate("/category");

      toast.success("Category added successfully.");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Category</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Category Name Input */}
        <div>
          <label
            className="block text-gray-700 font-medium mb-1"
            htmlFor="category"
          >
            Category Name
          </label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter category name"
            className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Add Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Add Category
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
