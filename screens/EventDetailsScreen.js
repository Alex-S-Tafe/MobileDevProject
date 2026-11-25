import { Text, View } from "react-native";
import { Button, Card } from 'react-native-paper';
import { useEventData } from '../DataHandler'


export default function EventDetailsScreen({route, navigation}){
    const { item } = route.params;
    const { styles } = useEventData();

    return (
        <View style={styles.scrollview}>
            <Card style={styles.card} mode="contained">
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
            </Card>
            <Text style={styles.defaultmargin}>{item.startTime} - {item.endTime} - {item.location}</Text>
            <Button
                onPress={() => alert(`Registered for ${item.title} on ${item.date}`)}
                mode="contained"
                style={styles.defaultmargin}
                >
                    Register for {item.title}
            </Button>
        </View>
    );
}