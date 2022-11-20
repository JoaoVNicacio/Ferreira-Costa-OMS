import React, { useState } from 'react'
import { OrderFilter } from "./style"

const OrderFilterComponent: any = ({ selected, setSelected }: any) => {

    const [isActive, setIsActive] = useState(false);
    const options = ['Antifraude', 'Atrasados', 'Entregues', 'Em Processamento', 'Interrompidos', 'Negados']

    return (
        <OrderFilter>
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
        </OrderFilter>
    )
}

export default OrderFilterComponent