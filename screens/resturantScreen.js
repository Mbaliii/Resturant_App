import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import images from '../components/images';
import { useNavigation } from '@react-navigation/native';

function RestaurantScreen() {
    const [restaurants, setRestaurants] = useState([]);
    const navigation = useNavigation();

    // Use local data or any other data source instead of Firebase
    useEffect(() => {
        // Fetch data from your data source and set it to the 'restaurants' state
        const restaurantList = [
            {
                id: 1,
                name: 'Restaurant 1',
                description: 'Description for Restaurant 1',
                location: 'Location 1',
                image: 'image1', // Make sure 'image1' corresponds to your images array
            },
            {
                id: 2,
                name: 'Restaurant 2',
                description: 'Description for Restaurant 2',
                location: 'Location 2',
                image: 'image2',
            },
            // Add more restaurant data as needed
        ];

        setRestaurants(restaurantList);
    }, []);

    const addRestaurantToData = (restaurant) => {
        // Implement the logic to add a restaurant to your data source
    };

    const deleteRestaurant = (restaurantId) => {
        // Implement the logic to delete a restaurant from your data source
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
                        {/* <Text style{styles.description}>{restaurant.description}</Text> */}
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
