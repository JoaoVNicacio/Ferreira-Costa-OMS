import React from 'react'
import {Link} from 'react-router-dom'

import logo from '../../assets/images/ferreiraCosta-logo.png'
import {Sidebar} from './styles'

const SidebarComponent = () => {
    return (
        <Sidebar>
            <div>
                <img src={logo} alt="logo da ferreira costa" />
                
                <ul>
                    <Link to="/homepage"><li><button>Dashboard</button></li></Link>
                    <hr />
                    <Link to="/pedidos"><li><button>Pedidos</button></li></Link>
                </ul>
            </div>

            <div>
                <Link to="/"><button>Logout</button></Link>
            </div>
        </Sidebar>
    )
}

export default SidebarComponent