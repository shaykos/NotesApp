import { View, Text } from 'react-native'
import React from 'react';
import { Headline, Paragraph, Subheading } from 'react-native-paper';

export default function Note({ item }) {
    return (
        <View key={item.id}>
            <Headline>{item.title}</Headline>
            <Subheading>{new Date(item.createdAt).toDateString()}</Subheading>
            <Paragraph>{item.description}</Paragraph>
        </View>
    )
}

