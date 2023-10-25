import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const BookingScreen = ({ navigation }) => {
    const [name, setName] = React.useState('');
    const [partySize, setPartySize] = React.useState('');
    const [date, setDate] = React.useState('');
    const [time, setTime] = React.useState('');

    const handleReservation = () => {
        if (!name || !partySize || !date || !time) {
            Alert.alert('Please fill in all fields');
        } else {

            Alert.alert(
                'Booking Successful',
                'Thank you for booking!',
                [
                    {
                        text: 'OK',
                        onPress: () => {
                            navigation.navigate('ReservationList'); 
                        },
                    },
                ]
            );
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Restaurant Reservation</Text>
            <TextInput
                style={styles.input}
                placeholder="Your Name"
                onChangeText={text => setName(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Party Size"
                keyboardType="numeric"
                onChangeText={text => setPartySize(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Date (YYYY-MM-DD)"
                onChangeText={text => setDate(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Time (HH:MM AM/PM)"
                onChangeText={text => setTime(text)}
            />
            <Button title="Book Now" onPress={handleReservation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        width: 300,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
    },
});

export default BookingScreen;
