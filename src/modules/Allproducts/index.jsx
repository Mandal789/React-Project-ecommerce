import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./index.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Allproducts = () => {
  const navigate = useNavigate();

  const [products, setproducts] = useState([]);
  const [filter, setfilter] = useState(products);
  const [filter2, setfilter2] = useState(products);
  const [filter3, setfilter3] = useState(products);
  const [loading, setloading] = useState(false);
  const [search, setsearch] = useState([]);
  const [btnstyle, setbtnstyle] = useState("");
  const [Rbtnstyle, setRbtnstyle] = useState("");
  //let componentMounted = true;
  useEffect(() => {
    const fetchProducts = async () => {
      setloading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.clone().json();
        console.log(response.status);
        if (response.status === 502) {
           navigate("/badrequest");
        }
        setfilter(await response.json());
        setfilter2(data);
        setfilter3(data);
        setproducts(data);
        setloading(false);
      } catch (error) {
        console.log(error.status);
         navigate("/error")
      }
      // if (componentMounted) {
      // }
      // return () => {
      //   componentMounted = false;
      // };
    };
    fetchProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className=" flex mt-20 flex-col items-center  ">
          <Skeleton width={100} height={10} borderRadius={0} />
          <Skeleton width={300} height={40} borderRadius={0} />
        </div>
        <div className=" mt-3 flex items-center justify-items-center justify-evenly  ">
          <Skeleton width={150} height={40} borderRadius={5} />
          <Skeleton width={150} height={40} borderRadius={5} />
          <Skeleton width={150} height={40} borderRadius={5} />
          <Skeleton width={150} height={40} borderRadius={5} />
          <Skeleton width={150} height={40} borderRadius={5} />
        </div>

        <div className=" mt-2 ml-[5%] flex items-center justify-items-center justify-around w-[90%]  ">
          <Skeleton width={250} height={300} borderRadius={5} />
          <Skeleton width={250} height={300} borderRadius={5} />
          <Skeleton width={250} height={300} borderRadius={5} />
          <Skeleton width={250} height={300} borderRadius={5} />
        </div>

        <div className=" mt-2 mb-20 ml-[5%] flex items-center justify-items-center justify-around w-[90%]  ">
          <div>
            <Skeleton width={250} height={230} borderRadius={5} />
            <Skeleton width={250} height={40} borderRadius={0} />
            <Skeleton width={250} height={30} borderRadius={0} />
          </div>
          <div>
            <Skeleton width={250} height={230} borderRadius={5} />
            <Skeleton width={250} height={40} borderRadius={0} />
            <Skeleton width={250} height={30} borderRadius={0} />
          </div>
          <div>
            <Skeleton width={250} height={230} borderRadius={5} />
            <Skeleton width={250} height={40} borderRadius={0} />
            <Skeleton width={250} height={30} borderRadius={0} />
          </div>
          <div>
            <Skeleton width={250} height={230} borderRadius={5} />
            <Skeleton width={250} height={40} borderRadius={0} />
            <Skeleton width={250} height={30} borderRadius={0} />
          </div>
        </div>
      </>
    );
  };

  const Allproduct = () => {
    setfilter(products);
    setfilter2(products);
    setfilter3(products);
    setsearch("");
    setbtnstyle("");
    setRbtnstyle("");
  };

  const filterProducts = (cat) => {
    const filtered = products.filter((product) => product.category === cat);

    setfilter(filtered);
    setfilter2(filtered);
    setfilter3(filtered);
    setbtnstyle("");
    setRbtnstyle("");

    cat === "women's clothing" ? setsearch("wo") : setsearch(cat);
  };
  const filterProductsprice = (low, high, code) => {
    const filtered = filter2.filter((item) => {
      return item.price >= low && item.price <= high;
    });
    setfilter(filtered);
    setfilter3(filtered);
    setbtnstyle(code);
    setRbtnstyle("");
  };
  const filterProductsRating = (low, high, code) => {
    const filtered = filter3.filter((item) => {
      return item.rating.rate >= low && item.rating.rate <= high;
    });
    setfilter(filtered);
    setRbtnstyle(code);
  };

  const ShowProducts = () => {
    const x = () =>
      toast.success("Add Successfully !!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    const Y = () =>
      toast.success("Already in cart Add Qty !", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

    const AddtoCart = (product) => {
      console.log(product);
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const isProductExist = cart.find((item) => item.id === product.id);
      if (isProductExist) {
        Y();
        const updatedCart = cart.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              quentity: item.quentity + 1,
            };
          }
          return item;
        });
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      } else {
        x();
        localStorage.setItem(
          "cart",
          JSON.stringify([...cart, { ...product, quentity: 1 }])
        );
      }
      navigate("/products");
    };

    return (
      <>
        <section className="col-span-2 -mt-[163px] ">
          <div className=" wrapper ml-5 font-lg relative  top-56 w-[16%] ">
            <div className="text-3xl font-semibold text-sky-400 ml-5">
              Filter Products
            </div>
            <button
              onClick={() => filterProductsprice(1, 100, "A")}
              className={`ml-5 bg-gray-300 mt-2 py-1 px-9 text-black shadow-sm hover:bg-sky-400 border rounded-2xl border-1 ${
                btnstyle.includes("A") ? "act" : null
              }`}
            >
              Price-1 to 100
            </button>
            <br />
            <button
              className={`  ml-5 mt-2 focus:bg-violet-700 bg-gray-300 py-1 px-7 text-black shadow-sm hover:bg-sky-400 border rounded-2xl border-1 ${
                btnstyle.includes("B") ? "act" : null
              }`}
              onClick={() => filterProductsprice(100, 500, "B")}
            >
              Price-100 to 500
            </button>
            <br />
            <button
              className={`ml-5 py-1 focus:bg-violet-700 bg-gray-300 mt-2 px-4 text-black shadow-sm hover:bg-sky-400 border rounded-2xl border-1 ${
                btnstyle.includes("C") ? "act" : null
              }`}
              onClick={() => filterProductsprice(500, 1000, "C")}
            >
              Price-500 to 1000
            </button>
            <br />
            <button
              className={`ml-5 mt-2 focus:bg-violet-700 bg-gray-300 py-1 px-8 text-black shadow-sm hover:bg-sky-400 border rounded-2xl border-1 ${
                Rbtnstyle.includes("D") ? "act" : null
              }`}
              onClick={() => filterProductsRating(2, 3.5, "D")}
            >
              Rating-2 to 3.5
            </button>
            <br />
            <button
              className={`ml-5 mt-2 focus:bg-violet-700 bg-gray-300 py-1 px-10 text-black shadow-sm hover:bg-sky-400 border rounded-2xl border-1 ${
                Rbtnstyle.includes("E") ? "act" : null
              }`}
              onClick={() => filterProductsRating(3, 5, "E")}
            >
              Rating-3 to 5
            </button>
          </div>

          <div className="flex flex-col text-center w-full mt-2 mb-5">
            <h2 className="text-xs text-purple-500 tracking-widest font-medium title-font mb-1">
              Product
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              All products
            </h1>
          </div>
        </section>

        <div className=" category flex justify-center ml-64 mr-28">
          <button
            className=" width flex curser text-white bg-purple-500 border-0 py-2 px-12 focus:outline-none hover:bg-purple-600 rounded"
            onClick={() => Allproduct()}
          >
            All
          </button>

          <button
            onClick={() => filterProducts("women's clothing")}
            className={` width flex ml-auto text-white bg-purple-500 border-0 py-2 px-6  hover:bg-purple-600 rounded ${
              search.includes("wo") ? "act" : null
            } `}
          >
            Women's Clothing
          </button>

          <button
            onClick={() => filterProducts("men's clothing")}
            className={` width flex ml-auto text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded ${
              search.includes("men") ? "act" : null
            } ${console.log(btnstyle)}`}
          >
            Men's Clothing
          </button>

          <button
            className={`width flex ml-auto text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded ${
              search.includes("jewelery") ? "act" : ""
            }`}
            onClick={() => filterProducts("jewelery")}
          >
            Jewelery
          </button>
          <button
            className={`width flex ml-auto text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded ${
              search.includes("electronics") ? "act" : ""
            }`}
            onClick={() => filterProducts("electronics")}
          >
            Electronics
          </button>
        </div>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {filter.map((item) => {
                const { id, title, price, category, image, rating } = item;
                return (
                  <React.Fragment key={id}>
                    {}
                    <div className="lg:w-[23%] md:w-1/2 p-2 w-full  mb-4  rounded-lg shadow ml-4 ">
                      <NavLink to={`/products/${id}`}>
                        <p className="block relative h-48 rounded overflow-hidden cursor-pointer">
                          <img
                            alt={title}
                            className="object-contain object-center w-full h-full block"
                            src={image}
                          />
                          <span className="relative bg-sky-300 text-black shadow-md left-[72%] py-1 px-3 border rounded-2xl border-1 bottom-[98%]">
                            {rating.rate}/5
                          </span>
                        </p>
                      </NavLink>
                      <div className="mt-4 ">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                          {category}
                        </h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">
                          {title}
                        </h2>

                        <p className="mt-1 ">
                          ${price}{" "}
                          <button
                            className="object-right ml-20 border border-2 py-1 px-2  bg-violet-500 text-white focus:outline-none hover:bg-purple-400 rounded hover:text-white"
                            onClick={() => AddtoCart(item)}
                          >
                            Add To Cart
                          </button>
                        </p>
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <>
      <div>{loading ? <Loading /> : <ShowProducts />}</div>
    </>
  );
};

export default Allproducts;
