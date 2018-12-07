import React from 'react';
import { Container } from 'native-base';
import PropTypes from 'prop-types';

import Splash from '../components/splash/splash';

const splashScreen = ({navigation}) => (
    <Container>
        <Splash navigation={navigation}></Splash>
    </Container>
);

splashScreen.propTypes = {
    navigation: PropTypes.object.isRequired
};

splashScreen.navigationOptions = {
    title: 'splashScreen',
};

export default splashScreen;
