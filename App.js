import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator, createAppContainer } from 'react-navigation';

//import store for reducers
import store from './app/store';

//import screens
import Home from './app/screens/Home';//Import the component 

const AppNavigator = createAppContainer(createStackNavigator({

    HomeScreen: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({ header: null })
    }

}));

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigator />
            </Provider>
        );
    }
}
