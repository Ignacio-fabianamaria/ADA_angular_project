import { createReducer, on } from "@ngrx/store";
import { decrement, increment } from "./counter-actions";

export interface CounterState{
  count:number;
}

const initialCounterState: CounterState = {
  count:0,
}

export const counterReducer = createReducer(
  initialCounterState,
  on(increment, (state, action) => {
    return{
      ...state,
      count: state.count + 1,
    }
  }),
  on(decrement, (state, action) => {
    return{
      ...state,
      count: state.count > 0 ? state.count - 1 : 0,
    }
  })
)
