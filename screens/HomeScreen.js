import { View, Text, FlatList } from 'react-native';
import { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Title, AnimatedFAB } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import Note from '../components/Note';

export default function HomeScreen({ navigation }) {

    const [notes, SetNotes] = useState([]);

    const LoadNotes = async () => {
        let result = await fetch('https://shenkar-notes-server.herokuapp.com/api/notes', { method: 'GET' });
        let data = await result.json();
        SetNotes(data);
    }

    useFocusEffect(useCallback(() => {
        LoadNotes();
    }, [navigation]));

    return (
        <View style={{ flex: 1 }}>
            <Title>Notes</Title>
            <FlatList
                data={notes}
                renderItem={Note}
                keyExtractor={(item) => item._id}
            />
            <AnimatedFAB
                small
                icon={() => <AntDesign name="plus" size={24} color="black" />}
                style={{ position: 'absolute', bottom: 20, right: 20 }}
                onPress={() => { navigation.navigate('add') }}
            />
        </View>
    )
}
