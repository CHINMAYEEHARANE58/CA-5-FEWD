import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import Navbar from './Navbar'

const Form = () => {
    const [registerationAlert, setRegisterationAlert] = useState(false)
    const {register, handleSubmit, formState: { errors }, watch} = useForm()

    const validateRepeatPassword = (value) => {
        const password = watch('password')
        return value === password || 'Passwords do not match'
    };

    const onSubmit = () => {
        setRegisterationAlert(true)
    }

  return (
    <div>
        <Navbar/>
        {registerationAlert && (<div> <p>Registration Successful!!</p> </div>)}
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input type="text" name='name' placeholder='Name' {...register("name", {required: "Name is required!", 
                minLength: {value: 3, message: "Name must be more than 3 charachters"}, 
                maxLength:{value: 30, message:"Name cannot be more than 30 charachters"},
                })}/>
                {errors.name && <p className='err' >{errors.name.message}</p>}
            </div>

            <div>
                <input type="email" name='email' placeholder='Email' {...register("email", 
                {required: "Email is required!", 
                pattern:{value: /^\S+@\S+$/i}, 
                message: "Invalid Email"}
                )} />
                {errors.email && <p className='err'>{errors.email.message}</p>}
            </div>

            <div>
                <input type="password" name='password' placeholder='Password' {...register("password", 
                {required: "Password is required!",  
                minLength: {value: 10, message: "Password must contain atleast 10 charachters"}, 
                pattern:{value: /^(?=.*[!@#$%^&*])/, message: "Password must contain a special charachter"}
                })}/>
                {errors.password && <p className='err'>{errors.password.message}</p>}
            </div>

            <div>
                <input type='password' name='repeatPassword' placeholder='Repeat Password' {...register('repeatPassword', 
                {required: 'Repeat the Password',
                validate: validateRepeatPassword,
                })}/>
                {errors.repeatPassword && <p className='err'>{errors.repeatPassword.message}</p>}
            </div>


            <input type="submit" value={"sign up"}/>
        </form>
      
    </div>
  )
}

export default Form
