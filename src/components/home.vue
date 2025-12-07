<template>
  <div id="home">
    
    <img class="avatar" src="../utils/micro.jpg" />

    <h1>{{ msg }}</h1>
    <h2>Web & Mobile Developer 💻</h2>
    <h4>
Software engineer && Lead instructor Web development, <br> Full-Stack web developer && JS enthusiastic.. ...
    </h4>
   <div class="videos">
     <video-embed class="videoYoutube" src="https://www.youtube.com/watch?v=UYkE7IBoRbI"></video-embed>
  <video-embed class="videoYoutube" src="https://www.youtube.com/watch?v=yQzjLXn5yhc&t=26s"></video-embed>
   </div>

    <ul class="mt-2  pb-5" style="margin-bottom : 0">
      <li class="contact">
        <img class="icone" src="assets/icone-linkedin-ronde-grise.png" alt="linkedin" /><a
          class="links"
          href="https://www.linkedin.com/in/mohamed-ayoub-ammar-1a6886177/"
          target="_blank"
          >LinkedIn</a
        >
      </li>
      <li class="contact">
        <img class="icone" src="assets/icone-github-grise.png" alt="github" /><a
          class="links"
          href="https://github.com/medayoubammar"
          target="_blank"
          >Github</a
        >
      </li>
      <li class="contact">
        <img class="icone" src="assets/facebook-icone-gris.png" alt="fb" /><a
          class="links"
          href="https://www.facebook.com/ReznoveM"
          target="_blank"
          >Facebook</a
        >
      </li>
    </ul>
    <p>Choose your mode :</p>
     <button class="btn dark-btn"><img alt="dark-mode" src="../../assets/dark.png"
      width="35" v-on:click="emitToParent('dark')"  /></button>
     
    <button class="btn light-btn"><img src="../../assets/light.png"
     width="35"  v-on:click="emitToParent('light')" /></button>
    
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      msg: "Ammar Mohamed Ayoub",
    };
  },
  methods:{
   emitToParent(_data){
     this.$emit('childToParent',_data)
   }
  }
};
</script>

<style>
.videos{
  margin: 5rem 0;
  display: flex;
  justify-content: space-around;
}
.videoYoutube{
  width: 45% !important;

}
.icone {
  width: 20px;
  margin: 0 8px 8px 0px;
}
.avatar {
  vertical-align: middle;
  width: 200px;

  /* border-radius: 80%; */
  border: solid rgba(1, 67, 209, 0.329);
  margin-bottom: 30px;
}
#home {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 80px;
}
h4 {
  font-size: 15px !important ;
}

h1,
h2 {
  font-size: 20px !important ;
  font-weight: normal;
  margin-bottom: 10px !important;
}

ul {
  list-style-type: none;
}

.contact {
  display: inline-block;
  margin: 30px 10px 0 20px;
}

.links {
  font-size: 20px;
  color: #2db7e0 !important ;
}
.dark-btn:hover{
cursor: pointer;
border: 1px solid #72008f;
box-shadow: 1px 1px 10px #72008f;

}
.light-btn:hover{
cursor: pointer;
border: 1px solid rgb(2, 115, 190);
box-shadow: 1px 1px 10px rgb(2, 115, 190);
}
</style>


