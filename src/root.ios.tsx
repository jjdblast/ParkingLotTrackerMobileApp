/**
 * Created by archheretic on 04.04.17.
 */

import *  as React from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from "react-native";
import Component = React.Component;

export interface Props {}

export interface State {}

export default class ParkingLotTrackerMobileApp extends Component<Props, State> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.ios.js
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev menu
                </Text>
            </View>
        );
    }
}

const styles: any = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5,
    },
});

AppRegistry.registerComponent("ParkingLotTrackerMobileApp", () => ParkingLotTrackerMobileApp);