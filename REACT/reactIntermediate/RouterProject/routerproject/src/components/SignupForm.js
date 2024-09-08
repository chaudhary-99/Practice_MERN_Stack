import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import Toast from 'react-hot-toast';
const SignupForm = ({ setisLoggedIn }) => {
    const [formData, setformData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmpassword: ""
    })

    const [showPassword, setshowPassword] = useState(false);
    const [accountType, setAccountType] = useState("student");
    function changeHandler(event) {
        setformData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value

        }
        ))
    }
    const navigate = useNavigate();
    function submitHandler(e) {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            Toast.error("Passwords do not match");
            return;
        }

        setisLoggedIn(true);
        Toast.success("Account Create");
        const accountData = {
            ...formData,
        };
        console.log(accountData);

        navigate("/dashboard");
    }
    return (
        <div>
            <div className="flex bg-richblack-800 p-1 gap-x-1 rounded-full max-w-max">
                <button
                    onclick={() => setAccountType("student")}
                    className={`${accountType === "student"
                        ? "bg-gray-900 text-gray-5"
                        : "bg-transparent text-gray-200 "
                        } py-2 px-5 rounded-full transition-all`}
                >
                    Student
                </button>
                <button
                    onclick={() => setAccountType("instructor")}
                    className={`${accountType === "instructor"
                        ? "bg-richblack-900 text-richblack-5"
                        : "bg-transparent text-richblack-200 "
                        } py-2 px-5 rounded-full transition-all`}
                >
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>
                <div className="flex gap-x-4">
                    <label htmlFor="" className="w-full">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">First Name <sup className="text-pink-200">*</sup></p>
                        <input type='text' required name='firstName' onChange={changeHandler} placeholder='Enter your First Name' value={formData.firstName} className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5" />
                    </label>
                    <label htmlFor="" className="w-full">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Last Name<sup className="text-pink-200">*</sup></p>
                        <input type='text' required name='lastName' onChange={changeHandler} placeholder='Enter your Last Name' value={formData.lastName} className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5" />
                    </label>
                </div>
                {/* Email Address */}
                <div>
                    <label htmlFor="" className="w-full">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Email Address <sup className="text-pink-200">*</sup></p>
                        <input required type='email' value={formData.email} onChange={changeHandler} placeholder='Enter email Address' name='email' className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5" />
                    </label>

                </div>
                {/* createpassword and Confirm Password */}
                <div>
                    <label htmlFor="" className="w-full relative">
                        <p className="text-[0.875rem] text-gray-5 mb-1 leading-[1.375rem]">Create Password <sup className="text-pink-200">*</sup></p>
                        <input required type={showPassword ? ("text") : ("password")} value={formData.password} onChange={changeHandler} placeholder='Enter Password' name='password' className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5" />
                        <span  className="absolute right-3 top-[38px] cursor-pointer z-10" onClick={() => setshowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />) : (<AiOutlineEye  fontSize={24} fill="#AFB2BF"/>)}
                        </span>
                    </label>
                    <label htmlFor="" className="w-full relative">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Confirm Password <sup className="text-pink-200">*</sup></p>
                        <input required type={showPassword ? ("text") : ("password")} value={formData.confirmpassword} onChange={changeHandler} placeholder='Enter Confirm Password' name='confirmpassword'  className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5" />
                        <span className="absolute right-3 top-[38px] cursor-pointer z-10" onClick={() => setshowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />) : (<AiOutlineEye fontSize={24} fill="#AFB2BF" />)}
                        </span> 
                    </label>
                    <button className="bg-yellow-500 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900 w-full">Create Account</button>

                </div>


            </form>

        </div>
    )
}

export default SignupForm
