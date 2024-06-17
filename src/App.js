import { BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import './App.css';
import { Header, Footer } from './sections/index';
import { Home, Profile } from './Pages/index';
import { Container } from './components/index';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Container>
            <Routes>
              <Route path='/Home' element={<Home />} />
              <Route path='/Profile' element={<Profile />} />
            </Routes>
        </Container>
        <Footer />
      </Router>    
    </>
  )
}
export default App;