import store from '@store';
import React from 'react';
import {Provider} from 'react-redux';
import {UIManager} from 'react-native';
import {Root} from 'native-base';
import AppRoot from '@app/index.js';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        UIManager.setLayoutAnimationEnabledExperimental
        && UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    render() {
        return (
            <Provider store={store}>
                <Root>
                    <AppRoot/>
                </Root>
            </Provider>
        );
    }
}
