import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import JoinForm from './components/JoinForm';
import Admin from './components/Admin';
import Music from './components/Music';





function App() {

  
  return (
    <div className="App">

      <Music />
      <BrowserRouter>
        <Routes>

          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/save-a-date/:id" element={ <JoinForm /> } />
          <Route exact path="/admin" element={ <Admin /> } />

        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
