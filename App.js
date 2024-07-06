import './App.css';
import CardGallery from './Components/CardGallery';
import Navbar from './Components/Navbar';
import SearchBar from './Components/SearchBar';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <SearchBar/>
      <CardGallery/>
      
    </div>
  );
}

export default App;
