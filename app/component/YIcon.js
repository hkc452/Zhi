/**
 * Created by hkc on 2016/8/3. 阿里图标封装
 */
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import React, { Component } from 'react';
var mapNew = {
    "tuandui":'58908',"dazhuanpan":'58880',"order":'58915',"iconfontcha":'58946',"iconfont02":'58916',"shezhi":'58906',"guanbi":'58947',"duihuan":'58882',"dingwei":'58977',"daogou":'58917',"sousuo":'58918',"wodehuodong":'58948',"snimicyaoyiyao":'58909',"weibiaoti1":'58973',"guanbi1":'58949',"guanbi2":'58889',"wodehuodong1":'58950',"lianjie":'58898',"wode2":'58914',"shouye":'58883',"dianzan":'58951',"yuyin":'58919',"dianpu":'58920',"wode":'58907',"jjshmiaosha":'58910',"tuihuanhuo":'58921',"dizhi":'58978',"bianji":'58913',"guanli":'58922',"xiangsituijian":'58899',"saoma":'58970',"shuaxin":'58988',"tianjia":'58952',"qiaquan":'58953',"kaiguankai":'58890',"kaiguanguan":'58891',"paixingbang":'58923',"fenxiang":'58924',"guanzhu":'58925',"bangzhu":'58892',"erweima":'58900',"yidiandiantubiao04":'58979',"yidiandiantubiao18":'58980',"yidiandiantubiao02":'58981',"xiuGaiMiMa":'58984',"icon28":'58982',"icon29":'58983',"dianzan1":'58954',"guanzhu1":'58926',"tianjia1":'58955',"qingdanmoren":'58893',"dianzan2":'58956',"fukuan":'58927',"tianjia2":'58957',"dianzan3":'58958',"woderenwu":'58884',"fanhui":'58928',"qiaquan1":'58959',"weixinguaguaqiahuodong":'58911',"trash":'58929',"shaixuanshaixuan":'58960',"xiaoxi":'58885',"tishi":'58986',"fankui":'58987',"qianbao":'58961',"fenlei":'58930',"tixian":'58901',"dianzan4":'58962',"tuihuanhuo1":'58931',"pingjia":'58932',"xiaoxi1":'58886',"icon1460192056289":'58963',"xuanze":'58894',"timeline":'58985',"lipin":'58974',"fenlei1":'58933',"jilu":'58971',"1":'58934',"dingdan":'58935',"xuanze1":'58895',"shaixuan":'58964',"zhangdan":'58965',"xiazai11":'58936',"remen":'58896',"dianziqianmingyuedingshu":'58902',"paixingbang1":'58937',"mingxi3":'58903',"chakan":'58938',"yinhangka":'58904',"iconfontrili":'58897',"zhoubiandown":'58912',"pingjia1":'58939',"dingdan1":'58940',"tuihuan":'58941',"shaixuan1":'58966',"shouye-copy-copy":'58887',"chakan1":'58942',"yue-copy":'58888',"liulanjiluzuji":'58943',"giftbox-copy":'58975',"ego-heart":'58944',"cardb":'58881',"6":'58967',"erweima1":'58905',"liulanjilu":'58945',"wodehuodongjilu":'58968',"gift-box":'58976',"K":'58969',"jilu1":'58972',
}
let icon = (name)=>String.fromCharCode(mapNew[name])

export default class  YIcon extends Component {
    render() {
        const {size,name,color,style} = this.props
        return (
            <Text style={[{fontFamily: 'iconfont',fontSize:size||30,color:color},style]}>
                {icon(name)}
            </Text>
        )
    }
}

