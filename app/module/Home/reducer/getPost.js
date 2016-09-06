/**
 * Created by hkc on 16/9/6.
 */
import {
    ListView
} from 'react-native';

let newsListView = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
newsListView = newsListView.cloneWithRows([]);

let defaultConfig = {
    loading : false,
    posts:[],
    newsListView,
    timeStamp:'',
    count :0
}
export default function (state = defaultConfig,action){

    switch (action.type){
        case 'GET_POST_LOADING':
            return Object.assign({},state,{loading:true})
        case 'GET_POST_FAILED':
            return Object.assign({},state,{loading:false})
        case 'GET_NEW_POST_SUCCESS':
            var {posts ,count } =action.data
            var timeStamp = posts[count].publishtime
            return Object.assign({}, state, {...action.data},{newsListView:newsListView.cloneWithRows(posts),loading:false,posts,timeStamp,count})
        case 'GET_MORE_POST_SUCCESS':
            var {posts,count} = state
            var {nPosts,nCount} = action.data
            var timeStamp = nPosts[nCount].publishtime
            posts = posts.concat(nPosts)
            count = count + nCount
            return Object.assign({}, state, {...action.data},{newsListView:newsListView.cloneWithRows(action.data.posts),loading:false,posts,timeStamp,count})
        default:
            return state
    }

}