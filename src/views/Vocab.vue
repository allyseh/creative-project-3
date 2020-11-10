<template>
<div>
  <h1>Vocabulary Review for Midterm 2</h1>
  <div v-for="reviewPair in vocab" v-bind:key="reviewPair.id">
    <div class="review">
      <hr>
      <div class="term">
        <h3>{{reviewPair.term}}</h3>
        <p v-if="reviewPair.showdef"><i>-- {{reviewPair.def}}</i></p>
        <button v-on:click="showHide(reviewPair)">{{reviewPair.showdef? 'Hide Definition' : 'Show Definition'}}</button>
      </div>
    </div>
  </div>
  <hr>
  <h2>Add a new vocabulary term</h2>
  <form @submit.prevent="addTerm">
    <input v-model="term" placeholder="Vocab term">
    <p></p>
    <textarea v-model="def" ploceholder="definition"></textarea>
    <br />
    <button type="submit">Add term</button>
  </form>
</div>
</template>

<script>
export default {
  name: 'vocab',
  data() {
    return {
      term: '',
      def: '',
    }
  },
  computed: {
    vocab() {
      return this.$root.$data.getVocab();
    },
  },
  methods: {
    showHide(reviewPair) {
      reviewPair.showdef = !reviewPair.showdef;
    },
    addTerm() {
      this.$root.$data.addTerm(this.term, this.def);
      this.term = "";
      this.def = "";
    },
  }
}
</script>

<style scoped>
.review {
  margin-left: 20px;
  margin-right: 50px;
}

.term p {
  font-size: 16px;
}

input {
  font-size: 1.2em;
  height: 30px;
  width: 200px;
}

textarea {
  font-size: 1.6em;
  width: 100%;
  max-width: 500px;
  height: 100px;
}

button {
  margin: 20px 5px;
  font-size: .9em;
}

h2 {
  margin-top: 50px;
}

h3 {
  margin-top: 20px;
}
</style>
