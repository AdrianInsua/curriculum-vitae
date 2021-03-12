export const scrollActions = {
  updateComponentPosition: "UPDATE_POSITION",
};

const scrollReducer = (state = {}, action) => {
  switch (action.type) {
    case scrollActions.updateComponentPosition:
      return { ...state, ...action.componentData };
    default:
      return state;
  }
};

export default scrollReducer;
