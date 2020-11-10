import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

let data = {
  currentID: 18,
  vocab: [ { id: 1, term: 'Transversion Mutation', def: 'Mutation that do alters the ring structure of the base (changes between purine and pyrimidine)', showdef: false },
{ id: 2, term: 'Transition Mutation', def: 'Mutation that does not alter the ring structure of the base', showdef: false },
{ id: 3, term: 'Ploidy (x)', def: 'Describes the number of genomes in a nucleus', showdef: false },
{ id: 4, term: 'Polyploidy', def: 'The case where there are more than three genomes in a nucleus', showdef: false },
{ id: 5, term: 'Haploid (n)', def: 'Describes the number of chromosomes in a gamete', showdef: false },
{ id: 6, term: 'Allopolyploids', def: 'Arise from the hybridization of two related species and the subsequent chromosome doubling to restore fertility', showdef: false },
{ id: 7, term: 'Autopolyploids', def: 'Arise from the spontaneous doubling of chromosomes within a single species', showdef: false },
{ id: 8, term: 'Aneuploidy', def: 'Extra or missing copies of individual chromosomes in the genome; most often arises from nondisjunction which may occur at meiosis I if homologous chromosomes fail to separate or at meiosis II if sister chromatids fail to separate', showdef: false },
{ id: 9, term: 'Simple Terminal Translocation', def: 'Occurs when an acentric fragment of one chromosome attaches to the end of a second chromosome', showdef: false },
{ id: 10, term: 'Reciprocal Translocation', def: 'Occurs when two chromosomes exchange acentric fragments', showdef: false },
{ id: 11, term: 'Robertsonian Translocation', def: 'Involves the exchange of the whole long arms of acrocentric chromosomes and the loss of their short arms, reducing chromosome number by 1', showdef: false },
{ id: 12, term: 'Unbalanced Gametes', def: 'Give rise to unbalanced embryos which are usually not viable', showdef: false },
{ id: 13, term: 'Inversion', def: 'A segment of DNA that is reversed when compared to the same segment from homologous chromosomes within a population', showdef: false },
{ id: 14, term: 'Inversion Heterozygote', def: 'An individual with both an inverted and a noninverted chromosome', showdef: false },
{ id: 15, term: 'Paracentric Inversion', def: 'Does not include the centromere; leads to acentric and dicentric recombinant chromosomes', showdef: false },
{ id: 16, term: 'Pericentric Inversion', def: 'Does include the centromere; leads to deletions/ duplications', showdef: false },
{ id: 17, term: 'Inversion Loop', def: 'Forms during meiosis I in inversion heterozygotes to allow synapsis between homologous portions of the paired chromosomes', showdef: false },
],
  links: [ {id: 1, title: 'Curing Down Syndrome', link: 'https://www.labroots.com/trending/genetics-and-genomics/16411/cure-down-s-syndrome-gene-therapy' },
{ id: 2, title: 'Controversy of Law Enforcement and Genealogical DNA Databases', link:  'https://www.nature.com/articles/d41586-020-02545-5?utm_source=Nature+Briefing&utm_campaign=ae24bfd69a-briefing-dy-20200909&utm_medium=email&utm_term=0_c9dfd39373-ae24bfd69a-43357149' },
{ id: 3, title: 'Catching the Golden State Killer', link: 'https://www.washingtonpost.com/local/public-safety/to-find-alleged-golden-state-killer-investigators-first-found-his-great-great-great-grandparents/2018/04/30/3c865fe7-dfcc-4a0e-b6b2-0bec548d501f_story.html' },
{ id: 4, title: 'Gospel Topic Essay Book of Mormon and DNA Studies', link: 'https://www.churchofjesuschrist.org/study/manual/gospel-topics-essays/book-of-mormon-and-dna-studies?lang=eng' },
{ id: 5, title: 'Understanding Cystic Fibrosis Mutations', link: 'https://www.cff.org/What-is-CF/Genetics/Types-of-CFTR-Mutations/' },
{ id: 6, title: 'PKU Patterns of Inheritance', link: 'https://www.cedars-sinai.org/health-library/diseases-and-conditions---pediatrics/p/phenylketonuria-pku-in-children.html#:~:text=This%20can%20cause%20low%20birth,that%20can%20cause%20brain%20damage' } 
  ],
  getVocab() {
    return this.vocab;
  },
  getLinks() {
    return this.links;
  },
  addTerm(term, def) {
    this.vocab.push({
      id: this.currentID,
      term: term,
      def: def,
      showdef: true
    });
    this.currentID += 1;
  }
}

new Vue({
  router,
  data: data,
  render: h => h(App)
}).$mount('#app')
