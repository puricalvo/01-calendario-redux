import { useDispatch, useSelector } from 'react-redux';
import reactLogo from './assets/react.svg';
import './App.css';
import { decrement, increment, incrementBy2 } from './store/slices/counter';

function App() {
  
  const { counter } = useSelector( state => state.counter )
  const dispatch = useDispatch();


  return (
    <div className="App">
      <div>
        
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>count is {counter}</h1>
      <div className="card">
        <button type='button' onClick={() => dispatch( increment())}>
          Incremen
        </button>
        <button type='button' onClick={() => dispatch( decrement())}>
          Decrement
        </button>
        <button type='button' onClick={() => dispatch( incrementBy2(2))}>
          Increment by 2
        </button>
       
      </div>
      
    </div>
  )
}

export default App
