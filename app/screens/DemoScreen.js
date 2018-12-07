import React from 'react';
import { StyleSheet } from 'react-native';
import { Container } from 'native-base';
import PropTypes from 'prop-types';

import Demo from '../components/demo/demo';

const DemoScreen = ({navigation}) => (
    <Container style={styles.container}>
        <Demo navigation={navigation} />
    </Container>
);

DemoScreen.propTypes = {
    navigation: PropTypes.object.isRequired
};

DemoScreen.navigationOptions = {
    title: 'Demo',
};

export default DemoScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff6161'
    },
});
