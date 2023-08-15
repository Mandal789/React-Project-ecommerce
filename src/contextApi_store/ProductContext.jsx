import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import axios from "axios";
import reduser from "./ProductReduser";

const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";

const initiastate = {
  isLoading: false,
  isError: false,
  FeauterProducts: [],
  Products: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reduser, initiastate);
  const getProduct = async (url) => {
    dispatch({ type: "SETLOADING" });
    try {
      const response = await axios.get(url);
      const alldata = await response.data;
      dispatch({ type: "APPDATA", payload: alldata });
    } catch (error) {
      dispatch({ type: "ERROR" });
    }
  };

  useEffect(() => {
    getProduct(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}> {children}</AppContext.Provider>
  );
};
//custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
