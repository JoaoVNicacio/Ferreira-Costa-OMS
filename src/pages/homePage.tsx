import SidebarComponent from "../components/Sidebar" 
import Wrapper from '../styles/wrapper'
import DashboardComponent from "../components/Dashboard"
import TimeFilterComponent from "../components/TimeFilter"

export const HomePage = () => {

    return (
        <Wrapper>
            <SidebarComponent/>
            <TimeFilterComponent/>
            <DashboardComponent/>
        </Wrapper>
    )

}