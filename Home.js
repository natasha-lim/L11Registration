import React, { useState, useEffect } from 'react';
import { StatusBar, FlatList, StyleSheet, Text, View, Alert } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#f5f5f5",
    },
    itemContainer: {
        marginBottom: 12,
        padding: 12,
        backgroundColor: "#fff",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    headerText: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 8,
    },
    itemText: {
        fontSize: 14,
        color: "#333",
    },
    emptyMessage: {
        textAlign: "center",
        marginTop: 20,
        fontSize: 16,
        color: "#888",
    },
});

const Home = ({ route }) => {
    const [myData, setMyData] = useState([]);

    // Fetch the initial dataset
    useEffect(() => {
        fetch("https://14ec41d68a7a4381a12e2f2095abb4ca.api.mockbin.io/")
            .then((response) => response.json())
            .then((myJson) => {
                setMyData(myJson); // Set initial data
            });
    }, []);

    // Render individual items in the list
    const renderItem = ({ item }) => {
        return (
            <View style={styles.itemContainer}>
                <Text style={styles.headerText}>Teammate Details:</Text>
                <Text style={styles.itemText}>Username: {item.username}</Text>
                <Text style={styles.itemText}>Email: {item.email}</Text>
                <Text style={styles.itemText}>Phone: {item.phone}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <StatusBar />
            <FlatList
                data={myData}
                renderItem={renderItem}
            />
        </View>
    );
};


export default Home;
