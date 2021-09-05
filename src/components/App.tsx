import './App.css';
import { SimpleNavigation, Navigation } from './Navigation';
import { Homepage } from './Homepage';

function App() {
  return (
    <div className="App">
        <SimpleNavigation />
        <div className="navigation-padding"></div>
        <section className="content">
          <Homepage />
        </section>
    </div>
  );
}

export default App;
