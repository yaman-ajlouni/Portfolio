import './App.css'
import { BrowserRouter } from "react-router-dom";
import { First } from "./Components/first/First";
import { About } from './Components/second/About';
import { Services } from './Components/third/Services';
import { NavBar } from './Components/first/navBar/NavBar';
import { Fourth } from './Components/fourth/Fourth';
import { Portfolio } from './Components/fifth/Portfolio';
import { TwoPeople } from './Components/six/TwoPeople';
import { Last } from './Components/last/Last';
import { Button } from './Components/Button';
import { useRef } from 'react';


function App() {
  const toastRef = useRef()
  return (
    <>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
      <Button />

      <First />
      <About />
      <Services />
      <Fourth />
      <Portfolio />
      <TwoPeople />
      <Last toastRef={toastRef} />
    </>
  );
}

export default App;
