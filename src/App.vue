<template>
<div v-if="mode == 'dark' " :class="darkTheme">
    <headerComp ></headerComp>
    <router-view v-on:childToParent="onChildClick" ></router-view>
    </div>

    <div v-else>
    <headerComp ></headerComp>
    <router-view v-on:childToParent="onChildClick" ></router-view>
    
    </div>
</template>

<script>
import home from "./components/home.vue";
import headerComp from "./components/headerComp.vue";

export default {
components : {
  "home" : home,
  "headerComp" : headerComp,

},
data(){
  return {
    darkTheme : 'dark-mode',
    mode : 'dark',
    
  }
},
methods: {
  onChildClick(value){
this.mode = value ;
console.log(this.mode)
  }
}
}
</script>

<style>
.dark-mode * {
 background: #020A39 !important;
color : #ffff !important;
  
}
.dark-mode a{
color : #ffff !important;
}

@import'~bootstrap/dist/css/bootstrap.css'
</style>
