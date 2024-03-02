import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { incNumber, decNumber } from './action/action';
function App() {
const myState = useSelector((state)=>state.changeTheNumber);
const dispatch = useDispatch();
  return (
    <div className="App">
      <div className='outerDiv'>
        <div className='minusDiv' onClick={()=>dispatch(decNumber())} >-</div>
        <input type='text' id='disp' readOnly='true' value={myState}/>
        <div className='plusDiv' onClick={()=>dispatch(incNumber())} >+</div>
      </div>
    </div>
  );
}

export default App;
