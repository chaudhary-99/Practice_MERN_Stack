import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../assets/Logo.svg';
import toast from 'react-hot-toast';
const Navbar = (props) => {
    let isLoggedIn=props.isLoggedIn;
    let setisLoggedIn=props.setisLoggedIn;
  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
        <Link to="/"><img alt='logoImage' src={logo} width={160} height={32} loading="lazy"  /></Link>
        <nav>
            <ul className="flex gap-x-6 text-gray-100">
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>

            </ul>
        </nav>
        <div className="flex items-center gap-x-4 text-rgray-100">
            {
                !isLoggedIn && <Link to="/login"> <button className="bg-gray-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Login</button></Link>

            }
            {
               !isLoggedIn &&   <Link to="/signup"> <button className="bg-gray-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Sign Up</button></Link>
 
            }
             {
                isLoggedIn &&   <Link to="/"> 
                <button className="bg-gray-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700"  onClick={
                  ()=>{setisLoggedIn(false);
                   toast.success('Logged Out');
                 }} >Log Out</button></Link>

            }
             {
                isLoggedIn &&    <Link to="/dashboard"> <button className="bg-gray-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Dashboard</button></Link>

            }
        </div>
      
    </div>
  )
}

export default Navbar
