import './App.scss';
import Companies from './components/Companies';
import Feature from './components/Feature';
import Header from './components/Header';
import Navbar from './components/Navbar';
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
    </div>
  );
}

export default App;
