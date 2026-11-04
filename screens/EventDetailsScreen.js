import { Text, View } from "react-native";
import { Card } from 'react-native-paper';


export default function EventDetailsScreen({route, navigation}){
    const { item } = route.params;

    return (
        <View>
            <Text>{item.title}</Text>
            <Card>
                <Card.Title title={item.title}/>
                <Card.Content>
                    <Text>{item.desciption}</Text>
                </Card.Content>
            </Card>
        </View>
    );
}