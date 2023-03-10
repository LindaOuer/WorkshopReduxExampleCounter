import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: { counter: 0 },
    reducers: {
        increment(state, action) {
            counter: state.counter++;
        },
        decrement(state, action) {
            counter: state.counter--;
        },
        multiply(state, action) {
            state.counter *= action.payload;
        },
    },
});

const store = configureStore({
    reducer: counterSlice.reducer,
});
export const actions = counterSlice.actions;
export default store;
