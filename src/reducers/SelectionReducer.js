export default (state = null, action) => {
  switch (action.type) {
    case 'SELECT_LIBRARY':
      if (action.payload !== state) {
        return action.payload;
      }
      return null;
    default:
      return state;
  }
};
