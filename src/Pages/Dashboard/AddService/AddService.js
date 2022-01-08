
import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    }
    return (
        <div>
            <form className='contact-form' onSubmit={handleSubmit(onSubmit)}>
                <div className='d-flex'>
                    <div className='me-3'>
                        <span>Service Title</span>
                        <br />
                        <input style={{ width: "340px" }} placeholder='Service Title'  {...register("serviceTitle", { required: true })} />
                    </div>
                    <div>
                        <span>Image</span>
                        <br />
                        <input style={{ width: "200px", height: "45px" }} placeholder='Upload image' type='file' accept='image/*' alt='' {...register("image", { required: true })} />

                    </div>

                </div>
                <span>Description</span>
                <br />
                <textarea placeholder='Description' id='text-field' {...register("description")} />
                <br />
                <Button type='submit'> Submit</Button>
            </form>

        </div>
    );
};

export default AddService;