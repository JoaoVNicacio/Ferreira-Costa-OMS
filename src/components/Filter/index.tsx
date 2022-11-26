import React, { useState } from 'react'
import { TimeFilter } from "./style"

type Props = {
    selected: string
    setSelected: React.Dispatch<React.SetStateAction<string>>
    options: string[] 
}

const Filter: any = ({ selected, setSelected,  options}: Props) => {

    const [isActive, setIsActive] = useState(false);
    

    return (
        <TimeFilter>
            <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}><p>{selected}</p> ▼</div>
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

export default Filter