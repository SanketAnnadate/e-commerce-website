import './App.css';
import MainCarousel from './consumer/components/homeCarousel/MainCarousel';
import Navigation from './consumer/components/navigation/Navigation';

function App() {
  return (
    <div className="App">
        <Navigation/>
      <div>
        <MainCarousel/>
      </div>
    </div>
  );
}

export default App;
