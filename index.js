/** @format */

import {AppRegistry,AppState} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import codePush from 'react-native-code-push';

AppRegistry.registerComponent(appName, () => App);
AppState.addEventListener("change", (newState) => {
    newState === "active" && codePush.sync();
});