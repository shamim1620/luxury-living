import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddProject = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data.image[0])
        const formData = new FormData();
        formData.append('projectTitle', data.projectTitle)
        formData.append('image', data.image[0])
        fetch('https://murmuring-badlands-95403.herokuapp.com/projects', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                alert('Data add successfully')
                reset();
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    return (
        <div>
            <form className='contact-form' onSubmit={handleSubmit(onSubmit)}>
                <div className='d-flex'>
                    <div className='me-3'>
                        <span>Service Title</span>
                        <br />
                        <input style={{ width: "340px" }} placeholder='Project Title'  {...register("projectTitle", { required: true })} />
                    </div>
                    <div>
                        <span>Image</span>
                        <br />
                        <input style={{ width: "200px", height: "45px" }} placeholder='Upload image' type='file' accept='image/*' alt='' {...register("image", { required: true })} />

                    </div>

                </div>
                <Button type='submit'> Submit</Button>
            </form>

        </div>
    );
};

export default AddProject;