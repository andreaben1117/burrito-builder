export const orders = (state = [], action) => {
  switch (action.type) {
    case 'SET_ORDERS':
      return [...state, action.orders];
    default:
      return state;
  }
};
