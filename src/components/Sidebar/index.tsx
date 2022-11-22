import React from 'react'
import {Link} from 'react-router-dom'

import logo from '../../assets/images/ferreiraCosta-logo.png'
import {Sidebar} from './styles'

const SidebarComponent = () => {
    return (
        <Sidebar>
            <img src={logo} alt="logo da ferreira costa" className='icon' />
            
            <ul className='links'>
                <Link to="/homepage"><li>Dashboard</li></Link>
                <Link to="/pedidos"><li>Pedidos</li></Link>
            </ul>
        </Sidebar>
    )
}

export default SidebarComponent