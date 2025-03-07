import React from "react";
import { toast } from "react-toastify";
import CONFIG from "../config/constant";
import { databases } from "../config/appwriteConfig";
import { Link } from "react-router";

function CategoryLayout({
  id,
  image,
  name,
  setCategories,
  categories,
  userID,
}) {
  // click on delete button
  // handle delete category
  // delete the selected category
  //  show the toast
  const { DATABASE_ID, COLLECTION_ID } = CONFIG;
  const handelDelete = async (id) => {
    try {
      await databases.deleteDocument(DATABASE_ID, COLLECTION_ID, id);
      const filteredCategories = categories.filter((category) => {
        return id != category.$id;
      });
      setCategories(filteredCategories);
      toast.success("Category Delete Sucessfully");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <tr className="text-gray-900 dark:text-gray-300 text-center border-b">
      <td className="py-2 px-4 size-[150px] h-[100px]">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </td>
      <td className="py-2 px-4">{id}</td>
      <td className="py-2 px-4">{userID}</td>
      <td className="py-2 px-4">{name}</td>
      <td className="py-2 px-4 ">
        <div className="flex gap-2 justify-center">
          <Link
            to={`/edit-category/${id}`}
            className=" px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Edit
          </Link>
          <button
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={() => {
              handelDelete(id);
            }}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}

export default CategoryLayout;
