import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Intro } from './components/Intro';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="App2">
        <Header/>
        <div className="body-container">
          <Intro/>
          <Skills/>
          <Projects/>
          <Certificates/>
          <Contact/>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
