import { useState, useEffect, createContext, useContext } from "react";
import { Card } from "react-native-paper";
import { StyleSheet } from "react-native";


const EVENT_FETCH_URL = 'https://tafeshaun.github.io/elevate-data/events.json';
const timeoutDuration = 2000;


const DataContext = createContext(null);


export function DataProvider({ children }){
    // App functioning
    const [EventList, setEvents] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [SelectedChipColor, setSelectedChipColor] = useState("#FFEA00");


    // App settings
    const [NotificationsOn, setNotificationsOn] = useState(false);

    // App styling
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        card: {
            margin: 5,
        },
        scrollview: {
            margin: 5,
        },
        defaultpadding: {
            padding: 5,
        },
        defaultmargin: {
            margin: 5,
        },
    });
    
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
        <DataContext.Provider value={{ EventList, Loading, NotificationsOn, setNotificationsOn, styles, SelectedChipColor, setSelectedChipColor }}>
            { children }
        </DataContext.Provider>
    );
}

export function useEventData(){
    return useContext(DataContext);
}
