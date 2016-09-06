/**
 * Created by hkc on 16/9/6.
 */
import {consts,httpConfig,RQ} from 'utils'
let Toast = require('@remobile/react-native-toast');
let getPostsAction = (timeStamp)=>{

    return async (dispatch)=>{
        dispatch({
            type:'GET_POST_LOADING'
        })
        try{
            let res = await RQ.get(httpConfig.getposts+timeStamp,{},consts.api)
            if(!res && !res.error){
                const {count, posts} = res
                let type = timeStamp?'GET_MORE_POST_SUCCESS':'GET_NEW_POST_SUCCESS'
                dispatch({
                    type:type,
                    data:{count, posts}
                })
                
            }else {
                dispatch({
                    type:'GET_POST_FAILED'
                })
                Toast.showShortCenter("系统繁忙,请稍后再试")
            }
        }catch (err){
            dispatch({
                type:'GET_POST_FAILED'
            })
            Toast.showShortCenter("系统繁忙,请稍后再试")
        }

    }

}


export default {
    getPostsAction
}