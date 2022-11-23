import {LoginField} from './style'
import {Link} from 'react-router-dom'

const LoginComponent = () => {
    return(
        <LoginField>
            <div className="textos">
                <h1>SEJA BEM VINDO!</h1>
                <p>VAMOS COMEÇAR?</p>
            </div>
            <div className="inputs">
                <input type="text" placeholder='Identificador' />
                <input type="password" placeholder='Senha' />
            </div>
            <div className="recuperacao">
                <a href="#">Esqueci minha senha</a>
                <a href="#">Esqueci meu identificador</a>
            </div>
            <div className="link">
                <Link to="homepage"><button>Entrar</button></Link>
            </div>
        </LoginField>
    )
}

export default LoginComponent