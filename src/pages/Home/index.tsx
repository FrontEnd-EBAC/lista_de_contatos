import Adicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeContatos from '../../containers/ListaDeContatos'

const Home = () => (
  <>
    <BarraLateral mostrarFiltro={true} />
    <ListaDeContatos />
    <Adicionar />
  </>
)

export default Home
