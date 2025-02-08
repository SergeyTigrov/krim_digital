import './app.css'
import AboutMe from './components/Aboutme/AboutMe';
import FirstPage from './components/FirstPage/FirstPage';
import Footer from './components/Footer/Footer';
import GetInTouch from './components/GetInTouch/GetInTouch';
import Header from './components/Header/Header';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <FirstPage/>
        <AboutMe/>
        <GetInTouch/>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
