import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginInput, LoginSchema } from '@repo/types/Login';
import eyeIcon from '../../assets/hidden.png';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useSetRecoilState } from 'recoil';
import { userData } from '../../store/auth';
const LoginLayout: React.FC = () => {
    const setUser = useSetRecoilState(userData);
    const navigate = useNavigate();
    const { handleSubmit, register, formState: { errors } } = useForm<LoginInput>({ resolver: zodResolver(LoginSchema) });
    const onSubmit: SubmitHandler<LoginInput> = async (data) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND}/auth/login`, {
                credentials: 'include',
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            if (result.success) {
                setUser(result.data);
                toast.success(`Welcome back ${result.data.name.split(' ')[0]}`)
                navigate('/dashboard');
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
    return <div className='bg-sky-500/70 p-3 md:p-5 rounded-lg w-3/4 max-w-fit'>
        <h1 className='md:text-4xl text-3xl text-center m-3 font-Lobster'>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
            <div className='flex flex-col w-full gap-1'>
                <label htmlFor='email' className='text-lg'>Email</label>
                <input type='email' placeholder='Email' id='email' className='focus:outline-none p-2 rounded-md'
                    {...register("email")} />
                {errors.email && <span className="text-zinc-100 font-bold text-sm">{errors.email.message}</span>}
            </div>
            <div className='flex flex-col w-full text-lg gap-1'>
                <label htmlFor='password'>Password</label>
                <div className='flex justify-between gap-1'>
                    <input type='password' placeholder='Password' id='password' {...register("password")}
                        className='w-full focus:outline-none p-2 rounded-md' />
                    <button onClick={() => {
                        const password = document.getElementById('password') as HTMLInputElement;
                        if (password.type === 'password') {
                            password.type = 'text';
                        } else {
                            password.type = 'password';
                        }
                    }}>
                        <img src={eyeIcon} alt='hidden' />
                    </button>
                </div>

                {errors.password && <span className="text-zinc-100 font-bold text-sm">{errors.password.message}</span>}
            </div>

            <button className='px-3 py-2 bg-black text-white rounded-md mt-5 text-lg font-bold' type='submit'>Login</button>
        </form>
    </div>
}
export default LoginLayout;