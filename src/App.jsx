import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/Theme";
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

function App() {
    //we didn't define the functionality of lightTheme and darkTheme in Theme.js file. So we define it here.
    const [themeMode, setThemeMode]=useState("light");

    const lightTheme=()=>{
      setThemeMode("light");
    }
    const darkTheme=()=>{
      setThemeMode("dark");
    }

    //actual change in class

    useEffect(()=>{
      //at first we remove our all default value{light, dark}
      document.querySelector('html').classList.remove("light", "dark");
      //then we add our value
      document.querySelector('html').classList.add(themeMode);
    }, [themeMode]);


  return (

    //rapping with theme provider and accessing the value
    <ThemeProvider value={{
      themeMode, lightTheme, darkTheme
    }}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          {/* Theme Button */}
          <ThemeBtn/>
        </div>

        <div className="w-full max-w-sm mx-auto">
          {/* Card */}
          <Card/>
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
