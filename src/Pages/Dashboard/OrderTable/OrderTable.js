import React from 'react';

const OrderTable = ({ order }) => {
    const { name, email, serviceName } = order;
    return (

        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{serviceName}</td>
        </tr>
    );
};

export default OrderTable;