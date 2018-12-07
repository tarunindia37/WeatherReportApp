import React from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';

import Store from './app/store';
import Routes from './app/config/routes';

const AppNavigator = createStackNavigator(
  Routes,
  {
    initialRouteName: 'Splash',
    navigationOptions: {
        header: null
    }
  }
);

class App extends React.Component {
    render() {
        return (
            <Provider store={Store}>
                <AppNavigator />
            </Provider>
        );
    }
}

export default App;
