import './App.scss';
import Companies from './components/Companies';
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
    </div>
  );
}

export default App;
