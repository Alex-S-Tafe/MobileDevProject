import { Text, ScrollView } from "react-native";
import { Card, ActivityIndicator, Button, TextInput, Chip } from 'react-native-paper';
import { useState, useEffect } from 'react';
import { useEventData } from "../DataHandler";


export default function HomeScreen({ navigation }){
    const { EventList, Loading } = useEventData();
    const [selectedChips, setSelectedChips] = useState([]);

    return (
        
        <ScrollView>
            <Card>
                <Card.Title title="Welcome"/>
                <Card.Content>
                    <Text>Find and register for community events</Text>
                    <Button>View Today's Events</Button>
                </Card.Content>
            </Card>
            <TextInput placeholder="Search events..."/>
            <Chip name="Chip1" onPress={() => {toggleChip(name)}} selected={selectedChips.includes(name)} selectedColor={selectedChips.includes(name)? "#FF0000" : "#00FF00"}>ChipTest</Chip>
            <Text>Showing: CRITERIA - RESULT COUNT</Text>
            {Loading && <ActivityIndicator animating={true} size={200}/>}
            {EventList.map(item => (
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
}




