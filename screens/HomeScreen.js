import { Text, ScrollView } from "react-native";
import { Card, ActivityIndicator } from 'react-native-paper';
import { useState, useEffect } from 'react';
import { getStateFromPath } from "@react-navigation/native";
import { Loading } from "../DataHandler";
import { EventList } from "../DataHandler";


export default function HomeScreen({ navigation }){

    return (
        
        <ScrollView>
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
}

