import './app.css'
import AboutMe from './components/Aboutme/AboutMe';
import FirstPage from './components/FirstPage/FirstPage';
import Flex from './components/Flex/Flex';
import Footer from './components/Footer/Footer';
import GetInTouch from './components/GetInTouch/GetInTouch';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <>
      {/* <Flex/> */}
      <Header/>
      <FirstPage/>
      {/* <AboutMe/>
      <GetInTouch/> */}
      <Footer/>
    </>
  );
}

export default App;
