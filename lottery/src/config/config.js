import util from './util'
let config={
    //当前日期yy-mm-dd
    date:util.nowDate(),
    //随机数两位
    randomJx:function(){
     let num=Math.random()*100
     num=Math.floor(num);
     return util.formatNum(num);
    }
}
export default config;