<template>
  <div class="ref">
    <h1>Recombination Types</h1>
    <div class="recombination">
      <img src="../../imgs/coupling.png" width="50%">
      <img src="../../imgs/repulsion.png" width="50%">
    </div>
    <h1>Formulas</h1>
    <div class="formulas">
      <img src="../../imgs/corrections.png">
      <div class="line"> <p class="left"> Recombination Frequency (RF) </p> <p> = <i>total number recombinants / total number gametes</i> </p> </div>
      <div class="line"> <p class="left"> # non-recombinants always </p> <p> >= <i># recombinants</i> </p> </div>
      <div class="line"> <p class="left"> 1 cM </p> <p> = <i>1% recombination frequency</i> </p> </div>
      <div class="line"> <p class="left"> RF flanking genes </p> <p> = <i>RF1 + RF2</i> </p> </div>
      <div class="line"> <p class="left"> Expected # DCOs </p> <p> = <i>RF1 x RF2 x tot. # individuals</i> </p> </div>
      <div class="line"> <p class="left"> Coefficient of Coincidence (C) </p> <p> = <i>observed DCOs / expected DCOs</i> </p> </div>
      <div class="line"> <p class="left"> Interference (I) </p> <p> = <i>1 - C</i> </p> </div>
    </div>
    <h1>Ratios</h1>
    <div class="ratios">
      <div class="line"> <p class="left"> Reciprocal Translocation </p> <p class="right"> => 2 unbalanced : 1 balanced w/ translocation : 1 balanced w/o translocation </p> </div>
      <div class="line"> <p class="left"> Robertsonian Translocation </p> <p class="right"> => 4 unbalanced : 1 balanced w/ translocation : 1 balanced w/o translocation </p> </div>
      <div class="line"> <p class="left"> Trisomic Inheritance </p> <p class="right"> => 1 (AA) : 2 (Aa) : 2 (A) : 1 (a) </p> </div>
      <div class="line"> <p class="left"> Autopolyploidy Inheritance </p> <p class="right"> => 1 (AA) : 4 (Aa) : 1 (aa) </p> </div>
    </div>
  </div>
</template>

<style>
.recombination, .formulas, .ratios {
  margin-left: 20px;
  margin-bottom: 50px;
}

p {
  font-size: 24px;
}

.left {
  font-weight: bold;
}

.right {
  font-style: italic;
}

.line {
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
}
</style>
