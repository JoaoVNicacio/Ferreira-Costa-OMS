import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/ferreiraCosta-logo.png'
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
                    <Link to="/homepage"><li><button>Dashboard</button></li></Link>
                    <hr />
                    <Link to="/pedidos"><li><button>Pedidos</button></li></Link>
                </ul>
            </div>

            <div>
                <Link to="/"><button onClick={showToastMessage} >Logout</button></Link>
            </div>
        </Sidebar>
    )
}

export default SidebarComponent