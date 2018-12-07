import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text, View, Button } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import I18n from '../../i18n';
import styles from './demoStyles';
import * as Actions from './demoActions';

class Demo extends Component {

    load = () => {
        this.props.loadData();
    }

    render = () => {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{I18n.t('demo-hello')}</Text>
                <Button
                    style={styles.button}
                    primary
                    onPress={this.load}>
                    <Text>{I18n.t('demo-click-action')}</Text>
                </Button>
                <Text style={styles.loaded}>{this.props.data}</Text>
            </View>
        );
    }
}

Demo.propTypes = {
    navigation: PropTypes.object.isRequired,
    loadData: PropTypes.func.isRequired,
    data: PropTypes.string
};

let mapStateToProps = (state) => {
    return {
        data: state.demoReducer.data
    };
};

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators(Actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Demo);
