import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import OrderTable from '../OrderTable/OrderTable';

const OrderList = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [])
    console.log(orders);

    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">service Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <OrderTable
                            key={order._id}
                            order={order}
                        ></OrderTable>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default OrderList;