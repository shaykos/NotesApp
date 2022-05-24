import { View, ScrollView, Alert } from 'react-native';
import { useState } from 'react';
import { Button, Title, TextInput } from 'react-native-paper';

export default function AddNote({ navigation }) {

    const [note, SetNote] = useState({ title: '', description: '' });

    const SaveNote = async () => {
        console.log('note => ',note);
        let result = await fetch('https://shenkar-notes-server.herokuapp.com/api/notes/add', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        });
        let data = await result.json();
        if (data.acknowledged) {
            Alert.alert('Congrats', 'Note added successfuly');
            navigation.navigate('main');
        }
        else
            Alert.alert('Oops', 'Something went wrong');
    }

    return (
        <View style={{ flex: 1 }}>
            <Title>Add Note</Title>
            <ScrollView>
                <TextInput
                    label="Note Title"
                    Type="outline"
                    value={note.title}
                    onChangeText={(txt) => SetNote(((prev) => ({ ...prev, title: txt })))}
                />
                <TextInput
                    label="description"
                    Type="outline"
                    multiline={true}
                    value={note.description}
                    onChangeText={(txt) => SetNote(((prev) => ({ ...prev, description: txt })))}
                />
                <Button mode="contained" onPress={SaveNote}>Save</Button>
            </ScrollView>
        </View>
    )
}