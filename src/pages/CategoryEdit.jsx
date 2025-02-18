import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import CONFIG from "../config/constant";
import { databases } from "../config/appwriteConfig";
import { toast } from "react-toastify";

const CategoryEdit = () => {
  const { categoryId } = useParams();
  const { DATABASE_ID, COLLECTION_ID } = CONFIG;
  const navigate = useNavigate();

  const fecthCategoryById = async (categoryId) => {
    try {
      const response = await databases.getDocument(
        DATABASE_ID,
        COLLECTION_ID,
        categoryId
      );

      setCategory(response.categoryName);
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    fecthCategoryById(categoryId);
  }, []);

  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      await databases.updateDocument(DATABASE_ID, COLLECTION_ID, categoryId, {
        categoryName: category,
      });

      navigate("/category");
      toast.success("Category is Updated Successfully.");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
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
            Update Category
          </button>
        </form>
      </div>
    </>
  );
};

export default CategoryEdit;
