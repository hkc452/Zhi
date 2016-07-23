import {StyleSheet} from 'react-native';
import css from './common';
let cssload = (style,commonCss=css,cb)=>{
    if('function' === typeof style){
        style = style(commonCss)
    }
    style = Object.assign(commonCss,style)
    if(css)cb = style
    return StyleSheet.create(style);
}

export default cssload
