import { Text, View } from 'react-native';
import { Button, Card, List, TextInput, Divider, Switch } from 'react-native-paper';
import { useContext, useState } from 'react';

import { DataProvider, useEventData } from '../DataHandler';


export default function SettingsScreen({ navigation }){
    const { NotificationsOn, setNotificationsOn, styles, SelectedChipColor, setSelectedChipColor} = useEventData();

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
                    <TextInput value={SelectedChipColor}
                    onChangeText={() => {setSelectedChipColor}}
                    keyboardType="default"
                    style={{width: 100}}/>
                )}
                style={styles.defaultpadding}
            />
            <Divider style={{margin: 5}}/>
            
            <Button mode="contained" onPress={() => {setSelectedChipColor("#FFEA00")}}
                style={styles.defaultmargin}
                >Reset</Button>
            
            
        </View>
    );
}

