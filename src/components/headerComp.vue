<template>
<div>
<nav class="navbar navbar-expand-lg navbar-light bg-white">
  <a class="navbar-brand" href="#"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav mx-auto lines">
      <li class="nav-item active">
        <a class="nav-link"><router-link to="/" exact>Home</router-link> <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link"><router-link to="/projects" exact>Projects</router-link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link"><router-link to="/about" exact>About</router-link> </a>
      </li>
      
    </ul>
  </div>
</nav>

</div>

</template>

<script>
export default {

}
</script>

<style>
nav{
    text-align: end;
}
.navbar-nav > li{
  margin-left:30px;
  margin-right:30px;
}
.lines{
     border-bottom: 0.5px solid #9d9e9e;
}

</style>