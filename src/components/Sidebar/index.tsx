import React from 'react'

import logo from '../../assets/images/ferreiraCosta-logo.png'
import {Sidebar} from './styles'

const SidebarComponent = () => {
    return (
        <Sidebar>
            <img src={logo} alt="logo da ferreira costa" className='icon' />
            
            <div className='links'>
                <a href=""><p>Dashboard</p></a>
                <br />
                <a href=""><p>Pedidos</p></a>
            </div>
        </Sidebar>
    )
}

export default SidebarComponent