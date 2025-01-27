import React, {useState} from 'react';
import {StatusBar, View, Button, Text, TextInput, Alert, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: "lightgrey"
    },

    headerText: {
        fontSize: 40,
        textAlign: 'center',
        marginBottom: 5,
        marginTop: 5
    },

    textinputbox: {
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        marginBottom: 15,
        backgroundColor: "white",
        borderColor: "white"
    },
})

const Signin = ({navigation, route}) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    return (
        <View style={styles.container}>
            <StatusBar/>
            <Text style={styles.headerText}>Registration</Text>
            <Text>Username:</Text>
            <TextInput style={styles.textinputbox} onChangeText={(text) => setUsername(text)} />

            <Text>Email:</Text>
            <TextInput style={styles.textinputbox} onChangeText={(text) => setEmail(text)} />

            <Text>Phone Number</Text>
            <TextInput style={styles.textinputbox} onChangeText={(text) => setNumber(text)} />

            <Button title='Sign In'
                    onPress={() => {
                        let item = [{username: username}, {email: email}, {phone: number}];
                        fetch("https://14ec41d68a7a4381a12e2f2095abb4ca.api.mockbin.io/",
                            {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    "Authorization": "14ec41d68a7a4381a12e2f2095abb4ca"
                                },
                                body: JSON.stringify(item)
                            }
                        )
                            .then((response) => {
                                navigation.navigate('Home');
                            })
                    }
            }/>
        </View>
    );
};

export default Signin;
