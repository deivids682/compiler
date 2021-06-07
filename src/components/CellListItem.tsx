import { Cell } from "../state/cell";
import CodeEditor from "./Code-editor";


interface CellListItemProps {
    cell: Cell
}


const CellListItem: React.FC<CellListItemProps> = ({ cell }) => {

    let child: JSX.Element;

    if(cell.type === "code") {
        child = (
            <>
                <CodeEditor initialValue={"123"} onChange={() => {}} />
            </>
        );
    } else {
        child = (
            <>
            </>
        )
    }

    return <div></div>
}


export default CellListItem;