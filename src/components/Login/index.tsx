import {LoginField} from './style'

const LoginComponent = () => {
    return(
        <LoginField>
            <div className="textos">
                <h1>SEJA BEM VINDO!</h1>
                <p><strong>VAMOS COMEÇAR?</strong></p>
            </div>
            <div className="inputs">
                <input type="text" placeholder='Identificador' />
                <input type="password" placeholder='Senha' />
            </div>
            <div className="recuperacao">
                <a href="#">Esqueci minha senha</a>
                <a href="#">Esqueci meu identificador</a>
            </div>
            <button>Entrar</button>
        </LoginField>
    )
}

export default LoginComponent