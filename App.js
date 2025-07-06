import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/orders').then((res) => {
      setOrders(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Order Management</h1>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Item</th>
            <th>Delivery Date</th>
            <th>Delivery Pricing</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, i) => (
            <tr key={i}>
              <td>{order.orderId}</td>
              <td>{order.customer}</td>
              <td>{order.item}</td>
              <td>{order.deliveryDate}</td>
              <td>{order.deliveryPricing}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
