import { Text, ScrollView } from "react-native";
import { Card, ActivityIndicator, Button, TextInput, Chip, Searchbar} from 'react-native-paper';
import { useState, useEffect } from 'react';
import { useEventData } from "../DataHandler";


export default function HomeScreen({ navigation }){
    const { EventList, Loading, FilteredEvents, setFilteredEvents } = useEventData();
    const [selectedChips, setSelectedChips] = useState([]);
    const [searchText, setSearchText] = useState("");

    
    return (
        
        <ScrollView>
            <Card>
                <Card.Title title="Welcome"/>
                <Card.Content>
                    <Text>Find and register for community events</Text>
                    <Button>View Today's Events</Button>
                </Card.Content>
            </Card>
            <Searchbar placeholder="Search..."
            onChangeText={setSearchText}
            value={searchText}
            />
            <Chip name="Chip1" onPress={() => {toggleChip(name)}} selected={selectedChips.includes(name)} selectedColor={selectedChips.includes(name)? "#FF0000" : "#0000FF"}>ChipTest</Chip>
            <Text>Showing: CRITERIA - RESULT COUNT</Text>
            {Loading && <ActivityIndicator animating={true} size={200}/>}
            {FilteredEvents.map(item => (
                <Card
                    key={item.id}
                    onPress={() => navigation.navigate("EventDetailsScreen", {item})}
                >
                    <Card.Title title={item.title}/>
                    <Card.Content>
                        <Text>Description: {item.description}</Text>
                        <Text>Date: {item.date}</Text>
                        <Text>Spots Remaining: {item.spotsRemaining}</Text>
                    </Card.Content>
                </Card>
            ))}
            
        </ScrollView>
    );

    function toggleChip(name){
        if (selectedChips.includes(name)) {
            setSelectedChips(selectedChips.filter(c => c !== name));
        } else {
            setSelectedChips([...selectedChips, name]);
        }
    }

    function filterEvents(txt){
        console.log("Search changed");
        let filteredEvents = [];
        setSearchText(txt);
        EventList.map(item => {
            if (item.title.includes(searchText)){
                filteredEvents.push(item);
            }
        });
        setFilteredEvents(filteredEvents);
    }
}






