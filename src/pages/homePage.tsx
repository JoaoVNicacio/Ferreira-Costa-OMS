import { SidebarComponent } from "../components/Sidebar" 
import TableComponent from "../components/Table"
import Wrapper from '../styles/wrapper'
import DashboardComponent from "../components/Dashboard"


export const HomePage = () => {

    return (
        <Wrapper>
            <SidebarComponent/>
            <DashboardComponent/>
        </Wrapper>
    )

}