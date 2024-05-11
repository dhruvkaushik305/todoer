import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginInput, LoginSchema } from '@repo/types/Login';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useSetRecoilState } from 'recoil';
import { userData } from '../../store/auth';
import { GrFormViewHide } from "react-icons/gr";
import { GrFormView } from "react-icons/gr";
import { Login } from '../../actions/authAction';
const LoginComponent: React.FC = () => {
    const setUser = useSetRecoilState(userData);
    const [showPassword, setShowPassword] = React.useState(false);
    const navigate = useNavigate();
    const { handleSubmit, register } = useForm<LoginInput>({ resolver: zodResolver(LoginSchema) });
    const onSubmit: SubmitHandler<LoginInput> = async (data) => {
        try {
            const result = await Login(data);
            if (result.success) {
                setUser(result.data!);
                toast.success(`Welcome back ${result.data!.name.split(' ')[0]}`)
                navigate('/home');
            }
            else {
                toast.error(result.error);
            }
        }
        catch (err) {
            console.log(err);
            toast.error("Something went wrong")
        }
    }
    return <div className='p-3 md:p-5 rounded-lg text-zinc-200 border border-gray-600 w-10/12 h-5/6 flex gap-2 items-center'>
        <div className='font-Khand font-bold text-center xl:text-9xl hidden lg:text-8xl lg:flex lg:flex-col justify-center leading-[8rem] items-start w-1/2 p-3 border-r border-gray-600 h-full'>
            <p>Good</p>
            <p className='text-blue underline'>Things</p>
            <p>Are</p>
            <p className='text-fuchsia-400 underline'>Coming</p>
        </div>
        <div className='flex flex-col justify-center w-full h-full items-center'>
            <h1 className='md:text-4xl text-2xl text-center m-3 font-sans'>Long time no see 👀</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3 w-5/6'>
                <div className='flex flex-col w-full gap-1'>
                    <label htmlFor='email' className='text-lg'>Email</label>
                    <input type='email' placeholder='Email' id='email' className='focus:outline-none p-2 rounded-md text-black'
                        {...register("email")} />
                </div>
                <div className='flex flex-col w-full text-lg gap-1'>
                    <label htmlFor='password'>Password</label>
                    <div className='flex justify-between gap-1 rounded-md p-1 bg-white'>
                        <input type={showPassword ? "text" : "password"} placeholder='Password' id='password' {...register("password")}
                            className='w-full focus:outline-none p-1 rounded-md text-black' />
                        <div onClick={() => setShowPassword(!showPassword)} className='cursor-pointer'>
                            {showPassword ? (<GrFormView className="size-10 text-black" />) : (<GrFormViewHide className="size-10 text-black" />)}
                        </div>
                    </div>
                </div>
                <button className='px-3 py-2 bg-blue text-white rounded-md mt-5 text-lg' type='submit'>Login</button>
            </form>
        </div>
    </div>
}
export default LoginComponent;