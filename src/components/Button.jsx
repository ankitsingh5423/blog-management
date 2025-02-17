import React from "react";

const Button = ({ className, content }) => {
  return (
    <button
      type="button"
      className={`px-5 py-1 text-white rounded cursor-pointer ${className}`}
    >
      {content}
    </button>
  );
};

export default Button;
