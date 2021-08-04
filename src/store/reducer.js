import { combineReducers } from "redux";

import todosReducer from "../features/todos/todosReducer";
import filtersReducer from "../features/filters/filtersReducer";

const rootReducer = combineReducers({
    todos: todosReducer,
    filters: filtersReducer
})

export default rootReducer

/* MANUAL FUNCTION

export default function rootReducer(state = {}, action) {
    return {
        todos: todosReducer(state.todos, action),
        filters: filtersReducer(state.filters, action)
    }
}
*/