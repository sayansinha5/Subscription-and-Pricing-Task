import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import { CustomerProfileContext } from "@contexts/CustomerProfileContext.jsx";

export default function Layout() {
  const [subscriptionType, setSubscriptionType] = useState('');
  const [amount, setAmount] = useState(0);

  return (
    <CustomerProfileContext.Provider
      value={{ subscriptionType, amount, setSubscriptionType, setAmount }}
    >
      <div className="max-w-7xl mx-auto">
        <Outlet />
      </div>
    </CustomerProfileContext.Provider>
  );
}
