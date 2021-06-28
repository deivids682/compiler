
interface ActionBarProps {
    id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
    return <div className="action-bar">
        <button className="button is-primary is-small">
            <span className="icon">
                <i className="fas fa-arrow-up"></i>
            </span>
        </button>
        <button className="button is-primary is-small">
        <span className="icon">
                <i className="fas fa-arrow-down"></i>
            </span>
        </button>
        <button className="button is-primary is-small">
        <span className="icon">
                <i className="fas fa-times"></i>
            </span>
        </button>
    </div>
}

export default ActionBar;