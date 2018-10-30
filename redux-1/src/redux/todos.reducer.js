import { ADD_TODO, REMOVE_TODO } from './todos.actions'

let initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload]

    case REMOVE_TODO:
      let selectedTodoId = action.payload
      return state.filter(todo => todo.id === Number(selectedTodoId))
  
    default:
      return state
  }
}