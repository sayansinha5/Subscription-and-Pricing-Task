import { createBrowserRouter, Navigate } from "react-router-dom";

import Layout from "@layouts/Layout.jsx";

import Home from "@views/Home.jsx";
import Pricing from "./views/Pricing.jsx";
import Checkout from "@views/Checkout.jsx";
import PaymentSuccess from "@views/PaymentSuccess.jsx";
import Dashboard from "@views/Dashboard.jsx";
import Error404 from "@views/Error404.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    name: "Layout",
    element: <Layout />,
    children: [
      // {
      //   path: "/",
      //   name: "Home",
      //   element: <Home />,
      // },
      {
        path: "/",
        name: "Pricing",
        element: <Pricing />,
      },
      {
        path: "/checkout",
        name: "Checkout",
        element: <Checkout />,
      },
      {
        path: "/payment-success",
        name: "PaymentSuccess",
        element: <PaymentSuccess />,
      },
      {
        path: "/dashboard",
        name: "Dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

export default router;
