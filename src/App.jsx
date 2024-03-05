import { Provider } from "react-redux";
import store from './redux/store';
import Todo from './Todo';
import './index.css'

function App() {
  return(
    <Provider store={store}>
      <Todo />
    </Provider>
  )
}

export default App
