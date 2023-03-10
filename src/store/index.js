import { createStore } from "redux";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const MULTIPLY = "MULTIPLY";

export const multiply = () => {
    return { type: "MULTIPLY", payload: 10 };
};

const reducers = (state = { counter: 0 }, action) => {
    switch (action.type) {
        case INCREMENT:
            return { counter: state.counter + 1 };
        case DECREMENT:
            return { counter: state.counter - 1 };
        case MULTIPLY:
            return { counter: state.counter * action.payload };
        default:
            return state;
    }
};

const store = createStore(reducers);
export default store;
