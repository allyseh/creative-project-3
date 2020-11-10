<template>
<div>
  <h1>Vocabulary Review for Midterm 2</h1>
  <div v-for="reviewPair in vocab" v-bind:key="review.id">
    <hr>
    <div class="review">
      <div class="term">
        <p>{{reviewPair.term}}</p>
        <p v-if="reviewPair.showdef"><i>-- {{reviewPair.def}}</i></p>
        <button v-on:click="showHide(reviewPair)">{{buttonTxt}}</button>
      </div>
    </div>
  </div>
  <h3>Add a new vocabulary term</h3>
  <form @submit.prevent="addVocab">
    <input v-model="term" placeholder="Vocab term">
    <p></p>
    <textarea v-model="def" ploceholder="definition"></textarea>
    <br />
    <button type="submit">Submit</button>
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
    tickets() {
      return this.$root.$data.getTickets();
    },
    buttonTxt() {
      if (this.showdef)
        return 'Hide';
      return 'Show';
    },
  },
  methods: {
    showHide(reviewPair) {
      reviewPair.showdef = !reviewPair.showdef;
    },
    addTicket() {
      this.$root.$data.addVocab(this.term, this.def);
      this.term = "";
      this.def = "";
    },
  }
}
</script>
