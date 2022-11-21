import * as W from '../styles/wrapper'
import Logo from '../assets/images/FC-logo-maior.svg'
import LoginComponent from '../components/Login'

export const Login = () => {
    return (
        <W.WrapperLogin>
            <LoginComponent/>
            <div className="logo">
                <img src={Logo} alt="" />
                <p>Tudo para sua casa, <br /> construção e decoração</p>
            </div>
        </W.WrapperLogin>
    )
}