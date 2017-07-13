import { createStore } from 'redux'

// reducer
function counter(state, action) {
  if (typeof state === 'undefined') {
    return 0
  }
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

// store
const store = createStore(counter)

// esto lo pongo para poder usarlo en la consola del browser.
window.store = store

// getState es la funcion que devuelve el stado actual.
store.getState()

// dispatch manda una acción.
store.dispatch({ type: 'INCREMENT' })
