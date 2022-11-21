import SidebarComponent from "../components/Sidebar" 
import * as W from '../styles/wrapper'
import DashboardComponent from "../components/Dashboard"
import TimeFilterComponent from "../components/TimeFilter"
import React, {useState} from 'react'

export const HomePage = () => {

    const [selected, setSelected] = useState("")

    return (
        <W.WrapperHome>
            <SidebarComponent/>
            <TimeFilterComponent selected={selected} setSelected={setSelected}/>
            <DashboardComponent/>
        </W.WrapperHome>
    )

}