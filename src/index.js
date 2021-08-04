import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import './api/server'

import store from "./store/store"
import {todoAdd, todoToggle, colorSelect} from "./features/todos/todosActions";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

console.log("Initial state:", store.getState())

const unsubscribe = store.subscribe(() =>
    console.log('State after dispatch: ', store.getState())
)

store.dispatch(todoAdd("Learn about actions 1"))
store.dispatch(todoAdd("Learn about other things 2"))
store.dispatch(todoAdd("Get a third thing 3"))

//store.dispatch(todoToggle(0))
//store.dispatch(todoToggle(2))

store.dispatch({ type: 'todos/todoToggled', payload: 1 })
store.dispatch(todoToggle(0))

store.dispatch(todoAdd("Noum a gua thing 4"))

store.dispatch(colorSelect(0, "blue"))
store.dispatch(colorSelect(2, "red"))

store.dispatch({ type: 'filters/statusFilterChanged', payload: 'Active' })
store.dispatch({ type: 'filters/colorFilterChanged',  payload: { color: 'red', changeType: 'added' }})



