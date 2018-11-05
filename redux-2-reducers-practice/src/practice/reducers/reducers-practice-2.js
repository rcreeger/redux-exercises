/*
  Problem #2

  Export a reducer that will manages an array of groceries. It must expect the following action types:
    - ADD_GROCERY
    - FETCH_GROCERIES
    - REMOVE_GROCERY
*/

// Theoretically, these action type labels would be imported from an actions file, but we will define them here in this case.
let ADD_GROCERY = "ADD_GROCERY";
let FETCH_GROCERIES = "FETCH_GROCERIES";
let REMOVE_GROCERY = "REMOVE_GROCERY";

// Write your code below this line!
let initialState = 0;

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_GROCERY:
      let newGrocery = {
        id: 4,
        item: action.payload,
        quantity: 3
      };
      return [...state, newGrocery];
    case FETCH_GROCERIES:
      return action.payload;
    case REMOVE_GROCERY:
      let theId = action.payload;
      return state.filter(item => item.id !== Number(theId));

    default:
      return state;
  }
};
