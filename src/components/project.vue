<template>



    
        <div class="project col-md-6" >
          <div class="card flex-md-row mb-4 box-shadow h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
              <h3 class="mb-0">
                <a class="text-dark"  target="_blank" v-bind:href="Projects.link">{{ Projects.Projectname }}</a>
           
              </h3>
              <br>
              
              <div class="mb-1 text-muted">{{ Projects.techs }}</div>
              <br>
              <p class="card-text mb-auto">{{ Projects.description }}.</p>
           
            </div>
            <a v-bind:href="Projects.link" target="_blank">
            <img class="thumb card-img-right flex-auto d-none d-md-block" v-bind:src="Projects.image" alt="Card image cap">
         </a>
          </div>
        </div>
 
   
 
</template>

<script>
export default {
 props: ["Projects"],

  data() {
    return {};
  }
}
</script>

<style>
.thumb{
    
    width: 120px;
}
.project{

    font-family:  'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color: #2c3e50;

}

</style>