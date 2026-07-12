import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const Form = ({ setUser, setToggle, editData, setEditData, user }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (editData) {
      reset({
        name: editData.name,
        Username: editData.Username,
        email: editData.email,
        img: editData.img,
      });
    }
  }, [editData, reset]);

  const submitHandle = (data) => {
    if (editData) {
      // Update user
      const updatedUsers = user.map((item) => {
        if (item.id === editData.id) {
          return {
            ...data,
            id: editData.id,
          };
        }

        return item;
      });

      setUser(updatedUsers);
      setEditData(null);
    } else {
      // Add new user
      const newUser = {
        ...data,
        id: Date.now(),
      };

      setUser((previousUsers) => [...previousUsers, newUser]);
    }

    reset();
    setToggle((pre) => !pre);
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-5">
      <form
        onSubmit={handleSubmit(submitHandle)}
        className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl"
      >
        <h1 className="mb-2 text-center text-3xl font-bold text-slate-800">
          Create User
        </h1>

        <p className="mb-7 text-center text-sm text-slate-500">
          Enter user details below
        </p>

        <div className="mb-4">
          <label className="mb-2 block font-semibold text-slate-700">
            Name
          </label>

          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            placeholder="Enter full name"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
          {errors.name && (
            <p className="ml-4 pt-2 text-red-700">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="mb-2 block font-semibold text-slate-700">
            Username
          </label>

          <input
            {...register("Username", { required: "Username is required" })}
            type="text"
            placeholder="Enter username"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
          {errors.Username && (
            <p className="ml-4 pt-2 text-red-700">{errors.Username.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="mb-2 block font-semibold text-slate-700">
            Email
          </label>

          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email",
              },
            })}
            type="email"
            placeholder="Enter email address"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
          {errors.email && (
            <p className="ml-4 pt-2 text-red-700">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-6">
          <label className="mb-2 block font-semibold text-slate-700">
            Image URL
          </label>

          <input
            {...register("img", { required: "Image URL is required" })}
            type="url"
            placeholder="Paste image URL"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
          {errors.img && (
            <p className="ml-4 pt-2 text-red-700">{errors.img.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-blue-600 py-3 font-bold text-white transition hover:bg-blue-700"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default Form;
