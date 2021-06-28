import {ActionType} from '../action-types'; 
import { CellTypes } from '../cell';

export interface UpdateCellAction {
    type: ActionType.UPDATE_CELL;
    payload: {
        id: string;
        content: string
    }
}

export interface BundleStartAction {
    type: ActionType.BUNDLE_START;
    payload: {
        cellId: string
    }
}

export interface BundleComplateAction {
    type: ActionType.BUDEDLE_COMPLETE;
    payload: {
        cellId: string,
        bundle: {
            code: string,
            err: string
        }
    }
}

export interface InsertCellAfterAction {
    type: ActionType.INSERT_CELL_AFTER;
    payload: {
        id: string | null,
        type: CellTypes
    }
}

export type Action = 
  UpdateCellAction    
| BundleStartAction 
| BundleComplateAction
| InsertCellAfterAction;