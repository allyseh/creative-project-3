<template>
<div>
  <h1>Vocabulary Review for Midterm 2</h1>
  <div v-for="reviewPair in vocab" v-bind:key="reviewPair.id">
    <hr>
    <div class="review">
      <div class="term">
        <p>{{reviewPair.term}}</p>
        <p v-if="reviewPair.showdef"><i>-- {{reviewPair.def}}</i></p>
        <button v-on:click="showHide(reviewPair)" ref="btnToggle">Show Definition</button>
      </div>
    </div>
  </div>
  <h3>Add a new vocabulary term</h3>
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
      reviewPair.$refs.btnToggle.innerText = reviewPair.showdef?'Hide Definition':'Show Definition';
    },
    addTerm() {
      this.$root.$data.addVocab(this.term, this.def);
      this.term = "";
      this.def = "";
    },
  }
}
</script>

<style scoped>
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
  margin-top: 20px;
  font-size: 1.2em;
}
</style>
