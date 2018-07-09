import util from './util'
let config={
    //当前日期yy-mm-dd
    date:util.nowDate(),
    //随机数两位
    randomJx:function(n){
     let num=Math.random()*n
     num=Math.ceil(num);
     return util.formatNum(num);
    },
    //注数计算规则
    math:function(m, n){
        if (m < 0 || n < 0 || m < n) {
            return 0;
        }
        n = n < (m - n) ? n : m - n;
        this.smath(m,n);
        if (n == 0) {
            return 1;
        }
        var result = m;
        for (var i = 2, j = result - 1; i <= n; i++, j--) {
            result = result * j / i;
        }
        return result;
    },
   smath:function(m,n){
        if (m < 0 || n < 0 || m < n) {
            return 0;
        }
        n = n < (m - n) ? n : m - n;
        if (n == 0) {
            return 1;
        }
        n = n < (m - n) ? n : m - n;
    },
    //产生随机数
    random:function(m,n){
        let exist=[]
        for(var i=1;i<m;i++){
            exist[i]=0;
        }
        let list=[]
        for(var i=0;i<n;){
            let index=Math.floor(Math.random()*m)+1;
            if(exist[index]==0){
                list.push(index);
                i++;
                exist[index]=1
            }
        }
        return list
    },
    randomFromZero:function(m,n){
        let exist=[]
        for(var i=0;i<m;i++){
            exist[i]=0
        }
        let list=[]
        for(var i=0;i<n;){
            let index=Math.floor(Math.random()*m);
            if(exist[index]==0){
                list.push(index)
                i++;
                exist[index]=1;
            }
        }
        return list
    },
    //摇一摇机选一注
    shakeAndRandom:function(callback){			
     if(window.DeviceMotionEvent) {
        const speed = 10;
        let x = 0;
        let y = 0;
        let z =0;
        let lastX = 0;
        let lastY = 0;
        let lastZ = 0;
        window.addEventListener('devicemotion', function(){
            var acceleration =event.accelerationIncludingGravity;
            x = acceleration.x;
            y = acceleration.y;
            if(Math.abs(x-lastX) > speed || Math.abs(y-lastY) > speed) { 
            callback();
            }
            lastX = x;
            lastY = y;
        }, false);
     }
    }

}
export default config;