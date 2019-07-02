<template>
  <div class="follow">
 <List :list="list" :dataName="'follow'"></List> 
  </div>
</template>
<script>
import List from '../components/List'
export default {
    data(){
        return {
            list:[]
        }
    },
    components:{
      List
    },
    mounted(){//钩子函数mounted获取数据最稳定。
        axios({
            url:'/api/follow',
            params:{_page:1,_limit:4}

        }).then(res=>this.list=res.data.data)
    }
}
</script>
<style scoped>
.follow{
  padding-top:.7rem;
}
</style>
