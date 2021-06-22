<template>
  <div class="container" id="fluid">
    <div>
      <h1>Projects</h1>

      <h5>This section contains my projects ..</h5>
      <br />
    </div>
    <div class="row mb-2">
      <!-- project -->
      <div
        class="project col-md-6"
        v-for="(project, index) of Projects"
        :key="index"
      >
        <div class="card flex-md-row mb-4 box-shadow h-md-250">
          <div class="card-body d-flex flex-column align-items-start">
            <h3 class="mb-0">
              <a class="text-dark" target="_blank" v-bind:href="project.link">{{
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
              class="thumb card-img-right flex-auto d-none d-md-block"
              v-bind:src="project.image"
              alt="Card image cap"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Projects: [
        {
          Projectname: "Artify features",
          techs: "ReactJS,NodeJS",
          image: "assets/artify.png",
          link: "https://artify.tn",
          description:
            "Developping new features for Artify platform for my graduation project",
        },
        {
          Projectname: "Note App",
          techs: "NodeJs,Javascript",
          image: "assets/OIP.jfif",
          link: "https://github.com/medayoubammar/notes-app_nodeJS",
          description:
            "A notes app using nodeJS , running by using commande lines",
        },
        {
          Projectname: "CIPEM website",
          techs: "PHP,JavaScript,Bootsrtap",
          image: "assets/cipem.png",
          link: "http://cipem.com.tn",
          description:
            "An official company website interested in petroleum business ",
        },
        {
          Projectname: "Animated Scrolle Bar",
          techs: "HTML,CSS",
          image: "assets/scroll.png",
          link: "https://github.com/medayoubammar/Scroll-Progress-Bar",
          description:
            "A Progress Scroll bar Animated with rainbow colors using css",
        },
        {
          Projectname: "إكتشف وزنك/Discover your weight",
          techs: "Dart,Flutter",
          image: "assets/space.png",
          link: "https://github.com/medayoubammar/know_your_weight_app/tree/master",
          description:
            "A mobile app allows you to discover your weight on other planet , made with love ❤️ ",
        },
        {
          Projectname: "Simple calculator",
          techs: "Dart,Flutter",
          image: "assets/calcul.png",
          link: "https://github.com/medayoubammar/Simple-Calculator-for-mobile",
          description:
            "My first try in mobile development , a simple calculator for kids ",
        },
        {
          Projectname: "Covid19 website",
          techs: "Bootstrap,Javascript,Firebase",
          image: "assets/covid19.png",
          link: "https://github.com/medayoubammar/GoMyCodeProjectLEVEL1",
          description:
            "An Academic project during Covid19 pandemic to help the community",
        },
        {
          Projectname: "Universty students ",
          techs: "JAVA EE,Bootstrap",
          image: "assets/university.png",
          link: "https://github.com/medayoubammar/JAVA-EE-CRUD-App",
          description:
            "An Academic project for managing lists of universty students ",
        },
        {
          Projectname: "WorldTime App",
          techs: "Dart,Flutter",
          image: "assets/worldTime.png",
          link: "https://github.com/medayoubammar/WorldTimeApplication",
          description:
            "A mobile app allows you to discover the current time at different nations",
        },
      ],
    };
  },
};
</script>

<style>
#fluid {
  margin-top: 10px;
}

.thumb {
  width: 120px;
}

.project {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  color: #2c3e50;
}
</style>