import './App.scss';
import Blog from './components/Blog';
import Companies from './components/Companies';
import CTA from './components/CTA';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Possibilities from './components/Possibilities';
import Whatisgpx from './components/Whatisgpx';

function App() {
  return (
    <div className="App" >
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
      </div>
      <Companies/>
      <Whatisgpx/>
      <Feature/>
      <Possibilities/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
