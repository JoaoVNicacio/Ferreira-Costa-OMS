import {HomePage} from './pages/homePage'
import {Login} from './pages/login'
import {Pedidos} from './pages/pedidos'

import GlobalStyles from './styles/global'

const App = () => {

  return (
    <div>
      <GlobalStyles/>
      <Pedidos/>
    </div>
  )

}

export default App
