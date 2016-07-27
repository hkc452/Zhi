/**
 * Created by hkc on 16/7/26.
 */
import {
    AsyncStorage
} from 'react-native'

export get = async (name)=>{
    let res = await AsyncStorage.getItem(name)
    return res?JSON.parse(res):''
}
export set = async (name,val)=>{
    let store = JSON.stringify(val||{})
    await AsyncStorage.setItem(name,store)
}

export del = async (name)=>{
    return await AsyncStorage.removeItem(name)
}