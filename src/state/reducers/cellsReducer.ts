import { ActionType } from "../action-types";
import { Cell } from "../cell";
import { Action } from '../actions';


interface CellsState {
    loading: boolean;
    error: string | null;
    order: string[]
    data: {
        [key: string]: Cell
    }
}

const intialState: CellsState = {
    loading: false,
    error: null,
    order: [],
    data: {}
}


const reducers = (state: CellsState = intialState, action: Action) => {

    switch(action.type) {
         case ActionType.UPDATE_CELL: 
            const { id, content } = action.payload;
            state.data[id].content = content;
            return state;
         case ActionType.INSERT_CELL_AFTER:   
            const cell: Cell = {
                content: "",
                type: action.payload.type,
                id: randomId()
            }
            state.data[cell.id] = cell;

            const foundIndex = state.order.findIndex(
                (id: string) => id === action.payload.id
            );

            if(foundIndex < 0) {
                state.order.unshift(cell.id);
            } else {
                state.order.splice(foundIndex + 1, 0, cell.id);
            }
            return state;

        default: 
            return state;
    }
    
}


const randomId = () => {
    return Math.random().toString(36).substr(2, 5);
}


export default reducers;