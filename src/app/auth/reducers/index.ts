import { isDevMode } from "@angular/core";
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
  State,
} from "@ngrx/store";
import { User } from "../model/user.model";
import { AuthActions } from "../action-types";

export interface AuthState {
  user: User | undefined;
}

export const initialState: AuthState = {
  user: undefined,
};

export const AuthReducer = createReducer(
  initialState,
  on(AuthActions.login, (state, action) => ({ ...state, user: action.user })),
);
