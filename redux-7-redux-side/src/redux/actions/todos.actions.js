export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const addTodo = newTodo => {
  let action = {
    type: ADD_TODO,
    payload: {
      id: Math.random(),
      title: newTodo,
      completed: false
    }
  };
  return action;
};

export const removeTodo = id => {
  let action = {
    type: REMOVE_TODO,
    payload: id
  };
  return action;
};
