import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import LoginButtons from "../components/LoginButtons";


type Props = {};
class Login extends Component<Props> {

    static navigationOptions = ({ navigation  }) => ({
            title: "Login",
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#2D3F43'
            },

        }
    );



    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#2D3F43"
                    barStyle="light-content"
                />
                <LoginButtons/>
            </View>
        );
    }
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEF2F5',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
