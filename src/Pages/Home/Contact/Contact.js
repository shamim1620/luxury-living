import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './Contact.css';

const Contact = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        axios.post('https://murmuring-badlands-95403.herokuapp.com/messages', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('Message Sent');
                    reset();
                }
            })
    }
    return (
        <div >
            <div className='text-center my-5'>
                <p>contact</p>
                <h2>Let us handle your<br />
                    project, professionally.</h2>
                <form className='contact-form' onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='First Name' {...register("firstName", { required: true, maxLength: 20 })} />
                    <input placeholder='Last Name' {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                    <br />
                    <input placeholder='Email' type='email' {...register("email", { required: true })} />
                    <input placeholder='Phone Number' type="number" {...register("phoneNumber", { required: true })} />
                    <br />
                    <textarea placeholder='your message' id='text-field' {...register("message")} />
                    <br />
                    <Button type='submit'> send message</Button>
                </form>
            </div>

        </div>
    );
};

export default Contact;