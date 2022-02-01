import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import OrderTable from '../OrderTable/OrderTable';

const OrderList = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`https://murmuring-badlands-95403.herokuapp.com/orders/${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [])
    const handleOnClick = id => {
        axios.delete(`https://murmuring-badlands-95403.herokuapp.com/orders/${id}`)
            .then(res => {
                if (res.data.deletedCount === 1) {
                    const rest = orders.filter(order => order._id !== id);
                    setOrders(rest);
                    alert('succesfull deletion');
                } else {
                    alert('Something went wrong!!');
                }

            })
    }
    console.log(orders);
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Service Name</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <OrderTable
                            key={order._id}
                            order={order}
                            handleOnClick={handleOnClick}
                        ></OrderTable>)

                    }
                </tbody>
            </table>
        </div>
    );
};

export default OrderList;