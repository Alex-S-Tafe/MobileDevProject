import { Text, View } from 'react-native';
import { Button, Card, List, TextInput, Divider, Switch } from 'react-native-paper';
import { useContext, useState } from 'react';

import { DataProvider, useEventData } from '../DataHandler';


export default function SettingsScreen({ navigation }){
    const { NotificationsOn, setNotificationsOn, styles} = useEventData();

    return (
        <View style={styles.scrollview}>
            <List.Item title="Notifications"
                right={() => (
                    <Switch value={NotificationsOn}
                    onValueChange={() => {setNotificationsOn(!NotificationsOn)}}/>
                )}
                style={styles.defaultpadding}
            />
            <List.Item title="settings item"
                right={() => (
                    <TextInput value="0"
                    onChangeText={{}}
                    keyboardType="numeric"
                    style={{width: 80}}/>
                )}
                style={styles.defaultpadding}
            />
            <Divider style={{margin: 5}}/>
            
            <Button mode="contained" onPress={() => {}}
                style={styles.defaultmargin}
                >Reset</Button>
            
            
        </View>
    );
}

