import React from "react";
import { useForm } from "react-hook-form";
import { request } from "../config/request";
import { saveState } from "../config/storage";
import { useNavigate } from "react-router-dom";
import { UserLogin } from "../components/user-login";

export const Login = () => {
  const navigate = useNavigate();
  const [open, setOPen] = React.useState(false);
  const { handleSubmit, register, reset } = useForm();

  const registerUser = (data) => {
    request
      .post("/register", data)
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
    <div className="w-[400px] rounded-xl h-[500px]  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {open ? (
        <>
          <UserLogin />
        </>
      ) : (
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold text-white py-8">Registration</h1>
          <div>
            <form className="flex flex-col gap-5 " onSubmit={handleSubmit(registerUser)}>
              <input className="w-[300px] h-[50px] shadow-lg shadow-gray-400 hover:shadow-md  px-3 rounded-xl" {...register("name")} placeholder="Ismingizni kiriting" type="text" />
              <input className="w-[300px] h-[50px] shadow-lg shadow-gray-400 hover:shadow-md  px-3 rounded-xl" {...register("email")} placeholder="email" type="email" />
              <input className="w-[300px] h-[50px] shadow-lg shadow-gray-400 hover:shadow-md  px-3 rounded-xl" {...register("password")} placeholder="password" type="password" />
              <button className="w-[150px] h-[50px] bg-blue-600 shadow-lg shadow-blue-400 hover:shadow-md active:bg-blue-500 text-white text-xl   italic ml-20 rounded-lg" type="submit">send</button>
            </form>
          </div>
        </div>
      )}
      <button className="w-[150px] h-[50px] active:bg-green-300 bg-green-400 ml-32 mt-5 rounded-lg shadow-lg shadow-gray-500 hover:shadow-md text-white font-medium italic" onClick={() => setOPen(!open)}>
        {open ? "Registeration" : "Login parol kiritish"}
      </button>
    </div>
  );
};
