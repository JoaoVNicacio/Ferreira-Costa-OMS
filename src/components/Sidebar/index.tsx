import React from 'react'
import { Link } from 'react-router-dom'

// Icones e Logo:
import logo from '../../assets/images/ferreiraCosta-logo.png'
import orders from '../../assets/images/shopping-bag.png'
import dashboard from '../../assets/images/pie-chart.png'
import logout from '../../assets/images/logout.png'

import { Sidebar } from './styles'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SidebarComponent = () => {

    const showToastMessage = () => {

        toast.success('Logout realizado!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }

    return (
        <Sidebar>
            <div>
                <img src={logo} alt="logo da ferreira costa" />

                <ul>
                    <Link to="/homepage"><li className='firstLink'><a><img src={dashboard} className='icon' />Dashboard</a></li></Link>
                    <Link to="/pedidos"><li><a><img src={orders} className='icon' />Pedidos</a></li></Link>
                </ul>
            </div>

            <div>
                <Link to="/"><a onClick={showToastMessage} className='logoutBtn'><img src={logout} className='icon' /></a></Link>
            </div>
        </Sidebar>
    )
}

export default SidebarComponent