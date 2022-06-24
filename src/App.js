import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';
import JoinForm from './components/JoinForm';
import Admin from './components/Admin';
import Music from './components/Music';
import { AudioContext } from './context/AudioContext';
import Wedding from './components/Wedding';
import Party from './components/Party';
// import useMediaQuery from './hooks/useMediaQuery';






function App() {

  const [play, setPlay] = useState(false);
  

  
  return (
    <div className="App">

      {/* {mediaCheck()} */}
      

      <Music />
      <BrowserRouter>
        <AudioContext.Provider value={{ play, setPlay }}>
          <Routes>

            <Route exact path="/" element={ <Home /> } />
            <Route exact path="/wedding" element={ <Wedding /> } />
            <Route exact path="/wedding-celebration" element={ <Party /> } />
            <Route exact path="/save-a-date/:id" element={ <JoinForm /> } />
            <Route exact path="/admin" element={ <Admin /> } />

          </Routes>
      
        </AudioContext.Provider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
