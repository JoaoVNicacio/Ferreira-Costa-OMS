import { SidebarComponent } from "../components/Sidebar" 
import TableComponent from "../components/Table"
import Wrapper from '../styles/wrapper'


export const HomePage = () => {

    return (
        <Wrapper>
            <SidebarComponent/>
            <TableComponent/>
        </Wrapper>
    )

}