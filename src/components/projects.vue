<template>

<div class="container" id="fluid">
    <div>
        <h1>Projects</h1>
        
        <h5>This section contains my projects ..</h5>
        <br>
    </div>
 <div class="row mb-2">
  
     <project v-bind:Projects="Projects[0]" />
     <project v-bind:Projects="Projects[1]" />
     <project v-bind:Projects="Projects[2]" />
      <project v-bind:Projects="Projects[3]" />
      <project v-bind:Projects="Projects[4]" />
        <project v-bind:Projects="Projects[5]" />
                <project v-bind:Projects="Projects[6]" />
  
   
  
    </div>
</div>

</template>

<script>

import project from "../components/project.vue";


export default {

components: {
    "project" : project,

             },
  data() {
    return {
        
   Projects: [
     
        { Projectname: "CIPEM website", techs: "PHP,JavaScript,Bootsrtap", image: "assets/cipem.png" , link :"http://cipem.com.tn" , description:"An official company website interested in petroleum business " },
           { Projectname: "إكتشف وزنك/Discover your weight", techs: "Dart,Flutter", image: "assets/space.png" , link :"https://github.com/medayoubammar/know_your_weight_app/tree/master" , description:"A mobile app allows you to discover your weight on other planet , made with love ❤️ " },
        { Projectname: "Simple calculator", techs: "Dart,Flutter", image: "assets/calcul.png" , link :"https://github.com/medayoubammar/Simple-Calculator-for-mobile" , description:"My first try in mobile development , a simple calculator for kids " },
         { Projectname: "Covid19 website", techs: "Bootstrap,Javascript,Firebase", image: "assets/covid19.png" , link :"https://github.com/medayoubammar/GoMyCodeProjectLEVEL1" , description:"An Academic project during Covid19 pandemic to help the community" },
            { Projectname: "Universty students ", techs: "JAVA EE,Bootstrap", image: "assets/university.png" , link :"https://github.com/medayoubammar/JAVA-EE-CRUD-App" , description:"An Academic project for managing lists of universty students " },
               { Projectname: "WorldTime App", techs: "Dart,Flutter", image: "assets/worldTime.png" , link :"https://github.com/medayoubammar/WorldTimeApplication" , description:"A mobile app allows you to discover the current time at different nations" },

      ],
    }
}

                 
    }  
                  


</script>

<style>

#fluid{
    margin-top: 10px
}


</style>