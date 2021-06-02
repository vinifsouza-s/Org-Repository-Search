import './App.css';
import Search from './components/Header/Search';
import RepositoryInfo from './components/RepositoryInfo/RepositoryInfo';


function App() {
  return (
    <div className="App">
      <h1>Repository Search</h1>
     <Search/>
     <RepositoryInfo/>
    </div>
  );
}

export default App;
