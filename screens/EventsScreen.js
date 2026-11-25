import { useState, useEffect } from 'react'
import { ScrollView, View } from 'react-native'
import { Text, TextInput, Card, Button, ActivityIndicator, Chip, Searchbar } from 'react-native-paper'
import { useEventData } from '../DataHandler';

export default function EventScreen({navigation}){
    const { EventList, Loading } = useEventData();
    const [selectedChips, setSelectedChips] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [dateSearchText, setDateSearchText] = useState("");

    const categories = [...new Set(EventList.map(item => item.category))];

    const query = searchText.trim().toLowerCase();
    const dateQuery = dateSearchText.trim();
    const filteredEvents = EventList.filter(item => item.title.toLowerCase().includes(query)
        && item.date.includes(dateQuery)
        && (selectedChips.length === 0 || selectedChips.includes(item.category)));
    

    return (
        <ScrollView>
            <Card>
                <Searchbar placeholder="Search..."
                    onChangeText={setSearchText}
                    value={searchText}
                />
                <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8, margin: 8}}>
                    {categories.map( cat => (
                        <Chip
                            key={cat}
                            onPress={() => toggleChip(cat)}
                            selected={selectedChips.includes(cat)}
                            selectedColor={selectedChips.includes(cat) ? "#FF0000" : "#0000FF"}
                        >
                            {cat}
                        </Chip>
                    ))}
                </View>
                <Text>Search date</Text>
                <Searchbar placeholder="YYYY-MM-DD"
                onChangeText={setDateSearchText}
                value={dateSearchText}/>
                <Button onPress={() => clearFilters()}>Clear Filters</Button>
            </Card>
            <Text>Showing: {filteredEvents.length} / {EventList.length} events.</Text>
            {Loading && <ActivityIndicator animating={true} size={200}/>}
            {filteredEvents.map(item => (
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

    function toggleChip(name){
        if (selectedChips.includes(name)) {
            setSelectedChips(selectedChips.filter(c => c !== name));
        } else {
            setSelectedChips([...selectedChips, name]);
        }
    }

    function clearFilters(){
        setSelectedChips([]);
        setSearchText("");
        setDateSearchText("");
    }
}