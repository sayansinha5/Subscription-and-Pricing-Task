import React from 'react'
import { NavLink } from 'react-router-dom'

export default function PaymentSuccess() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="font-semibold text-2xl">Payment Successful</h1>
      <p className="mt-2 text-gray-400">Thank you for the purchase</p>
      <NavLink to="/" className="mt-4 px-4 py-2 text-sm text-blue-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg">back to home</NavLink>
    </div>
  )
}
