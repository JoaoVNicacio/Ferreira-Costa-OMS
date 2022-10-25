import { TimeFilter } from "./style"

const TimeFilterComponent = () => {
    return (
        <TimeFilter className="filter">
            <button className="click">Este mês</button>
            <div className="list">
                <button className="links">Último mês</button>
                <button className="links">Último trismestre</button>
                <button className="links">Último semestre</button>
                <button className="links">Último ano</button>
            </div>
        </TimeFilter>
    )
}

export default TimeFilterComponent