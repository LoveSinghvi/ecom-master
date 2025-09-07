// src/pages/adminpages/Orders.tsx
import React from "react";
import { FaBoxOpen } from "react-icons/fa";

const Orders = () => {
  return (
    <div className="text-gray-800 dark:text-gray-200">
      <h2 className="text-2xl font-bold mb-4">Your Orders</h2>
      <div className="flex flex-col items-center justify-center h-64 text-center">
        <FaBoxOpen className="text-5xl text-gray-400 mb-4" />
        <p className="text-lg font-medium">No orders to show</p>
        <p className="text-sm text-gray-500">You haven’t placed any order yet.</p>
      </div>
    </div>
  );
};

export default Orders;
