import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddNote from './screens/AddNote';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="main" component={HomeScreen} />
        <Stack.Screen name="add" component={AddNote}/>
    </Stack.Navigator>
  )
}