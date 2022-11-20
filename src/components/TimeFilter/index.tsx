import React, { useState } from 'react'
import { TimeFilter } from "./style"

const TimeFilterComponent: any = ({ selected, setSelected }: any) => {

    const [isActive, setIsActive] = useState(false);
    const options = ['Este mês(Novembro)', 'Último mês(Outubro)', 'Último trimestre', 'Último semestre', 'Último ano']

    return (
        <TimeFilter>
            <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>{selected}▼</div>
            {isActive && (
                <div className="dropdown-content">
                    {options.map(option => (
                        <div onClick={e => {
                            setSelected(option)
                            setIsActive(false)
                        }
                        } className="dropdown-item">
                            {option}
                        </div>
                    ))}

                </div>
            )}
        </TimeFilter>
    )
}

export default TimeFilterComponent