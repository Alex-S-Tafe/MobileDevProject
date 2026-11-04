import { Text, ScrollView } from "react-native";
import { Card } from 'react-native-paper';


export default function HomeScreen({ navigation }){
    return (
        <ScrollView>
            
            <Text>Home Screen</Text>
            {MOCKITEMS.map(item => (
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

const MOCKITEMS = [
    {
        id: "1", 
        title: "Andventure Book", 
        description: "The hero went on an adventure",
        total: 10
    },
    {
        id: "2", 
        title: "Maths Book", 
        description: "1 + 1 is 2",
        total: 10
    },
    {
        id: "3", 
        title: "Sci-Fi Book", 
        description: "The hero went to space",
        total: 10
    },
    {
        id: "4", 
        title: "Loruem Ipsium Book", 
        description: "I don't remember my Loruem Ipsium...Whoops",
        total: 10
    },
    {
        id: "5", 
        title: "Cat and Dog Book", 
        description: "A book about household pets",
        total: 10
    },
    {
        id: "6", 
        title: "Plant Book", 
        description: "A book about household plants",
        total: 10
    },
    {
        id: "7", 
        title: "Movie Event", 
        description: "Some EHC movie event placeholder",
        total: 10
    },
    
];