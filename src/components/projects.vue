<template>
  <div class="container-fluid px-5" id="fluid">
    <div>
     

      <h6>This section contains my projects :</h6>
      <br />
    </div>
    <div class="subMenu mb-5">
      <h6 v-bind:class="type == 'dev' ?
       activeClass : NotactiveClass " v-on:click="type = 'dev' " >Software</h6>
      <h6 v-bind:class="type == 'art' ?
       activeClass : NotactiveClass " v-on:click="type = 'art'">Design & Video Editing</h6>
       <h6 v-bind:class="type == 'softSkills' ?
       activeClass : NotactiveClass " v-on:click="type = 'softSkills'">Other</h6>
      </div>
      <!-- project -->
        <ProjectsContent  v-show="this.type == 'art' " v-bind:projects="this.Design_Projects" />
          <ProjectsContent v-show="this.type == 'dev' " v-bind:projects="this.Dev_Projects" />
          <ProjectsContent  v-show="this.type == 'softSkills' " v-bind:projects="this.softSkills_Projects" />


  </div>
</template>

<script>
import ProjectsContent from './ProjectsContent.vue';
export default {
  
  components: { ProjectsContent },
  
  data() {
    return {
      isActive : true,
      activeClass : "badge badge-primary text-wrap text-uppercase " ,
      NotactiveClass : "text text-muted",
      type: 'dev',
      Dev_Projects: [
           {
          Projectname: "24 B.E.Y",
          techs: "ReactJS",
          image: "assets/24bey.jpg",
          link: "https://www.24bey.com",
          description:
            "24BEY projects..",
        },
           {
          Projectname: "Netflix UI Cloning",
          techs: "ReactJS,scss",
          image: "assets/netflix.png",
          link: "https://github.com/medayoubammar/Netflix_React_Clone",
          description:
            "Redesign Netflix UI from scratch using reactJS and scss",
        },
        {
          Projectname: "Artify features",
          techs: "ReactJS,NodeJS",
          image: "assets/artify.png",
          link: "https://artify.tn",
          description:
            "Developping new features for Artify platform for my graduation project",
        },
               {
          Projectname: "Messenger Chat App",
          techs: "MERN STACK",
          image: "assets/messenger.png",
          link: "https://github.com/medayoubammar/Messenger_clone_MERN",
          description:
            "A Chat Web application for privates discussions, Inspired by Messenger(Meta)",
        },
        {
          Projectname: "Radio Jeune ISI",
          techs: "Dart,Flutter,Firebase",
          image: "https://cdn-icons-png.flaticon.com/512/4345/4345594.png",
          link: "#",
          description:
            "A Radio mobile app allows you to discover Tunisian channels via your account ",
        },
           {
          Projectname: "Humidity/Temp Detector",
          techs: "ReactJs,FastApi,Wokiwi",
          image: "https://previews.123rf.com/images/antonshaparenko/antonshaparenko1912/antonshaparenko191200297/135677132-ic%C3%B4ne-de-d%C3%A9tecteur-de-flamme-%C3%A9l%C3%A9ment-simple-de-la-collection-d-ic%C3%B4nes-de-capteurs-ic%C3%B4ne-creative.jpg",
          link: "https://github.com/medayoubammar/DetectTemp-Humidity",
          description:
            "An IoT academic project , detect temp/humidiaty of your romm and send data to your web application",
        },
          {
          Projectname: "Guess The player",
          techs: "Python",
          image: "https://www.dramaandtheatre.co.uk/media/228710/dt-2022-104-50_f01.jpg?&width=780&quality=60",
          link: "https://github.com/medayoubammar/SysExpertIA_IDL",
          description:
            "an academic project present a small game via an Expert Systeme using IA to guess a famous football player ",
        },
         {
          Projectname: "Où ça ? Website",
          techs: "ReactJS,firebase",
          image: "assets/conan.jpg",
          link: "https://collection-ou-ca-5cad4.web.app",
          description:
            "An E-learning website dedicated to kids aged under 11 years old ",
        },
        {
          Projectname: "CIPEM Website",
          techs: "PHP,JavaScript,Bootsrtap",
          image: "assets/cipem.png",
          link: "http://cipem.com.tn",
          description:
            "An official company website interested in petroleum business ",
        },
         {
          Projectname: "ART Shopping",
          techs: "ReactJS,bootstrap,Firebase",
          image: "assets/art.jpg",
          link: "https://auth-react-test.netlify.app",
          description:
            "An E-commerce platforme for painting works sales / work both sides (client + admin dashboard)",
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
          Projectname: "Note App",
          techs: "NodeJs,Javascript",
          image: "assets/OIP.jfif",
          link: "https://github.com/medayoubammar/notes-app_nodeJS",
          description:
            "A notes app using nodeJS , running by using commande lines",
        },
        {
          Projectname: "Universty students ",
          techs: "JAVA EE,Bootstrap",
          image: "assets/university.png",
          link: "https://github.com/medayoubammar/University_Managment",
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
      Design_Projects : [
         {
          Projectname: "Ojidoo Posts",
          techs: "Adobe After Effect",
          image: "assets/ojidoo.png",
          link: "https://www.youtube.com/@ojidoo4229",
          description:
            "Video Editing as facebook ads for platorm ojidoo.com ",
        },
         {
          Projectname: "The Originals Movies",
          techs: "Adobe After Effect , Adobe Premier Pro",
          image: "assets/originals.jpg",
          link: "https://www.youtube.com/watch?v=Jd7ydbEufMI",
          description:
            "Founder of The originals group, editor of all the short movies (VFX) ",
        },
          {
          Projectname: "Video Clip Bey be3 Lebled",
          techs: "Adobe After Effect , Adobe Premier Pro ",
          image: "assets/youtube.png",
          link: "https://www.youtube.com/watch?v=snHzrvl59SU",
          description:
            "Music Video Clip Editing  .",
        },
          {
          Projectname: "Video Clip الراعي والذئاب",
          techs: "Adobe After Effect , Adobe Premier Pro , Adobe Photoshop",
          image: "assets/youtube.png",
          link: "https://www.youtube.com/watch?v=EZU8FWatV2s",
          description:
            "Music Video Clip & animations Editing . ",
        },
         {
          Projectname: "Video Clip ✪Touba✪",
          techs: "Adobe After Effect , Adobe Premier Pro ",
          image: "assets/youtube.png",
          link: "https://www.youtube.com/watch?v=10eaQZ0NAGw",
          description:
            "Music Video Clip Editing .",
        },
        
      ],
      softSkills_Projects : [
           {
          Projectname: "POINT RAR PRODUCTION",
          techs: "Content sharing , Public speech ",
          image: "assets/rar.jpg",
          link: "https://www.youtube.com/POINTRAR/videos",
          description:
            "Founder of . rar production , a tunisian channel for developing the knowledge (science/history content)",
        },
      ]
    };
  },
  


 
};
</script>

<style>
.subMenu{
    text-align: start;
         border-bottom: 0.5px solid #9d9e9e;
    width: 100%;
}
h6 {
  cursor: pointer !important;
}
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