import React, { Fragment } from "react";

export default function Checkout() {

  function proceedToPay(type, amount) {
    // Logic Definition

  }

  return (
    <Fragment>
      <h1 className="mt-10 font-bold text-center text-2xl">Checkout</h1>
      <p className="mt-2 text-center text-gray-500">
        Here are the details before your proceed to pay
      </p>
      <div className="mt-8 flex gap-4 justify-center">
        <div className="w-2/6">
          <div className="w-full p-10 border border-gray-200 shadow-sm rounded-lg space-y-4">
            <div className="text-gray-500 flex justify-between">
              <h4>Plan:</h4>
              <h4>Pro</h4>
            </div>
            <div className="text-gray-500 flex justify-between">
              <h4>Amount:</h4>
              <h4>₹ 1,024</h4>
            </div>
            <hr className="my-4 border-dashed border-gray-300" />
            <div className="text-gray-500 flex justify-between">
              <h4>Discount:</h4>
              <h4 className="text-green-500">₹ 0</h4>
            </div>
            <hr className="my-4 border-dashed border-gray-300" />
            <div className="text-gray-500 flex justify-between">
              <h4>Subtotal:</h4>
              <h4>₹ 1,024</h4>
            </div>
            <hr className="my-4 border-dashed border-gray-300" />
            <div className="text-gray-500 flex justify-between">
              <h4>GST @ 18%:</h4>
              <h4>₹ 184</h4>
            </div>
            <hr className="my-4 border-gray-200" />
            <div className="text-gray-500 flex justify-between">
              <h4 className="font-semibold text-lg">Order total:</h4>
              <h4 className="font-semibold text-lg">₹ 1,208</h4>
            </div>
          </div>

          <button className="w-full my-4 py-4 font-semibold text-white bg-green-500 hover:bg-green-400 rounded-xl">
            Make Payment
          </button>
        </div>
      </div>
    </Fragment>
  );
}
