import { Text, View } from 'react-native';
import { Button, Card, List, TextInput, Divider, Switch } from 'react-native-paper';
import { useContext, useState } from 'react';
import { FontSizeMult, SetFontSizeMult, DarkMode } from '../PrefsContext';




export default function SettingsScreen(){
    let fontSize = useContext(FontSizeMult);

    return (
        <View>
            <List.Item title="Font Size Mupltiplier"
                right={() => (
                    <TextInput value={fontSize}
                    onChangeText={SetFontSizeMult("5")}
                    keyboardType="numeric"
                    style={{width: 80}}/>
                )}
            />
            
            <Button mode="contained" onPress={SetFontSizeMult("1")}>Reset</Button>
            <Divider />
            
        </View>
    );
}

