import "./code-cell.css";
import { Cell } from "../state/cell";
import CodeEditor from "./CodeEditor";
import Preview from "./Preview";
import Resizable from "./Resizable";
import { useActions } from "../hooks/use-actions";

interface CodeCellProps {
    cell: Cell
}


const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
    const { updateCell } = useActions();

    return (
    <Resizable direction="vertical">
        <div style={{ 
            height: "calc(100% - 10px)", 
            display: "flex", 
            flexDirection: 'row'}}>

            <Resizable direction="horizontal">
             <CodeEditor initialValue={cell.content} onChange={(value) => updateCell(cell.id, value)} />
            </Resizable>
            <div className="progress-wrapper">
                {true ? <div className="progress-cover">
                    <progress className="progress is-small is-primary" max="100">Loading</progress>
                    </div> : <Preview code={" "} err={ "" }/>
                }
              
            </div>
        </div>
    </Resizable>)
}


export default CodeCell;