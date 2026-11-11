import { useState, useEffect } from 'react'
import { ScrollView } from 'react-native'
import { Text, TextInput, Card, Button, ActivityIndicator } from 'react-native-paper'
import { useEventData } from '../DataHandler';

export default function EventScreen({navigation}){
    const { EventList, Loading } = useEventData();

    return (
        <ScrollView>
            <Card>
                <TextInput placeholder="Search Events..."/>
                <Text>Packet of Chips</Text>
                <Date></Date>
                <Button>Clear Filters Chip</Button>
            </Card>
            <Text>Showing: CRITERIA - RESULTCOUNT</Text>
            <Card>
                <Text>Early Date - End Date</Text>
            </Card>
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
    )
}