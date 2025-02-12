import React from "react";

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
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Category Name</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-gray-900 dark:text-gray-300 text-center border-b">
              <td className="py-2 px-4">this a category</td>
              <td className="py-2 px-4">this is category Name</td>
              <td className="py-2 px-4 flex gap-2 justify-center">
                <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Edit
                </button>
                <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>
            <tr className="text-gray-900 dark:text-gray-300 text-center border-b">
              <td className="py-2 px-4">this a category</td>
              <td className="py-2 px-4">this is category Name</td>
              <td className="py-2 px-4 flex gap-2 justify-center">
                <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Edit
                </button>
                <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>
            <tr className="text-gray-900 dark:text-gray-300 text-center border-b">
              <td className="py-2 px-4">this a category</td>
              <td className="py-2 px-4">this is category Name</td>
              <td className="py-2 px-4 flex gap-2 justify-center">
                <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Edit
                </button>
                <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Category;
