
import { Cell } from "../state/cell";
import CodeEditor from "./CodeEditor";
import Resizable from "./Resizable";

interface CodeCellProps {
    cell: Cell
}


const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
    return (
    <Resizable direction="vertical">
        <div style={{ 
            height: "calc(100% - 10px)", 
            width: "400px",
            display: "flex", 
            flexDirection: 'row'}}>

            <Resizable direction="horizontal">
             <CodeEditor initialValue={"123"} onChange={() => {}} />
            </Resizable>
        </div>
    </Resizable>)
}


export default CodeCell;