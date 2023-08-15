

const ProductReduser = (state, action) => {
  switch (action.type) {
    case "SETLOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "APPDATA":
      const featuredata = action.payload.filter(
        (item) => item.featured === true
      );
      return {
        ...state,
        isLoading: false,
        FeauterProducts: featuredata,
        Products: action.payload,
      };
    case "ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default ProductReduser;
