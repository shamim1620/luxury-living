import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import logo from '../../../../icon/company_logo.png';
import './Login.css';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const { signInUsingGoogle, loginWithEmailPassword } = useAuth();
    const navigate = useNavigate();
    const onSubmit = loginData => {
        loginWithEmailPassword(loginData.email, loginData.password, navigate)
    }

    const handleGoogleLogIn = () => {
        signInUsingGoogle(navigate)
    }

    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div>
                <img className='m-5' width='60%' src={logo} alt=''></img>
                <form className='mt-5 login-form' onSubmit={handleSubmit(onSubmit)}>
                    <input type='email' placeholder='email' {...register("email", { required: true })} />
                    <input type='password' placeholder='password' {...register("password", { required: true })} />
                    <Button type='submit'>Login</Button>
                </form>
                <Button onClick={handleGoogleLogIn} className='google-btn mt-5 '>Continue with google</Button>
                <p>Don't have account?<Link to="/register">Create Account</Link></p>
            </div>

        </div>
    );
};

export default Login;