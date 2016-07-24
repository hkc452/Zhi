import {applyMiddleware, createStore} from'redux';
import thunk from 'redux-thunk';
import promise from './promise';
import array from './array';
import analytics from './analytics';
import reducers from 'module';
import createLogger from 'redux-logger';
import {persistStore, autoRehydrate} from 'redux-persist';//离线数据保存
import {AsyncStorage} from 'react-native';
//检查是否在debug状态
var isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;
//redux log 配置
var logger = createLogger({
    predicate: (getState, action) => isDebuggingInChrome,
    collapsed: true,
    duration: true,
});
//应用redux中间件
var YoCreateStore = applyMiddleware(thunk, promise, array, analytics, logger)(createStore);

function configureStore(onComplete) {
    const store = autoRehydrate()(YoCreateStore)(reducers);//创造一个 store
    persistStore(store, {storage: AsyncStorage}, onComplete);
    if (isDebuggingInChrome) {
        window.store = store;//把store 暴露到调试工具
    }
    return store;
}

export default configureStore;