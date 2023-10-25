import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReservationList = ({ route }) => {
    const { newBooking } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.historyTitle}>Recent Bookings</Text>
            <Text style={styles.bookingItem}>
                {newBooking.name}, Party of {newBooking.partySize}, {newBooking.date}, {newBooking.time}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    historyTitle: {
        fontSize: 24,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    bookingItem: {
        fontSize: 18,
        marginBottom: 5,
    },
});

export default ReservationList;
