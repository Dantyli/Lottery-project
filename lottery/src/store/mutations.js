import config from '../config/config'
import {LOGIN,LOGOUT,DLT,CDLT,DELDLT,DBC,CDBC,DELDBC,FC,
CFC,DELFC,PLT,CPLT,DELPLT,PLF,CPLF,DELPLF,QXC,CQXC,DELQXC,
QLC,CQLC,DELQLC} from './actionTypes'
let dlt_id=0,dbc_id=0,fc_id=0,plt_id=0,plf_id=0,qxc_id=0,qlc_id=0; 
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
        obj.type=1
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
        obj.type=1
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
    [FC](state,{type,zhu,pric,ge=[],shi=[],bai=[]}){
        let obj={}
        obj.id=fc_id;
        obj.type=type
        obj.zhu=zhu
        obj.pric=pric
        obj.ge=ge
        obj.shi=shi
        obj.bai=bai
        obj.number=[]
        if(type==1){
            obj.number.push(obj.bai.join(''))
            obj.number.push(obj.shi.join(''))
            obj.number.push(obj.ge.join(''))
        }else{
            obj.number=obj.ge
        }
        obj.number=obj.number.join(' ')
        state.fc.det.unshift(obj)
        fc_id++
    },
    [CFC](state){
        state.fc.det=[]
    },
    [DELFC](state,{id}){
        let index
        state.fc.det.forEach((v,i)=>{
            if(v.id==id){
                index=i
            }
        })
        state.fc.det.splice(index,1)
    },
    //排列三
    [PLT](state,{type,zhu,pric,ge=[],shi=[],bai=[]}){
        let obj={}
        obj.id=plt_id;
        obj.type=type
        obj.zhu=zhu
        obj.pric=pric
        obj.ge=ge
        obj.shi=shi
        obj.bai=bai
        obj.number=[]
        if(type==1){
            obj.number.push(obj.bai.join(''))
            obj.number.push(obj.shi.join(''))
            obj.number.push(obj.ge.join(''))
        }else{
            obj.number=obj.ge
        }
        obj.number=obj.number.join(' ')
        state.plt.det.unshift(obj)
        plt_id++
    },
    [CPLT](state){
        state.plt.det=[]
    },
    [DELPLT](state,{id}){
        let index
        state.plt.det.forEach((v,i)=>{
            if(v.id==id){
                index=i
            }
        })
        state.plt.det.splice(index,1)
    },
    //排列五
    [PLF](state,{wan,qian,bai,shi,ge,pric,zhu}){
        let obj={}
        obj.wan=wan
        obj.qian=qian
        obj.bai=bai
        obj.shi=shi
        obj.ge=ge
        obj.type=1
        let number=[]
        number.push(wan.join(''))
        number.push(qian.join(''))
        number.push(bai.join(''))
        number.push(shi.join(''))
        number.push(ge.join(''))
        obj.number=number.join(' ')
        obj.pric=pric
        obj.zhu=zhu
        obj.id=plf_id;
        state.plf.det.push(obj)
        plf_id++;
    },
    [CPLF](state){
        state.plf.det=[]
    },
[DELPLF](state,{id}){
        let index
        state.plf.det.forEach((v,i)=>{
            if(v.id==id){
                index=i
            }
        })
        state.plf.det.splice(index,1)
    },
    //七星彩
    [QXC](state,{bwan,swan,wan,qian,bai,shi,ge,pric,zhu}){
        let obj={}
        obj.bwan=bwan
        obj.swan=swan
        obj.wan=wan
        obj.qian=qian
        obj.bai=bai
        obj.shi=shi
        obj.ge=ge
        obj.type=1
        let number=[]
        number.push(bwan.join(''))
        number.push(swan.join(''))
        number.push(wan.join(''))
        number.push(qian.join(''))
        number.push(bai.join(''))
        number.push(shi.join(''))
        number.push(ge.join(''))
        obj.number=number.join(' ')
        obj.pric=pric
        obj.zhu=zhu
        obj.id=qxc_id;
        state.qxc.det.unshift(obj)
        qxc_id++;
    },
    [CQXC](state){
        state.qxc.det=[]
    },
    [DELQXC](state,{id}){
        let index
        state.qxc.det.forEach((v,i)=>{
            if(v.id==id){
                index=i
            }
        })
        state.qxc.det.splice(index,1)
    },
    [QLC](state,{pric,zhu,nums}){
        let obj={}
        obj.pric=pric
        obj.zhu=zhu
        obj.type=1
        obj.nums=nums
        obj.number=nums.join(' ')
        obj.id=qlc_id
        state.qlc.det.unshift(obj)
        qlc_id++
    },
    [CQLC](state){
        state.qlc.det=[]
    },
    [DELQLC](state,{id}){
        let index
        state.qlc.det.forEach((v,i)=>{
            if(v.id==id){
                index=i;
            }
        })
        state.qlc.det.splice(index,1)
    }

}