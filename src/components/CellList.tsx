import './cell-list.css';
import { Fragment } from "react";
import AddCell from './AddCell';
import { useTypedSelector } from '../hooks/use-typed-selector';
import { Cell } from '../state/cell';
import CellListItem from './CellListItem';


const CellList: React.FC = () => {

    const cells = useTypedSelector(({ cells: { order, data }}) => 
        order.map((id: string) => data[id])
    );

    const renderCells = cells.map((cell: Cell) => (
        <Fragment key={cell.id}>
            <CellListItem cell={cell} /> 
            <AddCell previousCellId={cell.id} />
        </Fragment>
    ));

    return (
    <div className="cell-list">
        <AddCell forceVisble={cells.length === 0} previousCellId={null} />
        {renderCells}
    </div>);

};

export default CellList;