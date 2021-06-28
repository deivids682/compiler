import {  Dispatch } from "redux"
import { ActionType } from "../action-types"
import { 
    UpdateCellAction, 
    Action, 
    Direction, 
    MoveCellAction 
} from "../actions"
import bundle from '../../bundler';



export const moveCell = (id: string, direction: Direction) : MoveCellAction => {
    return {
        type: ActionType.MOVE_CELL,
        payload: {
            id,
            direction
        }
    }
}

export const insertCellAfter = (
    id: string | null,
    cellType: any
) : any => {
    return {
        type: ActionType.INSERT_CELL_AFTER,
        payload: {
            id,
            type: cellType
        }
    }
}

export const updateCell = (id: string, content: string) : UpdateCellAction => {
    return {
        type: ActionType.UPDATE_CELL,
        payload: {
            id,
            content
        }
    }
}


export const createBundle = (cellId: string, input: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.BUNDLE_START,
            payload: {
                cellId,
            }
        });

        const result = await bundle(input);

        dispatch({
            type: ActionType.BUDEDLE_COMPLETE,
            payload: {
                cellId,
                bundle: result
            }
        });
    }
}