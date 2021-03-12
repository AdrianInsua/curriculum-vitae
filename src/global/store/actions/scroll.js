const { scrollActions } = require("../reducers/scroll");

const updateComponentPosition = (id, position) => ({
  type: scrollActions.updateComponentPosition,
  componentData: {
    [id]: position,
  },
});

const exports = {
  updateComponentPosition,
};

export default exports;
