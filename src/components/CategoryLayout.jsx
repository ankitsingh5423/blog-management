import React from "react";

function CategoryLayout({ id, image, name }) {
  //   console.log(image);
  return (
    <tr className="text-gray-900 dark:text-gray-300 text-center border-b">
      <td className="py-2 px-4 size-[150px] h-[100px]">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </td>
      <td className="py-2 px-4">{id}</td>
      <td className="py-2 px-4">{name}</td>
      <td className="py-2 px-4 flex gap-2 justify-center">
        <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
          Edit
        </button>
        <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
          Delete
        </button>
      </td>
    </tr>
  );
}

export default CategoryLayout;
