import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/global'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from './pages/login'
import { HomePage } from './pages/homePage'
import { Pedidos } from './pages/pedidos'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles/>
    <Router>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/homepage"  element={<HomePage/>}/>
                <Route path="/pedidos"  element={<Pedidos/>}/>
            </Routes>
        </Router>
  </React.StrictMode>
)
