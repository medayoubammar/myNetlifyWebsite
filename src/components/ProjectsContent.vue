<template>

    <div class="row mb-2 " >
      <!-- project -->
      
      <div
        class="project col-md-6 "
        v-for="(project, index) of Projects"
        :key="index"
         >
        <div class="card flex-md-row mb-4 box-shadow rounded border border-secondary">
          <div class="card-body d-flex flex-column align-items-start">
            <h3 class="mb-0">
              <a class="link" target="_blank" v-bind:href="project.link">{{
                project.Projectname
              }}</a>
            </h3>
            <br />

            <div class="mb-1 text-muted">{{ project.techs }}</div>
            <br />
            <p class="card-text mb-auto">{{ project.description }}.</p>
          </div>
          <a v-bind:href="project.link" target="_blank">
            <img
              class="thumb p-3 card-img-right flex-auto d-none d-md-block"
              v-bind:src="project.image"
              alt="Card image cap "
            />
          </a>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "home",
  props:['projects'],
  data() {
    return {
      Projects: this.projects,
    };
  },
};
</script>

<style>
.link:hover {
    color :rgb(0, 47, 255) !important; 
    cursor: pointer ;
    text-shadow: 1px 1px 2px black;
    

}
</style>
