import React, {Component} from "react";
import {View, Text} from "react-native";

import {registerForPushNotificationsAsync} from "@utils/PushNotification";

class homeScreen extends Component {
    static navigationOptions = {
        header: null,
        tabBarLabel: "Home"
    };

    constructor() {
        super();
    }

    componentWillMount() {
        registerForPushNotificationsAsync();
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>Home Screen</Text>
            </View>
        );
    }
}

export default homeScreen;
