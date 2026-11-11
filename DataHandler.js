import { useState, useEffect, createContext, useContext } from "react";


const EVENT_FETCH_URL = 'https://tafeshaun.github.io/elevate-data/events.json';
const timeoutDuration = 2000;


const DataContext = createContext(null);


export function DataProvider({ children }){
    const [EventList, setEvents] = useState([]);
    const [Loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch(EVENT_FETCH_URL)
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {
                    setEvents(data);
                    setLoading(false);
                }, timeoutDuration);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            })
    }, []);

    return (
        <DataContext.Provider value={{ EventList, Loading }}>
            { children }
        </DataContext.Provider>
    );
}

export function useEventData(){
    return useContext(DataContext);
}