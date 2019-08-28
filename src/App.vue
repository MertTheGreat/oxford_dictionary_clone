<template>
  <div id="app">
    <link rel="stylesheet" href="../node_modules/@fortawesome/fontawesome-free/css/all.css">
    <b-container class="con-app">
      <b-row class="row-nav">
        <b-col class="col-nav" md="12">
          <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
          </div>
        </b-col>
      </b-row>
      <b-row class="image">
        <b-col >
          <img  alt="Vue logo" src="../src/assets/logo.png" id="vueLogo">
        </b-col>
        <b-col >
          <img src="../src/assets/oxford_logo.png" alt="Oxford logo" id="oxfordLogo">
        </b-col>
      </b-row>
      <hr>
      <b-row class="title">
        <b-col><h2>{{ title }}</h2></b-col>
      </b-row>
    </b-container>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {

  },
  data() {
    return {
      title: 'Oxford Dictionary Clone',
      developer: 'Mert Y. Ertugrul',
    };
  },
};
</script>

<style scoped>
  @import "styleSheet.css";
</style>
