import { Text, View } from "react-native";
import { Button, Card } from 'react-native-paper';


export default function EventDetailsScreen({route, navigation}){
    const { item } = route.params;

    return (
        <View>
            <Text>{item.title}</Text>
            <Card>
                <Card.Title title={item.title}/>
                <Card.Content>
                    <Text>Date: {item.date}</Text>
                    <Text>Starts at {item.startTime}</Text>
                    <Text>Finishes at {item.endTime}</Text>
                    <Text>Location: {item.location}</Text>
                    <Text>Category: {item.category}</Text>
                    <Text>Description: {item.description}</Text>
                    <Text>Total Capacity: {item.capacity}</Text>
                    <Text>Remaining spots: {item.spotsRemaining}</Text>
                    <Text>Cancelled: {item.isCancelled? "Yes" : "No"}</Text>
                </Card.Content>
                <Text>{item.startTime} - {item.endTime} - {item.location}</Text>
                <Text>Can of Pringles</Text>
                <Button>Register</Button>
            </Card>
        </View>
    );
}