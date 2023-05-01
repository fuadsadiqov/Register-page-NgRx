import { createAction, props } from "@ngrx/store";
import { ActionType } from "./actionType";
import { RegisterData } from "src/app/auth/types/registerData.interface";


export const registerAction = createAction(
    ActionType.REGISTER,
    props<{ user: RegisterData }>()
)