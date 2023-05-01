import { Action, createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "../types/authState.interface";
import { registerAction } from "./actions";

const initialState: AuthStateInterface = {
    isSubmit: false
}

export const authReducer = createReducer(
    initialState, 
    on(
        registerAction, 
        (state): AuthStateInterface => ({
        ...state,
        isSubmit: true 
        })
    )
)
export function reducers(state: AuthStateInterface, action: Action){
    return authReducer(state, action)
}