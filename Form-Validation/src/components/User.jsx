import React from "react";

const User = ({ data, deleteHandel, updateHandel }) => {
  return (
    <div className="w-70 h-80 mt-5 ml-5 rounded-2xl bg-white p-6 text-center shadow-xl">
      <img
        src={data.img}
        alt="User"
        className="mx-auto mb-4 h-28 w-28 rounded-full object-cover"
      />

      <h2 className="text-2xl font-bold text-gray-800">{data.name}</h2>

      <p className="mt-1 font-semibold text-indigo-600">{data.Username}</p>

      <p className="mt-2 text-gray-500">{data.email}</p>
      <div className="flex justify-center gap-4 mt-4">
        <button
          className="bg-orange-600 pl-4 pr-4 pt-3 pb-3
         rounded-2xl cursor-pointer text-white"
          onClick={() => updateHandel(data)}
        >
          Update
        </button>
        <button
          className="bg-red-600 pl-4 pr-4 pt-3 pb-3
         rounded-2xl cursor-pointer text-white"
          onClick={() => deleteHandel(data.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default User;
