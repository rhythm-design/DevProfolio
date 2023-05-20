import './App.scss';
import Portfolio from './containers/Portfolio';

function App() {
  return (
    <div className="App">
        <div className="portfolio-desktop">
          <Portfolio/>
        </div>
        <h1 className="mobile-support">Mobile Support is coming soon</h1>
    </div>
  );
}

export default App;
