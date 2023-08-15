import "./App.css";
import Header from "./components/Headers";
import Home from "./modules/Home";
import Footer from "./components/Footer";
import { Routes, Route, useNavigate } from "react-router-dom";
import ProductDetails from "./modules/productDetails/ProductDetails";
import Allproducts from "./modules/Allproducts";
import Cart from "./modules/Cart/index";
import AboutUs from "./components/AboutUs";
import Contact from "./components/contact";

import ErrorPage from "./ErrorPage";
import BadrequestError from "./modules/Allproducts/BadrequestError";

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Allproducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route
          path="/working"
          element={
            <div className="bg-red-50 myfont  font-semibold mywidth text-center p-48 text-4xl text-amber-500">
              Now that page is in progress
              <br />
              we are sorry for the inconvenience <br />
              404 page not found! <br />
              <button
                className="px-4 py-1 ml-[5%] mt-3 text-xl bg-cyan-400  text-gray-800 rounded hover:bg-violet-500 hover:text-white"
                onClick={() => navigate("/")}
              >
                Go Back
              </button>
            </div>
          }
        />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/badrequest" element={<BadrequestError />} />
        <Route
          path="*"
          element={
            <div className=" bg-red-50 mywidth text-center p-48 text-4xl font-semibold text-red-600">
              {" "}
              404 page not found!
              <br />
              Ohh Somthing Went Worng!! <br />
              Sorry, the page you tried cannot be found <br />
              <button
                className="px-4 py-1 ml-[5%] mt-3 text-xl bg-cyan-400  text-gray-800 rounded hover:bg-violet-500 hover:text-white"
                onClick={() => navigate("/")}
              >
                Go Back
              </button>
            </div>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
