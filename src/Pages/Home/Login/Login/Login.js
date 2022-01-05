import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import logo from '../../../../icon/company_logo.png';
import './Login.css';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    const location = useLocation();
    const navigate = useNavigate();
    const { signInUsingGoogle } = useAuth();
    const redirect_uri = location.state?.form || '/home';


    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                navigate(redirect_uri);
            })
    }

    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div>
                <img className='m-5' width='60%' src={logo} alt=''></img>
                <form className='mt-5 login-form' onSubmit={handleSubmit(onSubmit)}>
                    <input type='email' placeholder='email' {...register("email", { required: true })} />
                    <input type='password' placeholder='password' {...register("password", { required: true })} />
                    <input type="submit" />
                </form>
                <Button onClick={handleGoogleLogIn} className='google-btn mt-5 '>Continue with google</Button>
                <p>Don't have account?<Link to="/register">Create Account</Link></p>
            </div>

        </div>
    );
};

export default Login;