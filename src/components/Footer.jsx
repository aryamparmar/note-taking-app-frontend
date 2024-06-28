import github from '../assets/github.ico'
import twitter from '../assets/twitter.ico'
import linkedin from '../assets/linkedin.ico'
import instagram from '../assets/instagram.ico'
import { useNavigate } from 'react-router-dom'
const Footer = () => {
    let navigate = useNavigate();
  return (
    <div className='xl:px-[15rem] px-[2rem] md:px-[6rem] flex items-start justify-between px-[1.5rem]  py-10 max-sm:flex-col max-sm:text-center max-sm:items-center max-sm:justify-center max-sm:gap-8 bg-gradient-to-r from-[#B7ADFF] to-[#DEC1FF]'>
      <div className='flex flex-col  max-sm:gap-8 sm:space-y-9'>
      <h1  className="font-extrabold text-slate-700 text-[1.8rem] cursor-pointer hover:drop-shadow-lg">Note App</h1>
      <ul className='flex gap-5 items:center'>
        <li><a href="https://github.com/Vinesh001"><img className='w-7 hover:shadow-xl' src={github} alt="github" /></a></li>
        <li> <a href="https://www.linkedin.com/in/vinesh-0294ab22b/"><img className='w-7 hover:shadow-xl' src={linkedin}  alt="linkedin" /></a></li>
        <li> <a href="https://twitter.com/VineshBaghel5"><img className='w-7 hover:shadow-xl' src={twitter}  alt="twitter" /></a></li>
      </ul>
      </div>
      <div>
        <ul className='flex flex-col gap-1'>
            <li><a className='cursor-pointer font-semibold text-md text-slate-700 hover:text-slate-900' onClick={() => {
                navigate('/home')
              }}>Home</a></li>
            <li><a className='cursor-pointer font-semibold text-md text-slate-700 hover:text-slate-900' onClick={() => {
                navigate('/note')
              }}>Notes</a></li>
            <li><a className='cursor-pointer font-semibold text-md text-slate-700 hover:text-slate-900' onClick={() => {
                navigate('/user')
              }}>User Profile</a></li>
            <li ><a className='cursor-pointer font-semibold text-md text-slate-700 hover:text-slate-900'  onClick={() => {
                navigate('/user')
              }}>Log-Out</a></li>
            
        </ul>
      </div>
      <div className='flex flex-col justify-between space-y-12'>
            <a className="relative" onClick={()=>{
              navigate('/home')
            }}>
            <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-slate-700"></span>
            <span className="cursor-pointer fold-bold relative inline-block h-full w-full rounded border-2 border-slate-700 px-3 py-1 text-base font-bold text-white transition duration-100 hover:bg-[#9981EF]  hover:text-slate-900 dark:bg-transparent flex justify-center">Home</span>
            </a>
            <p className='text-md font-semibold text-slate-700'>@ copyright by VINESH</p>
      </div>
    </div>
  )
}

export default Footer
