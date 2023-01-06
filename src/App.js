import MainGame from './components/MainGame.js'
import {HistoryProvider} from './HistoryContext.js'
import './App.css';
function App() {
  return (
    <HistoryProvider>
    <div className ="App">
      <MainGame></MainGame>
    </div>
    </HistoryProvider>
  );
}

export default App;
