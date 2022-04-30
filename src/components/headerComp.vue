<template >
<div>

<nav class="navbar sticky-top ">
  <div class="container-fluid lines">
    <a class="navbar-brand"> <router-link to="/" exact><h1>Home</h1></router-link> </a>
    <a class="navbar-brand"> <router-link to="/projects" exact><h1>Projects </h1></router-link>  </a>
    <a class="navbar-brand"> <router-link to="/about" exact><h1>About </h1> </router-link> </a>
  </div>
</nav>

</div>

</template>

<script>
export default {
 
data(){
  return {
    isActive : true,
      activeClass : " text text-primary font-italic  " ,
      NotactiveClass : "text text-muted",
       type: 'home',
       NavTheme : 'dark-mode'
  }
}
 


}
</script>

<style>
.dark-mode {
  background: #020A39 !important;
  color : #ffff !important;
  
}

.lines{
     border-bottom: 0.5px solid #9d9e9e;
       background-color: rgba(176, 173, 173, 0.227) !important;

}
 .lines a{
       background-color: rgba(176, 173, 173, 0) !important;
}
 .lines a h1{
       background-color: rgba(176, 173, 173, 0) !important;
}


</style>