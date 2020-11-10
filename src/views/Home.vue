<template>
  <div class="home">
    <h1>Related Article Links</h1>
    <div v-for="article in links" v-bind:key="article.id">
      <hr>
      <div class="articles">
        <div class="article">
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

<style scoped>
.articles {
  margin-left: 20px;
}

.article a:link {
  color: red;
}

.article a:visited {
  color: green;
}

.article a:hover {
  color: hotpink;
}

.article a:active {
  color: blue;
}
</stlye>
  
