import './styles/global.css'
import Header from './components/Header'
import Menu from './components/Menu'
import Footer from './components/Footer'

function App() {
  return (
    <div className="page-wrapper m-3">
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

export default App