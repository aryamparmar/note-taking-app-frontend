import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InitialPage from "./InitialPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="font-extrabold text-center text-[3rem] text-slate-700 my-7 p-3">
          Sign In
        </h1>
        <form className="flex flex-col gap-4">
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Email"
            id="email"
            className="bg-slate-100 p-3 rounded-lg"
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Password"
            id="password"
            className="bg-slate-100 p-3 rounded-lg"
          />
          <a
            onClick={() => {
              axios
                .post(
                  "https://note-taking-app-backend-wpdj.onrender.com/v1/user/signin",
                  {
                    email,
                    password,
                  }
                )
                .then((res) => {
                  if (res.data.success) {
                    localStorage.setItem("token", res.data.token);
                    toast.success("Logged In Successfully!", {
                      icon: "🚀",
                    });
                    navigate("/home");
                  } else {
                    toast.error(res.data.message);
                  }
                });
            }}
            className="relative"
          >
            <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-slate-700"></span>
            <span className="cursor-pointer text-center fold-bold relative inline-block h-full w-full rounded border-2 border-slate-700  px-3 py-3 text-base font-bold text-white transition duration-100 hover:bg-[#9981EF]  hover:text-slate-900 dark:bg-transparent">
              SIGN IN
            </span>
          </a>
        </form>
        <div className="flex gap-2 mt-5">
          <p>Dont have an account?</p>
          <Link to="/signup">
            <span className="text-blue-500">Sign Up</span>
          </Link>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
};

export default Signin;
