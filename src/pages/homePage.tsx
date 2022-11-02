import SidebarComponent from "../components/Sidebar" 
import Wrapper from '../styles/wrapper'
import DashboardComponent from "../components/Dashboard"
import TimeFilterComponent from "../components/TimeFilter"
import React, {useState} from 'react'

export const HomePage = () => {

    const [selected, setSelected] = useState("")

    return (
        <Wrapper>
            <SidebarComponent/>
            <TimeFilterComponent selected={selected} setSelected={setSelected}/>
            <DashboardComponent/>
        </Wrapper>
    )

}