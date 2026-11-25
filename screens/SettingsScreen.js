import { Text, View } from 'react-native';
import { Button, Card, List, TextInput, Divider, Switch } from 'react-native-paper';
import { useContext, useState } from 'react';

import { DataProvider, useEventData } from '../DataHandler';


export default function SettingsScreen({ navigation }){
    const { NotificationsOn, setNotificationsOn} = useEventData();

    return (
        <View>
            <List.Item title="settings item"
                right={() => (
                    <TextInput value="0"
                    onChangeText={{}}
                    keyboardType="numeric"
                    style={{width: 80}}/>
                )}
            />
            
            <Button mode="contained" onPress={() => {}}>Reset</Button>
            <Divider />
            <List.Item title="Notifications"
                right={() => (
                    <Switch value={NotificationsOn}
                    onValueChange={() => {setNotificationsOn(!NotificationsOn)}}/>
                )}
            />
            
        </View>
    );
}

