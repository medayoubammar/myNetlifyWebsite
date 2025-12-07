<template>
<div v-if="mode == 'dark' " :class="darkTheme">
    <headerComp ></headerComp>
    <router-view v-on:childToParent="onChildClick" ></router-view>
    </div>

    <div v-else-if="mode == 'light' " :class="lightTheme">
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
    mode : 'light',
    lightTheme : 'light-mode',
    
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
.light-mode * {
 background: #ffffff !important;
color : rgb(0, 0, 0) !important;
  
}

.light-mode .badge {
 background: #84a5fd !important;
color : rgb(111, 0, 255) !important;

}

.dark-mode .badge {
 background: #0044ff !important;
color : rgb(159, 255, 247) !important;

}


.dark-mode a{
color : #ffff !important;
}

.light-mode a{
color : rgb(0, 87, 250) !important;
}
@import'~bootstrap/dist/css/bootstrap.css'
</style>
