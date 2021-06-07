import { ActionType } from "../action-types"


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