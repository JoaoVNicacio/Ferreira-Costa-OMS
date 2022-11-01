import React, {useState} from 'react'
import { TimeFilter } from "./style"

const TimeFilterComponent = () => {

    const [isActive, setIsActive] = useState(false);

    return (
        <TimeFilter>
            <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>Este mês (novembro)▼</div>
            {isActive && (
                <div className="dropdown-content">
                <div className="dropdown-item">
                    Último mês(outubro)
                </div>
                <div className="dropdown-item">
                    Último trimestre
                </div>
                <div className="dropdown-item">
                    Último semestre
                </div>
                <div className="dropdown-item">
                    Último ano
                </div>
            </div>
            )}
        </TimeFilter>
    )
}

export default TimeFilterComponent