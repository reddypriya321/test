import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

function Logout() {
    const [authUser,setAuthUser]=useAuth()
    const handleLogout=()=>{
        try{
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("Users");
            toast.success("Logout Successfully")
            window.location.reload();

        }catch(error){
            toast.error("Error"+error.message)

        }
    }
  return (
    <div>
      <button className='bg-red-500 text-white px-3 py-2 rounded-md curser-pointer'
      onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
