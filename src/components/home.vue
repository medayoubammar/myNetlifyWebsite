<template>
  <div id="home">
    <img class="avatar" src="assets/portrait.png" />

    <h1>{{ msg }}</h1>
    <h2>Web & Mobile Developer 💻</h2>
    <h4>
      Computer science student , addicted success and learning ..think outside
      the div
    </h4>
    
    <ul class="mt-5  pb-5" style="margin-bottom : 0">
      <li class="contact">
        <img class="icone" src="assets/linkedin.png" alt="linkedin" /><a
          class="links"
          href="https://www.linkedin.com/in/mohammed-ayoub-ammar-1a6886177/"
          target="_blank"
          >LinkedIn</a
        >
      </li>
      <li class="contact">
        <img class="icone" src="assets/github.png" alt="github" /><a
          class="links"
          href="https://github.com/medayoubammar"
          target="_blank"
          >Code</a
        >
      </li>
      <li class="contact">
        <img class="icone" src="assets/fbook.png" alt="fb" /><a
          class="links"
          href="https://www.facebook.com/ReznoveM"
          target="_blank"
          >Facebook</a
        >
      </li>
    </ul>
    <p>Choose your mode :</p>
     <button class="btn dark-btn"><img src="../../assets/dark.png"
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
.icone {
  width: 20px;
  margin: 0 8px 8px 0px;
}
.avatar {
  vertical-align: middle;
  width: 200px;
  height: 200px;
  border-radius: 100%;
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
