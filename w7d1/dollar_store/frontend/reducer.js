const initialState = {
  baseCurrency: "Please select",
  rates: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SWITCH_CURRENCY':
      const { baseCurrency, rates } = action;
      return {
        baseCurrency,
        rates
      };
    default:
      return state;
  }
};

export default reducer;
