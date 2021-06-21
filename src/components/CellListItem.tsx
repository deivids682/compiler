import { Cell } from "../state/cell";
import CodeCell from "./CodeCell";


interface CellListItemProps {
    cell: Cell
}

const CellListItem: React.FC<CellListItemProps> = ({ cell }) => {

    let child: JSX.Element;

    if(cell.type === "code") {
        child = (
            <>
                <CodeCell cell={cell} />
            </>
        );
    } else {
        child = (
            <>
            </>
        )
    }

    return <div className="cell-list-item">{child}</div>
}


export default CellListItem;