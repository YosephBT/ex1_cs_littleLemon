import './App.css';
import Nav from './components/Nav'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import styles from "./css/styles.css"
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Header />
      <Main />
      <Footer/>
    </Router>
  );
}

export default App;
