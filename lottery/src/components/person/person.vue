<template>
   <div>
       <Headers :title="title" />
       <div class="infos">
           <img src="https://avatars3.githubusercontent.com/u/25030274?s=460&v=4">
           <p>
               <span>{{username}}</span>
               <span>余额：￥{{yu}}</span>
           </p>
       </div>
       <ul class="info-detail">
       <router-link to="/log">
           <li>
              投注记录
              <i class="right_icon" />
           </li>
        </router-link>
        <router-link to="/usi">
           <li>
              实名信息
              <i class="right_icon" />
           </li>
        </router-link>
           <li>
              新手上路
              <i class="right_icon" />
           </li>
       </ul>
   </div>
</template>
<script>
import Headers from '../common/Header'
export default{
    data(){
        return{
            title:'用户中心',
            username:'',
            yu:0.00
        }
    },
    created(){
        this.$nextTick(()=>{
           this.username=this.$store.state.userinfo['username'];
           this.yu=this.$store.state.userinfo['yu'];
        }) 
    },
    components:{
        Headers
    }
}
</script>
<style>
    .info-detail{
        margin-top:0.4rem;
        padding:0 0.2rem;
        background:#fff;
    }
    .info-detail li{
        height:1.33rem;
        line-height:1.33rem;
        border-bottom:1px solid #e2e2e2;
        position:relative;
        font-size:0.38rem;
    }
    .infos{
        margin-top:50px;
        padding:0.5rem 0.2rem;
        background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAACCAIAAACIZs5NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1MGUxZGQzMi05NzE4LTRjZjctODgyYS1mMTMyOTM3NDBlMTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjU5QUY0QTRDRTlFMTFFN0I5MjI4QkE1NDI3NTU0QTYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjU5QUY0QTNDRTlFMTFFN0I5MjI4QkE1NDI3NTU0QTYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2N2RiNWE1Mi01MzkxLTQ0MGUtODE1Yi04OGEyODZkOTIzMWEiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo5OTc4ZDlkMi0xMTgyLTExN2ItYjYwZi1kZmIyOGNlMDc1M2EiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6gGtgkAAAAh0lEQVR42uyWQQ6AIAwEGb/kD/z/n/BkNEFJlS2Jyc4RdrvlQIG6rSUCRQBjhZjletsnaS0RNqBOJ2ZAF3poakeNOOtRLQkioCY/RRxxZ0Bbv1nSH6FZzYpQp0jOMqw5LykZM6e7LZw5LyYnKWP2i54v9Wc+oFfz+M8hVmEpxhhjjDG/ZRdgAMhvA7/xqZkoAAAAAElFTkSuQmCC');
        background-repeat: repeat-y;
        background-size: contain;
    }
    .infos img{
        height:1.2rem;
        width:1.2rem;
        border-radius:50%;
        vertical-align:bottom;
    }
    .infos p{
        width:4rem;
        display:inline-block;
    }
    .infos p span{
        display:inline-block;
        width:100%;
        color:#fff;
    }
    .infos p span:nth-of-type(1){
         font-size:0.38rem;
    }
    .infos p span:nth-of-type(2){
         font-size:0.32rem;
    }
</style>