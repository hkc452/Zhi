/**
 * Created by hkc on 16/9/6.
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
import TabNavigator from 'react-native-tab-navigator'
import cssload from "css/cssload";
import {YIcon} from "component"
import Home from './Home'
export default class extends Component {


    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectedTab : 'Home'
        };
    }


    render(){

        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'Home'}
                    title="首页"
                    selectedTitleStyle={styles.czhi}
                    renderIcon={() => <YIcon name='shouye-copy-copy' size={20} />}
                    renderSelectedIcon={() => <YIcon name='shouye'  size={20}  style={styles.czhi}/>}
                    onPress={() => this.setState({ selectedTab: 'Home'})}>
                    <Home/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'Person'}
                    title="我的"
                    selectedTitleStyle={styles.czhi}
                    renderIcon={() => <YIcon name='wode' size={20} />}
                    renderSelectedIcon={() => <YIcon name='wode2'  size={20}  style={styles.czhi}/>}
                    onPress={() => this.setState({ selectedTab: 'Person'})}>
                    <Text>人</Text>
                </TabNavigator.Item>
            </TabNavigator>
        )
    }


}

const styles = cssload({

})