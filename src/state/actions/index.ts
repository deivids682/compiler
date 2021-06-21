import {ActionType} from '../action-types'; 

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

export type Action = 
  UpdateCellAction    
| BundleStartAction 
| BundleComplateAction;