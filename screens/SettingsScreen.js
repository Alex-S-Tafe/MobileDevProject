import { Text, View } from 'react-native';
import { Button, Card, List, TextInput, Divider, Switch } from 'react-native-paper';
import { useContext, useState } from 'react';

import { DataProvider, useEventData } from '../DataHandler';


export default function SettingsScreen({ navigation }){
    const { NotificationsOn, setNotificationsOn, styles, SelectedChipColor, setSelectedChipColor} = useEventData();
    const [chipColorDraft, setChipColorDraft] = useState(SelectedChipColor);

    return (
        <View style={styles.scrollview}>
            <List.Item title="Notifications"
                right={() => (
                    <Switch value={NotificationsOn}
                    onValueChange={() => {setNotificationsOn(!NotificationsOn)}}/>
                )}
                style={styles.defaultpadding}
            />
            <List.Item title="Selected Chip Colour"
                right={() => (
                    <TextInput 
                    onChangeText={(text) => {setChipColorDraft(text)}}
                    value={chipColorDraft}
                    onBlur={() => changeChipColour(chipColorDraft)}
                    onSubmitEditing={() => changeChipColour(chipColorDraft)}
                    keyboardType="default"
                    style={{width: 110}}/>
                )}
                style={styles.defaultpadding}
            />
            <Divider style={{margin: 5}}/>
            
            <Button mode="contained" onPress={() => {setSelectedChipColor("#FFEA00")}}
                style={styles.defaultmargin}
                >Reset</Button>
            
            
        </View>
    );

    // TODO: handle non-hexadecimal character crash
    function changeChipColour(value){
        let text = value;
        if (text.length === 0)
        {
            text = "#";
        }
        while (text.length < 7) {
            text += "0";
        }
        if (value.length > 7){
            text = value.slice(0, 7);
        }
        setChipColorDraft(text);
        setSelectedChipColor(text);
    }
}

