import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NoteCard from "./NoteCard";
import { useEffect, useState } from "react";
import axios from "axios";
import WriteNote1 from "../components/WriteNote1";
import { useNavigate } from "react-router-dom";
import WriteNote from "../components/WriteNote";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NoteRendering = () => {
  const [notes, setNotes] = useState([]);
  const [showNote, setShowNote] = useState(false);
  const [showNote1, setShowNote1] = useState(false);
  const [del, setDelete] = useState(false);
  const [toast1, setToast1] = useState(false);
  const [toast0, setToast] = useState(false);
  const [toastdel, setToastDel] = useState(false);
  const [id, setId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
    .get("https://note-taking-app-backend-wpdj.onrender.com/v1/notes/", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
        // toast.success('Tode Deleted!')
        console.log(res.data.notes);
        setNotes(res.data.notes.reverse());
      });
      if(toast1==true){
        toast.success('Note Updated');
        setToast1(false);
      }
      if(toast0==true){
        toast.success('Note Added');
        setToast(false);
      }
      if(toastdel==true){
        toast.error('Note Deleted');
        setToastDel(false);
      }
    }, [showNote, showNote1, del]); 

  
  //   useEffect(()=>{
//     const token = localStorage.getItem('token');
//     axios.get('https://note-taking-app-backend-wpdj.onrender.com/v1/user/checkUser/',{
//         headers:{
//             Authorization:`Bearer ${token}`
//         }
//     }).then((res)=>{
//         if(res.data.success){
//             {navigate('/user')}
//         }
//         else{
//             {navigate('/signin')}
//         }
//     })
    
// }, [])

  return (
    <>
    <ToastContainer></ToastContainer>
      {/* {load&&<InitialPage></InitialPage>} */}
      {showNote&&<WriteNote onClose={() => {setShowNote(false);}} showToast={()=>{setToast(true)}}/>}
      {showNote1&&<WriteNote1 onClose1={() => {setShowNote1(false);}} showToast1={()=>{setToast1(true)}} id={id}/>}
      
      <Navbar></Navbar>
      <div >
      <a className="relative flex justify-center  items-center mt-[2rem] cursor-default" >
            <span className="cursor-pointer absolute flex justify-center itmes-center mt-2 ml-2 h-[2.5rem] w-[20rem] rounded bg-slate-700 max-sm:w-[15rem]"></span>
            <span onClick={()=>{
              setShowNote(true)
            }} className="cursor-pointer text-center flex items-center justify-center fold-bold relative inline-block h-[2.5rem] w-[20rem] rounded border-2 border-slate-700 px-2 text-base font-bold text-white transition duration-100 hover:bg-[#9981EF]  hover:text-slate-900 dark:bg-transparent max-sm:w-[15rem]">Write down your thoughts</span>
        </a>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  my-[5rem] mx-[5rem] gap-5">
          {notes.map((note) => (
            <NoteCard
              key={note._id}
              title={note.title}
              description={note.description}
              date={note.date}
              onDelete={() => handleDelete({id:note._id, setDelete, del,setToastDel})}
              onUpdate={() => handleUpdate({id: note._id, setId, setShowNote1})
              }
            />
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

function handleDelete({id, setDelete, del, setToastDel}) {
  axios
    .delete("https://note-taking-app-backend-wpdj.onrender.com/v1/notes/", {
      headers: {
        id: id,
      },
    })
    .then((res) => {
      if(del==true?setDelete(false):setDelete(true));
      setToastDel(true)
      // setId(id);
      // console.log(res);
    });
}
function handleUpdate({ id, setId, setShowNote1 }) {
  setShowNote1(true);
  
  setId(id);
}

export default NoteRendering;
