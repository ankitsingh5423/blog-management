import React, { useEffect, useState } from "react";
import CategoryLayout from "../components/CategoryLayout";
import { Link } from "react-router";
import { toast } from "react-toastify";
import CONFIG from "../config/constant";
import { databases } from "../config/appwriteConfig";

function Category() {
  const [categories, setCategories] = useState([]);
  const { DATABASE_ID, COLLECTION_ID } = CONFIG;
  const fecthCategory = async () => {
    try {
      console.log(categories);

      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID
      );

      setCategories(response.documents);
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    fecthCategory();
  }, []);

  return (
    <>
      <div className="p-6 bg-white dark:bg-gray-800 shadow-lg h-full">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
            Categories
          </h2>
          {/* <Button
            className="bg-indigo-600"
            content="Add"
            onClick={navigate("/")}
          /> */}
          <Link
            to="/add-category"
            className=" px-5 py-1 text-white rounded cursor-pointer flex justify-center items-center bg-indigo-600"
          >
            Add
          </Link>
        </div>
        <table className="min-w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
              <th className="py-2 px-4 border-b">Image</th>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Category Name</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => {
              return (
                <CategoryLayout
                  key={category.$id}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf6zoRR_FPG7f2knECoYTgOuETejMYPg71vg&s"
                  name={category.categoryName}
                  id={category.$id}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Category;
