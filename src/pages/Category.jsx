import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Corrected import
import { toast } from "react-toastify";
import CONFIG from "../config/constant";
import { databases } from "../config/appwriteConfig";
import { Query } from "appwrite";
import { useAuth } from "../context/AuthContext";
import CategoryLayout from "../components/CategoryLayout";

function Category() {
  const [categories, setCategories] = useState([]);
  const { DATABASE_ID, COLLECTION_ID } = CONFIG;
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
    if (user === null) return;

    if (user?.labels?.[0] !== "admin") {
      navigate("/");
    } else {
      setIsAuthChecked(true);
    }
  }, [user, navigate]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await databases.listDocuments(
          DATABASE_ID,
          COLLECTION_ID,
          [Query.equal("userId", [user?.$id])]
        );

        console.log("Fetched User Categories:", response.documents);
        setCategories(response.documents);
      } catch (error) {
        toast.error(error.message);
      }
    };

    if (isAuthChecked && user?.$id) {
      fetchCategory();
    }
  }, [isAuthChecked, user?.$id, DATABASE_ID, COLLECTION_ID]);

  if (!isAuthChecked) return null;

  return (
    <div className="p-6 bg-white dark:bg-gray-800 shadow-lg h-full">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
          Categories
        </h2>
        <Link
          to="/add-category"
          className="px-5 py-2 text-white rounded bg-indigo-600 hover:bg-indigo-700 transition"
        >
          Add
        </Link>
      </div>
      <table className="min-w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
            <th className="py-2 px-4 border-b">Image</th>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">User ID</th>
            <th className="py-2 px-4 border-b">Category Name</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <CategoryLayout
              key={category.$id}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf6zoRR_FPG7f2knECoYTgOuETejMYPg71vg&s"
              name={category.categoryName}
              id={category.$id}
              userID={category.userId}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Category;
