import { LoginField } from './style'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginComponent = () => {

    const showToastMessage = () => {

        toast.success('Login realizado!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }

    return (
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
            <Link to="homepage" className='link'><button onClick={showToastMessage}>Entrar</button></Link>
            <ToastContainer />
        </LoginField>
    )
}

export default LoginComponent