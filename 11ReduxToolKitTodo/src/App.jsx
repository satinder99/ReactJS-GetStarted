import { store } from './app/store'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { Provider } from 'react-redux'

function App() {

  return (
    <Provider store={store} >
      <AddTodo/>
      <Todos/>
    </Provider>
  )
}

export default App
