<template>
  <div class="home">
    <h1>Related Article Links</h1>
    <div v-for="article in links" v-bind:key="article.id">
      <div class="articles">
        <div class="article"> 
          <hr>
          <a v-bind:href=article.link>{{article.title}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      title: '',
      link: '',
    }
  },
  computed: {
    links() {
      return this.$root.$data.getLinks();
    },
  },
};
</script>

<style>
.articles {
  margin-left: 20px;
  margin-right: 80px;
}

a:link {
  color: green;
  background-color: transparent;
  text-decoration: none;
}

a:visited {
  color: #21B1F5;
  background-color: transparent;
  text-decoration: none;
}

a:hover {
  color: #1DC537;
  background-color: transparent;
  text-decoration: none;
}

a:active {
  color: #65F521;
  background-color: transparent;
  text-decoration: none;
}
</style>
