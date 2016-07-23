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
      render(){
          return (
              <View style={styles.f1}>
                    <Text>Zhi</Text>
              </View>
          )
      }
}

export default connect()(App)

const styles = cssload({})