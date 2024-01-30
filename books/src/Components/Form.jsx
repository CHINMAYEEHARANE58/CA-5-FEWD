// importing modules and components
import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import Navbar from './Navbar'
import './Form.css'

// Functional component for the registration form
const Form = () => {

    // to store user's data
    const [userData, setUserData] = useState({
        name: "", 
        email: "",
        password: "",
        repeatPassword: ""
    })

    // State to manage registration success alert
    const [registerationAlert, setRegisterationAlert] = useState(false)
    const {register, handleSubmit, formState: { errors }, watch} = useForm()

    // Function to validate repeat password input
    const validateRepeatPassword = (value) => {
        const password = watch('password')
        return value === password || 'Passwords do not match'
    };

    // Function to handle form submission
    const onSubmit = (e) => {
        setRegisterationAlert(true)
        console.log(e)
    }

    // Function to handle the user data
    let name, value;
    const handleData = (e) =>{
        name = e.target.name
        value = e.target.value

        setUserData({...userData, [name]:value})
    }

  return (
    <div>
        <Navbar/>
        {registerationAlert && (<div> <p className='successMessage'>Registration Successful!!</p> </div>)}
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <h1>CREATE ACCOUNT</h1>

            {/* Input box for Name */}
            <div className='inputBox'>
                <input type="text" name='name' placeholder='Name' onChange={handleData} {...register("name", {required: "Name is required!", 
                minLength: {value: 3, message: "Name must be more than 3 charachters"}, 
                maxLength:{value: 30, message:"Name cannot be more than 30 charachters"},
                })}/>
                {errors.name && <p className='err' >{errors.name.message}</p>}
            </div>

            {/* Input box for Email */}
            <div className='inputBox'>
                <input type="email" name='email' placeholder='Email' onChange={handleData} {...register("email", 
                {required: "Email is required!", 
                pattern:{value: /^\S+@\S+$/i}, 
                message: "Invalid Email"}
                )} />
                {errors.email && <p className='err'>{errors.email.message}</p>}
            </div>

            {/* Input box for Password */}
            <div className='inputBox'>
                <input type="password" name='password' placeholder='Password' onChange={handleData} {...register("password", 
                {required: "Password is required!",  
                minLength: {value: 10, message: "Password must contain atleast 10 charachters"}, 
                pattern:{value: /^(?=.*[!@#$%^&*])/, message: "Password must contain a special charachter"}
                })}/>
                {errors.password && <p className='err'>{errors.password.message}</p>}
            </div>

            {/* Input box for confirming password */}
            <div className='inputBox'>
                <input type='password' name='repeatPassword' placeholder='Repeat Password' onChange={handleData} {...register('repeatPassword', 
                {required: 'Repeat the Password',
                validate: validateRepeatPassword,
                })}/>
                {errors.repeatPassword && <p className='err'>{errors.repeatPassword.message}</p>}
            </div>

            
            <input className='submit' type="submit" value={"sign up"}/>
        </form>
      
    </div>
  )
}

export default Form
