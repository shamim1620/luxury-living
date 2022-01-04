import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import logo from '../../../../icon/company_logo.png';
import './Login.css';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div>
                <img className='m-5' width='60%' src={logo} alt=''></img>
                <form className='mt-5 login-form' onSubmit={handleSubmit(onSubmit)}>
                    <input type='email' placeholder='email' {...register("email", { required: true })} />
                    <input type='password' placeholder='password' {...register("password", { required: true })} />
                    <input type="submit" />
                </form>
                <Button className='google-btn mt-5 '>Continue with google</Button>
            </div>

        </div>
    );
};

export default Login;