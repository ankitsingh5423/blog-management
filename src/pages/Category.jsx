import React from "react";
import CategoryLayout from "../components/CategoryLayout";
import { categories } from "../components/Categories";

function Category() {
  return (
    <>
      <div className="p-6 bg-white dark:bg-gray-800 shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
          Categories
        </h2>
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
                  key={category.id}
                  image={category.image}
                  name={category.name}
                  id={category.id}
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
