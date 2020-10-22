<template>
<div>
    <headerComp></headerComp>
    <router-view></router-view>
    </div>
</template>

<script>
import home from "./components/home.vue";
import headerComp from "./components/headerComp.vue";

export default {
components : {
  "home" : home,
  "headerComp" : headerComp,

}
}
</script>

<style>


@import'~bootstrap/dist/css/bootstrap.css'
</style>
