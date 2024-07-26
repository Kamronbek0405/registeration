import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { request } from "../config/request";
import { saveState } from "../config/storage";

export const UserLogin = () => {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm();
  const submit = (data) => {
    request
      .post("/login", data)
      .then((res) => {
        if (res.data) {
          saveState("user", {
            accessToken: res.data.accessToken,
            ...res.data.user,
          });
          navigate("/", { replace: true });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-medium text-white py-5">login</h1>
      <div>
        <form className="flex flex-col items-center gap-5" onSubmit={handleSubmit(submit)}>
          <input className="w-[300px] h-[50px] shadow-lg shadow-gray-400 hover:shadow-md  px-3 rounded-xl" {...register("email")} placeholder="email" type="email" />
          <input className="w-[300px] h-[50px] shadow-lg shadow-gray-400 hover:shadow-md  px-3 rounded-xl" {...register("password")} placeholder="password" type="password" />
          <button className="w-[150px] h-[50px] bg-blue-600 shadow-lg shadow-blue-400 hover:shadow-md active:bg-blue-500 text-white text-xl   italic  rounded-lg" type="submit">send</button>
        </form>
      </div>
    </div>
  );
};
