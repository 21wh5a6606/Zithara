import React from 'react';

const Table = ({ data }) => {
  if (data.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Customer Name</th>
          <th>Age</th>
          <th>Phone</th>
          <th>Location</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        {data.map((customer, index) => (
          <tr key={index}>
            <td>{customer.sno}</td>
            <td>{customer.customer_name}</td>
            <td>{customer.age}</td>
            <td>{customer.phone}</td>
            <td>{customer.location}</td>
            <td>{new Date(customer.created_at).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;