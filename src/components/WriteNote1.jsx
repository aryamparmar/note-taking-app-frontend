import axios from 'axios';
import { XSquare  } from 'lucide-react';
import { useRef, useState } from 'react';


const WriteNote1 = ({onClose1, id, showToast1}) => {
  
  const ref = useRef();
  const closeNote = (e) => {
    if(ref.current===e.target){
        onClose1();
    }
  }

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <>
    <div ref={ref} onClick={closeNote} className='w-screen h-screen fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-10'>
      <div className='mt-10 mx-[5rem] flex flex-col text-slate-700 bg-slate-700 py-10 px-10 bg-opacity-10 rounded-lg max-sm:px-0.5 max-sm:mx-[0.5rem] z-20'>
        <button className='place-self-end px-8' onClick={onClose1}><XSquare size={40}/></button>
        <div className='flex flex-col gap-5 justify-center mx-auto w-[25rem] md:w-[34rem] lg:w-[45rem] xl:w-[60rem] max-sm:w-[18rem]'>
          <h1 className='font-extrabold text-slate-700 text-[2.5rem] cursor-pointer hover:drop-shadow-lg'>Notes</h1>
          <input onChange={(e)=>{
            setTitle(e.target.value)
          }} type="text" placeholder='Titile' required className='bg-slate-700 rounded-md py-2 px-2 font-semibold text-lg text-white '/>
          <textarea onChange={(e)=>{
            setDescription(e.target.value)
          }} placeholder='Description' required className='resize-none h-[10rem] bg-slate-700 rounded-md py-2 px-2 font-semibold text-lg text-white'/>
          <a onClick={()=>{
            
           
              console.log(id)
              // axios.put('https://note-taking-app-backend-wpdj.onrender.com/v1/notes/',{
              axios.put('https://note-taking-app-backend-wpdj.onrender.com/v1/notes/',{
                title,
                description
              },{
                headers:{
                  id:id
                }
              }).then((res)=>{
              if(res.data.success===true){
                showToast1()
              }
              onClose1()
              })
          }} className="relative">
              <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-slate-700"></span>
              <span className=" fold-bold relative  h-full w-full rounded border-2 border-slate-700   px-3 py-1  text-base font-bold bg-[#9981EF]  text-slate-900 hover:bg-[#653fe7] flex   items-center justify-center gap-5">SUBMIT</span>
              </a>
        </div>
      </div>
    </div>
    </>
  )
}

export default WriteNote1
