import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../modules/Allproducts/index.css";
const Cart = () => {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const carts = JSON.parse(localStorage.getItem("cart")) || [];

  useEffect(() => {
    const total = carts.reduce((acc, item) => {
      return acc + item.price * item.quentity;
    }, 0);
    setTotal(total);
  }, [carts]);

  const handleInc = (id) => {
    const updatedCart = carts.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quentity: item.quentity + 1,
        };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate("/cart");
  };

  const removeProduct = (id) => {
    const updatedCart = carts.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    toast.error("Removed Item !", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    navigate("/cart");
  };

  const handleDec = (id) => {
    const updatedCart = carts.map((item) => {
      console.log(item);
      if (item.id === id) {
        return {
          ...item,
          quentity: item.quentity - 1,
        };
      }
      return item;
    });
    const updatedCart1 = updatedCart.filter((item) => item.quentity >= 1);
    localStorage.setItem("cart", JSON.stringify(updatedCart1));

    navigate("/cart");
  };

  if (carts.length === 0) {
    return (
      <>
        <div className="mytext  h-[73.5vh] mywidth flex flex-col justify-center items-center font-semibold text-5xl ">
          <img
            src="https://www.pngmart.com/files/7/Cart-PNG-Clipart.png"
            alt="cartimg"
            width={200}
          />
          Your Cart is Empty
          <NavLink
            to={"/products"}
            className="px-7  py-1 ml-[1%] mt-5  bg-sky-300 text-lg text-purple-950 rounded hover:bg-violet-500 hover:text-white"
            onClick={() => navigate("/products")}
          >
            FILL IT
          </NavLink>
        </div>
      </>
    );
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="flex shadow-md my-10 ">
        <section className="cartitems flex my-10 w-[100%]">
          <div className=" padding w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">{carts?.length} Items</h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Product Details
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                Quantity
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                Price
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                Total
              </h3>
            </div>
            {carts?.map((cart) => {
              return (
                <React.Fragment key={cart.id}>
                  <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                    <div className="flex w-2/5">
                      <NavLink to={`/products/${cart.id}`} className="w-20">
                        <img
                          className="h-24"
                          src={cart?.image}
                          alt={cart?.title}
                        />
                      </NavLink>
                      <div className="flex flex-col justify-between ml-4 flex-grow">
                        <span className="font-bold text-sm">{cart?.title}</span>
                        <span className="text-red-500 text-xs capitalize">
                          {cart?.category}
                        </span>
                        <div
                          className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer"
                          onClick={() => removeProduct(cart.id)}
                        >
                          Remove
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center w-1/5">
                      <svg
                        className="fill-current text-gray-600 w-3 cursor-pointer"
                        viewBox="0 0 448 512"
                        onClick={() => handleDec(cart.id)}
                      >
                        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>

                      <h2 className="mx-2 border text-center text-xl font-semibold w-12 ">
                        {cart.quentity}
                      </h2>

                      <svg
                        className="fill-current text-gray-600 w-3 cursor-pointer"
                        onClick={() => handleInc(cart.id)}
                        viewBox="0 0 448 512"
                      >
                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>
                    </div>
                    <span className="text-center w-1/5 font-semibold text-sm">
                      ${cart?.price}
                    </span>
                    <span className="text-center w-1/5 font-semibold text-sm">
                      ${(cart?.price * cart?.quentity).toFixed(2)}
                    </span>
                  </div>
                </React.Fragment>
              );
            })}

            <NavLink
              to={"/products"}
              className="flex font-semibold text-indigo-600 text-sm mt-10"
            >
              <button className=" rounded text-white bg-purple-500 border-0 h-8 py-1 px-4 text-center focus:outline-none hover:bg-purple-600 ">
                Continue Shoping
              </button>
            </NavLink>
          </div>

          <div id="summary" className=" padding w-1/4 px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">
                Items {carts?.length}
              </span>
              <span className="font-semibold text-sm">{total.toFixed(2)}$</span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">
                Shipping
              </label>
              <select className="block p-2 text-gray-600 w-full text-sm">
                <option>Standard shipping - $10.00</option>
              </select>
            </div>
            <div className="py-10">
              <label
                htmlFor="promo"
                className="font-semibold inline-block mb-3 text-sm uppercase"
              >
                Promo Code
              </label>
              <input
                type="text"
                defaultValue={""}
                id="promo"
                placeholder="Enter your code"
                className="p-2 text-sm w-full"
              />
            </div>
            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
              Apply
            </button>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>${(total + 10).toFixed(2)}</span>
              </div>
              <button
                className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
                onClick={() => navigate("/working")}
              >
                Checkout
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cart;
