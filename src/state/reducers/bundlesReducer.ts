import produce from "immer";
import { actionCreators } from "..";
import { ActionType } from "../action-types";
import { Action } from '../actions';

interface BundlesState {
    [key: string]: 
    | {
        loading: boolean,
        code: string;
        err: string;
    }
}

const initialState: BundlesState = {};


const reducer = produce(
    (state: BundlesState = initialState, acion: Action): BundlesState => {
        switch(acion.type) {
            case: ActionType.BUNDLE_START: 
            case: ActionType.BUDEDLE_COMPLETE: 
        }
    }
)