import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import "./Register.css";

const Register = () => {
    const { registerUser } = useAuth();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const onSubmit = loginData => {
        if (loginData.password !== loginData.password2) {
            alert('Password not match');
            return
        }
        else {
            registerUser(loginData.email, loginData.password,loginData.name)

            navigate('/home')
        }

    }
    return (
        <div className='d-flex justify-content-center align-items-center' >
            <div className=''>
                <h3>Create your account</h3>

                <form className='registation-form' onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='Your Name' {...register("name", { required: true })} />
                    <input placeholder='Email' type='email' {...register("email", { required: true })} />
                    <input placeholder='Password' type="password" {...register("password", { required: true, minLength: 4 })} />
                    <input placeholder='Confirm Password' type="password" {...register("password2", { required: true, minLength: 4 })} />
                    <Button type='submit'> Create Account</Button>
                </form>
                <p>Already have an account?<Link to='/login'>Login</Link></p>
                <p>-------------or-------------</p>
                <Button>Continue with Google</Button>
                <br />
                <Button>Continue with Facebook</Button>

            </div>
        </div>

    );
};

export default Register;