import {LoginField} from './style'

const LoginComponent = () => {
    return(
        <LoginField>
            <h1>SEJA BEM VINDO!</h1>
            <p><strong>VAMOS COMEÇAR?</strong></p>
            <input type="text" placeholder='Identificador' />
            <input type="password" placeholder='Senha' />
            <a href="#">Esqueci minha senha</a>
            <a href="#">Esqueci meu identificador</a>
            <button>Entrar</button>
        </LoginField>
    )
}

export default LoginComponent