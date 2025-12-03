import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductView from './screens/ProductView';

function App() {
  return (
    <Router>
      <div>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} exact />
            <Route path="/" element={<ProductView />} exact />
          </Routes>
        </Container>
      </main>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
