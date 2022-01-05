import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import "./Register.css";

const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='d-flex justify-content-center align-items-center' >
            <div className=''>
                <h3>Create your account</h3>

                <form className='registation-form' onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='First Name' {...register("firstName", { required: true, maxLength: 20 })} />
                    <input placeholder='Last Name' {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                    <input placeholder='Email' type='email' {...register("email", { required: true })} />
                    <input placeholder='Password' type="password" {...register("password", { required: true, minLength: 8 })} />
                    <input placeholder='Password' type="password" {...register("cofirm password", { required: true, minLength: 8 })} />
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