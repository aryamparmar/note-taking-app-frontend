import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import userImage from "../assets/userProfile.png";
import Button from "../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import InitialPage from "./InitialPage";

const UserProfile = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [load, setLoad] = useState(false)

  useEffect(() => {
    axios
      .get("https://note-taking-app-backend-wpdj.onrender.com/v1/user/checkUser", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data.userData[0]);
        setName(res.data.userData[0].name);
        setEmail(res.data.userData[0].email);
        setUserName(res.data.userData[0].userName);
      });
  }, []);

  // const navigate = useNavigate();
  // useState(()=>{

  //   if (window.performance.navigation.type == window.performance.navigation.TYPE_RELOAD) {
  //     setLoad(true)
  //     console.info("This page is reloaded");
  //   }
  // })
  useEffect(()=>{
    const token = localStorage.getItem('token');
    axios.get('https://note-taking-app-backend-wpdj.onrender.com/v1/user/checkUser/',{
        headers:{
            Authorization:`Bearer ${token}`
        }
    }).then((res)=>{
        if(res.data.success){
            {navigate('/user')}
        }
        else{
            {navigate('/signin')}
        }
    })
    
}, [])

  return (
    <>
      {load&&<InitialPage/>}
      <Navbar></Navbar>
      <div className="xl:px-[15rem] px-[2rem] max-sm:px-[0.5rem] md:px-[6rem] py-[5.6rem] flex items-center justify-between py-10 max-md:flex-col-reverse max-md:text-center max-md:items-center max-md:justify-center">
        <div className="w-1/2 flex flex-col gap-[2rem]">
          <h1 className="font-extrabold text-[2.9rem] text-slate-700 max-sm:text-[1.5rem]">
            User Details
          </h1>
          <div className="flex justify-between max-md:ml-3 max-sm:mx-auto">
            <div className="flex flex-col gap-4 text-start">
              <h3 className="font-bold max-sm:font-semibold text-slate-700">UserName</h3>
              <h3 className="font-bold max-sm:font-semibold text-slate-700">Name</h3>
              <h3 className="font-bold max-sm:font-semibold text-slate-700">Email</h3>
            </div>
            <div className="flex flex-col gap-4 text-start">
              <span className="font-bold max-sm:font-semibold text-slate-700">:</span>
              <span className="font-bold max-sm:font-semibold text-slate-700">:</span>
              <span className="font-bold max-sm:font-semibold text-slate-700">:</span>
            </div>
            <div className="flex flex-col gap-4 text-start">
              <h3 className="font-bold max-sm:font-semibold text-slate-700">{userName}</h3>
              <h3 className="font-bold max-sm:font-semibold text-slate-700">{name}</h3>
              <h3 className="font-bold max-sm:font-semibold text-slate-700">{email}</h3>
            </div>
          </div>

          <a
            className="relative"
            href="/"
            onClick={() => {
              localStorage.setItem('token', '')
            }}
          >
            <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-slate-700"></span>
            <span className="flex items-center justify-center fold-bold relative inline-block h-full w-full rounded border-2 border-slate-700 px-3 py-1 text-base font-bold text-white transition duration-100 hover:bg-[#9981EF]  hover:text-slate-900 dark:bg-transparent">
              LOGOUT
            </span>
          </a>
        </div>
        <div className="w-1/2 border-none">
          <img src={userImage} alt="" />
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default UserProfile;
