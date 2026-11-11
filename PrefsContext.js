import { createContext } from 'react';

export let FontSizeMult = createContext("2");
export const DarkMode = createContext(true);

// https://react.dev/learn/passing-data-deeply-with-context

// event fires twice on page load but does nothing, in either case
// will not fire by the things that SHOULD fire it ...
export function SetFontSizeMult({val}){
    
    //<FontSizeMult value={val}/>
    // or
    // FontSizeMult = createContext(val)
    // ?
}