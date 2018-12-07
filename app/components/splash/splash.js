import React, { Component } from 'react';
import { ImageBackground, Button, Text, View } from 'react-native'
import styles from './splashStyle';

class splash extends Component {

    componentDidMount() {
        // Start counting when the page is loaded
        this.timeoutHandle = setTimeout(() => {
            // Add your logic for the transition
            this.props.navigation.navigate('Demo')
        }, 5000);
    }

    componentWillUnmount() {
        // This is just necessary in the case that the screen is closed before the timeout fires,
        // otherwise it would cause a memory leak that would trigger the transition regardless,
        // breaking the user experience.
        clearTimeout(this.timeoutHandle);
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./../../../assets/img/weather-splash.png')}
                    style={styles.backgroundImage}>
                </ImageBackground>
                <Button
                    title="Home"
                    onPress={() => this.props.navigation.navigate('Demo')}>
                </Button>
                <Text style={styles.titleText}>Weather Report</Text>
            </View>
        );
    }
}

export default splash;
