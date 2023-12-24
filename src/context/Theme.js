import { createContext, useContext } from "react";

//we write 2 files elements in one file. In working field people work like this

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: ()=>{},
    lightTheme: ()=>{}
});//we can initialize value in this

export const ThemeProvider = ThemeContext.Provider//make provider in one file for rapping

//make a hook. thats why we dont need 2 import{useContext, userContext} in file. we just import this hook.

export default function useTheme(){
    return useContext(ThemeContext);
}