import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import JoinForm from './components/JoinForm';
import Admin from './components/Admin';
import Music from './components/Music';
// import useMediaQuery from './hooks/useMediaQuery';






function App() {

  // const is1024 = useMediaQuery('(min-width: 1024px)');
  // const is956 = useMediaQuery('(min-width: 956px)');
  // const is840 = useMediaQuery('(min-width: 840px)');
  // const is768 = useMediaQuery('(min-width: 768px)');
  // const is520 = useMediaQuery('(min-width: 520px)');
  // const is440 = useMediaQuery('(min-width: 440px)');
  // const is375 = useMediaQuery('(min-width: 375px)');
  // const is280 = useMediaQuery('(min-width: 280px)');
  // const is130 = useMediaQuery('(min-width: 130px)');


  // const mediaCheck = () => {

    
  //   if(is1024){
  //     return <h1>screen 1024</h1>
  //   }
  //   if(is956){
  //     return <h1>screen 956</h1>
  //   }
  //   if(is840){
  //     return <h1>screen 840</h1>
  //   }
  //   if(is768){
  //     return <h1>screen 768</h1>
  //   }
  //   if(is520){
  //     return <h1>screen 520</h1>
  //   }
  //   if(is440){
  //     return <h1>screen 440</h1>
  //   }
  //   if(is375){
  //     return <h1>screen 375</h1>
  //   }
  //   if(is280){
  //     return <h1>screen 280</h1>
  //   }
  //   if(is130){
  //     return <h1>screen 130</h1>
  //   }
  // }

  
  return (
    <div className="App">

      {/* {mediaCheck()} */}
      

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
