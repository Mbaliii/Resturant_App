import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import images from '../components/images';
import { useNavigation } from '@react-navigation/native';

function RestaurantScreen() {
    const [restaurants, setRestaurants] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        const restaurantList = [
            {
                id: 1,
                name: 'Restaurant 1',
                description: 'Description for Restaurant 1',
                location: 'Location 1',
                image: 'image1', 
            },
            {
                id: 2,
                name: 'Restaurant 2',
                description: 'Description for Restaurant 2',
                location: 'Location 2',
                image: 'image2',
            },
            
        ];

        setRestaurants(restaurantList);
    }, []);

    const addRestaurantToData = (restaurant) => {
    };

    const deleteRestaurant = (restaurantId) => {
    };

    const navigateToEditScreen = (restaurant) => {
        navigation.navigate('Edit', {
            restaurant,
            onSave: handleEditRestaurant,
        });
    };

    const handleEditRestaurant = (editedRestaurant) => {
        const updatedRestaurants = restaurants.map((r) => {
            if (r.id === editedRestaurant.id) {
                return editedRestaurant;
            } else {
                return r;
            }
        });
        setRestaurants(updatedRestaurants);
    };

    const handleBackToAdmin = () => {
        navigation.navigate('Admin');
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                {restaurants.map((restaurant) => (
                    <View key={restaurant.id} style={styles.card}>
                        <Image style={styles.image} source={images[restaurant.image]} />
                        <Text style={styles.name}>{restaurant.name}</Text>
                        <Text style={styles.location}>{restaurant.location}</Text>
                        <Button title="Add to Reservations" onPress={() => addRestaurantToData(restaurant)} />
                        <Button title="Edit" onPress={() => navigateToEditScreen(restaurant)} />
                        <Button title="Delete" onPress={() => deleteRestaurant(restaurant.id)} />
                    </View>
                ))}
            </ScrollView>

            <TouchableOpacity style={styles.backButton} onPress={handleBackToAdmin}>
                <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    card: {
        backgroundColor: '#fff',
        padding: 20,
        marginBottom: 20,
        borderRadius: 8,
        elevation: 4,
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        borderRadius: 8,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 16,
        marginTop: 8,
    },
    location: {
        fontSize: 14,
        color: '#888',
        marginTop: 8,
    },
    backButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: 'black',
        padding: 15,
        borderRadius: 15,
    },
    backButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default RestaurantScreen;
