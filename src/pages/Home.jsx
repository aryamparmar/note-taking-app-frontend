import { useState , useEffect } from "react";
import axios from "axios";
import home from "../assets/home.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WriteNote from "../components/WriteNote";
import { useNavigate } from "react-router-dom";
import InitialPage from "./InitialPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Home = () => {
  const [showNote, setShowNote] = useState(false);
  const [load, setLoad] = useState(false)
  const [toast0, setToast] = useState(false)
  const navigate = useNavigate();
  const [v, setV]= useState(false)
  const [altKey, setAltkey]= useState(false)

    useEffect(()=>{
        const token = localStorage.getItem('token');
        axios.get('https://note-taking-app-backend-3jw8.vercel.app/v1/user/checkUser/',{
            headers:{
                Authorization:`Bearer ${token}`
            }
        }).then((res)=>{
            if(res.data.success){
              toast("Reloade")
                {navigate('/home')}
            }
            else{
                {navigate('/signin')}
            }
        })
        if(toast0==true){
              toast.success('You add a note');
              setToast(false)}
              
    }, [showNote])

  //   useEffect(()=>{
      
  //     if(v&&altKey){
  //       console.log('vineshadfsdfdfdfsdfdf');
  //       setShowNote(true)
  //       setV(false)
  //       setAltkey(false)
  //     }
  //   },[v,altKey])
  //  { document.addEventListener('keypress', (e)=>{
  //     if(e.key.toLocaleLowerCase()==='v'){
  //       setV(true)
  //     }
  //   })}
  //  { document.addEventListener('keypress', (e)=>{
  //     if(e.altKey){
  //       setAltkey(true)
  //     }
  //   })}


  // useState(()=>{

  //   if (window.performance.navigation.type == window.performance.navigation.TYPE_RELOAD) {
  //     navigate('/')
  //   }
  // })
  return (
    <>
      {/* {load&&<InitialPage/>} */}
      <ToastContainer />
      <Navbar></Navbar>
      {showNote && (
        <WriteNote onClose={() => setShowNote(false)} showToast={()=>{setToast(true)}}/>
      )}
      <div className="xl:px-[15rem] max-sm:pt-[1rem] max-sm:px-[0.5rem] sm:px-[2rem] md:px-[6rem] py-[5.6rem] flex items-center justify-between py-10 max-sm:flex-col-reverse max-sm:text-center max-sm:items-center max-sm:justify-center">
        <div className="w-1/2 flex flex-col gap-[2rem] items-start justify-center">
          <h1 className="font-extrabold text-[2.9rem] text-slate-700 max-sm:text-[1.8rem]">
            Note App
          </h1>
          <p className="font-semibold text-slate-700 text-md">
            This is your personal note taking app in which you can note down all
            your important notes{" "}
          </p>
          <div className="flex gap-2 max-lg:flex-col">
            <a
              className="relative"
              onClick={() => {
                setShowNote(true);
                // navigate('/note')
              }}
            >
              <span className="cursor-pointer absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-slate-700"></span>
              <span className="cursor-pointer flex justify-center font-bold relative inline-block h-full w-full rounded border-2 border-slate-700   px-3 py-1 text-base font-bold text-white transition duration-100 hover:bg-[#9981EF]  hover:text-slate-900 dark:bg-transparent  px-[2rem]">
                Write Your Note
              </span>
            </a>
            <a
              className="relative"
              onClick={() => {
                navigate('/note')
              }}
            >
              <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-slate-700"></span>
              <span className="cursor-pointer fold-bold relative inline-block h-full w-full rounded border-2 border-slate-700 px-3 py-1 text-base font-bold text-white transition duration-100 hover:bg-[#9981EF]  hover:text-slate-900 dark:bg-transparent light:text-slate-900 px-[4.5rem] max-sm:px-[3rem]">
                Notes
              </span>
            </a>
          </div>
        </div>
        <div className="w-1/2 max-sm:w-[20rem]">
          <img src={home} alt="vinesh" />
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
