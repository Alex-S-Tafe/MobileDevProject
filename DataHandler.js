import { useState, useEffect } from "react";


const EVENT_FETCH_URL = 'https://tafeshaun.github.io/elevate-data/events.json';
const timeoutDuration = 2000;


export const [EventList, setEvents] = useState([]);
export const [Loading, setLoading] = useState(true);


export function LoadData(){
    
    
    useEffect(() => {
        fetch(EVENT_FETCH_URL)
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {
                    setEvents(data);
                    setLoading(false);
                }, timeoutDuration);
            })
            .catch(error => console.log(error))
    }, []);
}