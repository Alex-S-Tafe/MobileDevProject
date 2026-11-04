import { Text, ScrollView } from "react-native";
import { Card, ActivityIndicator } from 'react-native-paper';
import { useState, useEffect } from 'react';


const EVENT_FETCH_URL = 'https://tafeshaun.github.io/elevate-data/events.json';
const timeoutDuration = 2000;

export default function HomeScreen({ navigation }){

    const [eventList, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

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

    return (
        <ScrollView>
            <Text>Home Screen</Text>
            {loading && <ActivityIndicator animating={true} size={200}/>}
            {eventList.map(item => (
                <Card
                    key={item.id}
                    onPress={() => navigation.navigate("EventDetailsScreen", {item})}
                >
                    <Card.Title title={item.title}/>
                    <Card.Content>
                        <Text>Description: {item.description}</Text>
                    </Card.Content>
                </Card>
            ))}
            
        </ScrollView>
    );
}

