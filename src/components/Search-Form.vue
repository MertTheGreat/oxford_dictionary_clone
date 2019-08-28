<template>
  <b-container class="search-form">
    <b-row>
      <b-col class="search-bar" md="10">
        <b-form-input v-model="word" placeholder="Look up in Oxford Dictionary..."
                      v-on:keyup.enter="getWord"></b-form-input>
      </b-col>
        <b-col class="search-button" md="2">
          <b-button variant="outline-primary" v-on:click="getWord">Look It</b-button>
        </b-col>
    </b-row>
    <b-row>
      <div class="mt-2">Word: {{ word }}</div>
    </b-row>
    <hr>
      <div class="word-results" v-for="(meaning, index) in meanings" :key="index">
        <b-row class="row-results">
          <p class="result-defination">
            <strong>Defination  {{ index + 1 }} :</strong>
            {{meaning.toString()}}
          </p>
        </b-row>
      </div>
    <b-row class="errors">
      <div class="errors">
        <span>{{error}}</span>
      </div>
    </b-row>
  </b-container>
</template>

<script>
import Axios from 'axios';
// eslint-disable-next-line import/extensions
// import inst from '../const.js';


export default {
  name: 'Search-form',
  data() {
    return {
      word: '',
      posts: [],
      lorem: [],
      results: [],
      definations: [],
      meanings: [],
      gotError: false,
      error: '',
    };
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    getWord() {
      Axios.get(`http://localhost:8080/api/v2/entries/en-gb/${this.word
      }?fields=definitions&strictMatch=false/`,
      {
        headers: {
          Accept: 'application/json',
          app_id: '14023053',
          app_key: '3f1582861bf66c20b2be262287b0b4ea',
        },
      }).then((response) => {
        // eslint-disable-next-line no-console
        console.log('-----SUCCESS-----');
        this.error = '';
        this.posts = response;
        // eslint-disable-next-line no-console
        console.log(this.posts);
        this.results = response.data.results;
        console.log(this.results);
        console.log(this.results[0]);
        // eslint-disable-next-line no-unused-vars
        this.results.forEach((item, index) => {
          console.log(item.lexicalEntries, index);
          // eslint-disable-next-line eqeqeq
          if (index == 0) {
            this.definations = item.lexicalEntries;
            console.log(this.definations);
          }
        });
        // eslint-disable-next-line prefer-destructuring
        // this.definations = this.results.lexicalEntries[0];
        this.definations.forEach((item, index) => {
          console.log(item, index);
          console.log(item.entries);
          item.entries.forEach((entry, enIndex) => {
            console.log(entry.senses, enIndex);
            entry.senses.forEach((def, defI) => {
              console.log(def.definitions, defI);
              this.meanings.push(def.definitions);
            });
          });
        });
        console.log('this is the meanings:');
        this.meanings.forEach((mean) => {
          console.log(mean, typeof (mean));
          if (typeof (mean) === 'undefined') {
            console.log('Got it');
            console.log(this.meanings.indexOf(mean));
            this.meanings.splice(6, 1);
          }
        });
        console.log('Again');
        this.meanings.forEach((mean) => {
          console.log(mean, typeof (mean));
        });
      }).catch((err) => {
        this.gotError = true;
        this.error = err.toString();
        console.log(`this is the error: ${err}`);
      });
    },
    getLorem() {
      Axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
        console.log('-----SUCCESS-----');
        this.lorem = response;
        console.log(this.posts);
      });
    },
    clearMeaning() {
      // eslint-disable-next-line eqeqeq
      // if (this.gotError !== true) {
      //   this.meanings = '';
      //   console.log(this.gotError);
      // }
    },
  },
  beforeUpdate() {
    this.meanings.pop();
    // this.error = '';
  },
  updated() {
    // this.error = '';
  },
};
</script>

<style scoped>
  @import "../styleSheet.css";
</style>
