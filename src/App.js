import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { multiply } from "./store";

import { actions } from "./store/toolkit";

function App() {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(actions.increment());
    };
    const decrement = () => {
        dispatch(actions.decrement());
    };
    const multi = () => {
        dispatch(actions.multiply(10));
    };
    return (
        <div className="App">
            <button onClick={increment}>Inc</button>
            <h2>Counter = {counter}</h2>
            <button onClick={decrement}>Dec</button>
            <button onClick={multi}>* 10 </button>
        </div>
    );
}

export default App;
