import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


const Navbar = () => {

  const navigate = useNavigate();
  const [firstLetter, setFirstLetter] = useState('');
  useEffect(() => {
    axios
      .get("https://note-taking-app-backend-wpdj.onrender.com/v1/user/checkUser", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data.userData[0]);
        setFirstLetter(res.data.userData[0].name[0].toUpperCase());
      });
  }, []);

  return (
    <div className="xl:px-[15rem] px-[2rem] md:px-[6rem] flex justify-between items-center shadow-md bg-slate-100 py-3">
      <h1 className="font-extrabold sm:text-slate-700 text-transparent bg-clip-text bg-gradient-to-r from-[#5341FF] to-[#FF49E8] text-[1.8rem] cursor-pointer hover:drop-shadow-lg" onClick={()=>{
        navigate('/home')
      }}>Note App</h1>
      <ul className="flex gap-7">
        <li onClick={()=>{
          navigate('/home')
        }} className="transition font-bold text-slate-700 text-[1.1rem] cursor-pointer hover:text-[#9981EF] hover:drop-shadow-lg max-sm:hidden">Home</li>
        <li onClick={()=>{
          navigate('/note')
        }} className="transition font-bold text-slate-700 text-[1.1rem] cursor-pointer hover:text-[#9981EF] hover:drop-shadow-lg max-sm:hidden">Notes</li>
        <li onClick={()=>{
          navigate('/user')
        }} className="transition font-bold text-slate-700 text-[1.1rem] cursor-pointer hover:text-[#9981EF] hover:drop-shadow-lg max-sm:hidden">User</li>
      </ul>
      <div className="w-10 h-10 sm:text-white text-center flex items-center justify-center cursor-pointer font-bold text-[#681EFF] text-[1.5rem] rounded-full bg-gradient-to-r from-[#B7ADFF] to-[#DEC1FF] hover:shadow-md" onClick={()=>{navigate('/user')}}>{firstLetter}</div>
    </div>
  )
}

export default Navbar;
