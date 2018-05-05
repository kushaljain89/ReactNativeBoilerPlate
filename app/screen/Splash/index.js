import React, {Component} from "react";
import {View, Text} from "react-native";

class Splash extends Component {
    static navigationOptions = {
        header: null,
        tabBarLabel: "Home"
    };

    constructor() {
        super();
    }

    render() {
        return (
            <View>
                <Text>Splash Screen</Text>
            </View>
        );
    }
}

export default Splash;
