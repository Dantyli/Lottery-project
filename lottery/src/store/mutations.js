import config from '../config/config'
const LOGIN='LOGIN'
const LOGOUT='LOGOUT'
const DLT='DLT'
const CDLT='CDLT'
const DELDLT='DELDLT'
const DBC='DBC'
const CDBC='CDBC'
const DELDBC='DELDBC'
const FC='FC'
const CFC='CFC'
const DELFC='DELFC'
let dlt_id=0,dbc_id=0;
export default{
    //登录操作
    [LOGIN](state){
        state.isLogin=true
    },
    [LOGOUT](state){
        state.isLogin=false
    },
    //增加大乐透
    [DLT](state,{red,blue,zhu,pric}){
        let obj={}
        obj.red=red.map(v=>{return v.num})
        obj.blue=blue.map(v=>{return v.num})
        obj.number=obj.red.concat(obj.blue).join(' ')
        obj.zhu=zhu
        obj.pric=pric
        obj.id=dlt_id
        state.dlt.det.unshift(obj);
        dlt_id++;
    },
    //清空大乐透
    [CDLT](state){
        state.dlt.det=[];
    },
    //删除某一条
    [DELDLT](state,{id}){
        let index;
        state.dlt.det.forEach((v,i)=>{
            if(v.id==id){
                index=i;
            }
        })
        state.dlt.det.splice(index,1);
    },
    //双色球
    [DBC](state,{red,blue,zhu,pric}){
        let obj={}
        obj.red=red.map(v=>{return v.num})
        obj.blue=blue.map(v=>{return v.num})
        obj.number=obj.red.concat(obj.blue).join(' ')
        obj.zhu=zhu
        obj.pric=pric
        obj.id=dbc_id
        state.dbc.det.unshift(obj);
        dbc_id++;
    },
    [CDBC](state){
        state.dbc.det=[]
    },
    [DELDBC](state,{id}){
        let index;
        state.dbc.det.forEach((v,i)=>{
            if(v.id==id){
                index=i;
            }
        })
        state.dbc.det.splice(index,1);
    },
    //福彩
    

}