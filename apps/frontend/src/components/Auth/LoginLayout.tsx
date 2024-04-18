import React from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';
import { LoginInput } from '@repo/types/Login';
import eyeIcon from '../../assets/hidden.png';
const LoginLayout = () => {
    //TODO Do input validation
    const {handleSubmit, register, formState: {errors}} = useForm<LoginInput>();
    const onSubmit: SubmitHandler<LoginInput> = async (data) => {
        console.log(data);
    }
    return <div className='bg-sky-500/70 p-3 md:p-5 rounded-lg w-3/4 max-w-fit'>
        <h1 className='md:text-4xl text-3xl text-center m-3 font-Lobster'>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
            <div className='flex flex-col w-full gap-1'>
                <label htmlFor='email'className='text-lg'>Email</label>
                <input type='email' placeholder='Email' id='email' className='focus:outline-none p-2 rounded-md'
            {...register("email",{required:true})}/>
            {errors.email && <span>This field is required</span>}
            </div>
            <div className='flex flex-col w-full text-lg gap-1'>
                <label htmlFor='password'>Password</label>
                <div className='flex justify-between gap-1'>
                <input type='password' placeholder='Password' id='password' {...register("password",{required:true})}
                className='w-full focus:outline-none p-2 rounded-md'/>
                <button onClick={()=>{
                    const password = document.getElementById('password') as HTMLInputElement;
                    if(password.type === 'password'){
                        password.type = 'text';
                    } else {
                        password.type = 'password';
                    }
                }}>
                    <img src={eyeIcon} alt='hidden'/>
                </button>
                </div>
                
            {errors.password && <span>This field is required</span>}
            </div>
            
            <button className='px-3 py-2 bg-black text-white rounded-md mt-5 text-lg font-bold' type='submit'>Login</button>
        </form>
    </div>
}
export default LoginLayout;