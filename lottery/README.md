### 基础算法的js实现

#### 十进制转2-9进制
  <pre>function convert(n,base){
    var s=[];
    do{
      s.unshift(n%base);
      n=Math.floor(n/base);
    }while(n>0)
    return Number(s.join(''));
  }
  </pre>
#### 任意进制转换
 <pre> function converts(n,base,j=10){
    if(j!=10){
      n=n.toString();
      var s=n.split('').reverse(),num=0;
      s.forEach(function(v,i){
        num+=Math.pow(j,i)*Number(v)
      })
      n=num;
    }
    n=convert(n,base);
    return n;
  }
  </pre>
  //console.log(converts(12,3,6));
#### 数组去重
  <pre>function removal(n){
    var arr=[];
    //自己封装的indexof方法，类比indexOf()
    var indexof=function(x,y){
      var index=-1;
      x.forEach((v,i)=>{
        if(y==v){
           index=i;
        }
      })
      return index;
    }
    n.forEach(function(v,i){
      if(indexof(arr,v)<0){
        arr.push(v)
      }
    })
    return arr;
  }</pre>
  //console.log(removal([1,2,3,2,1]))
  #### 排序之冒泡排序
  <pre>function bubbleSort(arr){
    for (i=1;i < arr.length;i++){
      for(j=0;j < arr.length-i;j++){
        var temp=0;
        if(arr[j] > arr[j+1]){
          temp=arr[j]
          arr[j]=arr[j+1]
          arr[j+1]=temp
        }
      }
    }
    return arr;
  }</pre>
  //console.log(bubbleSort([3,4,2,1,5,8,2]))
#### 随机生成哈希值
 <pre> function randomWord(n){
    var str=''
    arr=['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    //随机产生
    for(var i=0;i < n;i++){
      pos=Math.round(Math.random()*(arr.length-1));
      str+=arr[pos];
    }
    return str;;
  }
  function getHash(){
    var timestamp=new Date().getTime();
    var myRandom=randomWord(6)
    var hashcode=myRandom+timestamp;
    return hashcode;
  }</pre>
  //console.log(getHash());
