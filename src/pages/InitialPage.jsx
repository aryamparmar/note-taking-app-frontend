import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"


const InitialPage = () => {
    const navigate = useNavigate();

    useEffect(()=>{
        const token = localStorage.getItem('token');
        axios.get('https://note-taking-app-backend-wpdj.onrender.com/v1/user/checkUser/',{
            headers:{
                Authorization:`Bearer ${token}`
            }
        }).then((res)=>{
            if(res.data.success){
                {navigate('/home')}
            }
            else{
                {navigate('/signin')}
            }
        })
        
    }, [])
        
    return(<> </>)
}


export default InitialPage
