import { ADD_TODO, REMOVE_TODO } from "./todos.actions";

let initialState = [
  {
    id: 1,
    item: "Apples",
    quantity: 3
  },
  {
    id: 2,
    item: "Oranges",
    quantity: 2
  },
  {
    id: 3,
    item: "Pears",
    quantity: 5
  }
];

// Create your reducer function below

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_GROCERY:
      let newGrocery = {
        id: 4,
        item: action.payload,
        quantity: 3
      };
      return [...state, newGrocery];
    case REMOVE_GROCERY:
      let theId = action.payload;
      return state.filter(item => item.id !== Number(theId));
    default:
      return state;
  }
};
