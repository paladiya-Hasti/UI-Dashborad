
import React, { useState } from "react";

const Payments = () => {
  const [payments, setPayments] = useState([
    { id: 1, amount: 500, status: "Unpaid" },
    { id: 2, amount: 750, status: "Paid" },
  ]);

  const togglePaymentStatus = (id) => {
    setPayments(
      payments.map((payment) =>
        payment.id === id
          ? { ...payment, status: payment.status === "Paid" ? "Unpaid" : "Paid" }
          : payment
      )
    );
  };

  return (
    <div className="payments-container px-4 py-6 bg-white rounded-lg shadow-md">
    <h2 className="text-xl font-semibold text-gray-800 mb-6">Payments</h2>
    <ul className="space-y-4">
      {payments.map((payment) => (
        <li key={payment.id} className="payment-item p-4 bg-blue-50 rounded-lg shadow-sm flex justify-between items-center">
          <div>
            <p className="text-lg font-medium text-gray-700">Amount: ${payment.amount}</p>
            <p className="text-sm text-gray-500">Status: {payment.status}</p>
          </div>
          <button
            onClick={() => togglePaymentStatus(payment.id)}
            className="px-4 py-2 bg-blue-300 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Mark as {payment.status === "Paid" ? "Unpaid" : "Paid"}
          </button>
        </li>
      ))}
    </ul>
  </div>
  
  );
};

export default Payments;
