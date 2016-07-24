/**
 * Created by hkc on 2016/7/23.
 */
import React, {Component} from "react";
import {
    Dimensions,
    Navigator,
    BackAndroid,
    Platform,
    AsyncStorage,
    StatusBar,
    View,
    StyleSheet,
    Alert,
    Text
} from "react-native";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import cssload from "css/cssload";
let App = class extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    _renderScene(route,navigator) {
        
    }

    componentWillMount() {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    componentWillUnMount() {
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    onBackAndroid = () => {
        const {navigator} = this.refs;
        const routers = navigator.getCurrentRoutes();
        if (routers.length > 1) {
            navigator.pop();
            return true;
        }
        if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
            return false;//真的退出应用
        }
        this.lastBackPressed = Date.now();
        Toast.showShortCenter('再按一次退出应用');
        return true;
    };

    render() {
        return (
            <View style={[styles.f1]}>
                <Navigator
                    ref="navigator"
                    configureScene={(route) => {
                          return Navigator.SceneConfigs.PushFromRight;
                    }}
                    initialRoute={{id:id}}
                    renderScene={this._renderScene}


                />
            </View>
        )
    }
}

export default connect()(App)

const styles = cssload({})