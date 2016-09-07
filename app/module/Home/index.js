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
    Text,
    ListView,
    RefreshControl
} from "react-native";
import cssload from 'css/cssload'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getPostsAction} from 'module/Home/action'
let Home = class extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getPostsAction()
    }

    renderRow(v) {
        return (
            <Text>
                {v.excerpt}
            </Text>

        )
    }

    render(){
     
        const {getPost,getPostsAction} = this.props
        
        return (
            <ListView
                dataSource={getPost.newsListView}
                enderRow={(v) =>  this.renderRow(v)}
                refreshControl={
                      <RefreshControl
                        refreshing={getPost.loading}
                        onRefresh={()=>getPostsAction()}
                        tintColor="#34495e"
                        title="下拉加載更多"
                        colors={['#34495e']}
                        progressBackgroundColor="#ffffff"
                      />
                }

                removeClippedSubviews={true}
                pageSize={1}
                initialListSize={5}
                scrollRenderAheadDistance={10}
                removeClippedSubviews={true}
                onEndReachedThreshold={20}
                onEndReached={()=>getPostsAction(getPost.timeStamp)}
            />

        )
    
    }
}
function select(state) {
    return {
        getPost: state.getPost
    }
}
function actions(dispatch){
    bindActionCreators({getPostsAction}, dispatch)
}
export default connect(select,actions)(Home)
const styles = cssload({

})