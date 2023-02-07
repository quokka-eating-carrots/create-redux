import { DECREASE, INCREASE, RESET } from "./action-type";
import { actionCreator } from "./redux";

export const increase = actionCreator(INCREASE);
export const decrease = actionCreator(DECREASE);
export const reset = actionCreator(RESET);
