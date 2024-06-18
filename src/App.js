import './App.css';
// import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './Components/Navbar/Navbar';
import { Element } from 'react-scroll';
// import { Home } from './Pages/Home';
import { About } from './Components/About/About';
import { Skills } from './Components/Skills/Skills';
import { Projects } from './Components/Projects/Projects';
import { Contact } from './Components/Contact/Contact';
import { Banner } from './Components/Banner/Banner';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <BrowserRouter>
    <>
      <Navbar/>
      <Element name="banner">
        <Banner />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      {/* <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes> */}
    
    </>
  );
}

export default App;
