export default{
    formatNum(num){
        if(num<10){
            return '0'+num;
        }
        return num;
    },
    nowDate(){
         let myDate=new Date(),
             year=myDate.getFullYear(),
             month=myDate.getMonth()+1,
             date=myDate.getDate();
        return year+'-'+this.formatNum(month)+'-'+this.formatNum(date);
    }
}