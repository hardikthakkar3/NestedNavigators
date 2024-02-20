const initialState = {
  count: 0,
};

export default CountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      console.log("increment");
      return {
        count: state.count + 1,
      };
    case "decrement":
      console.log("decrement");
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};
