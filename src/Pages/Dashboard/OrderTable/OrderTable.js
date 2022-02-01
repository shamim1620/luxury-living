import React from 'react';
import { Button } from 'react-bootstrap';

const OrderTable = ({ order, handleOnClick }) => {
    const { _id, name, email, serviceName } = order;
    return (

        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{serviceName}</td>
            <td><Button onClick={() => handleOnClick(_id)}>delete</Button></td>
        </tr>
    );
};

export default OrderTable;