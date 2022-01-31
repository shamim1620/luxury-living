import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        axios.put('https://murmuring-badlands-95403.herokuapp.com/users/admin', data)
            .then(function (res) {
                alert("Make admin successfully")
                reset()
            })
            .catch(function (error) {

            });
    }
    return (
        <div >
            <form className='contact-form' onSubmit={handleSubmit(onSubmit)}>
                <span>Email</span>
                <br />
                <input style={{ width: "340px" }} placeholder='example@gmail.com'  {...register("email", { required: true })} />
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;