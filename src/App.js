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
import { useEffect, useRef } from 'react';



function App() {
  
  const toastRef = useRef()

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const updateFavicon = (e) => {
      const favicon = document.getElementById('favicon');
      if (favicon) {
        favicon.href = e.matches ? '/favicon-dark.ico' : '/favicon-light.ico';
      }
    };

    updateFavicon(darkModeMediaQuery); // التحقق عند أول تحميل
    darkModeMediaQuery.addEventListener('change', updateFavicon); // الاستماع للتغيير

    return () => {
      darkModeMediaQuery.removeEventListener('change', updateFavicon); // تنظيف بعد الخروج
    };
  }, []);

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
