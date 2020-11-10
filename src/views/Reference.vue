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
      <p class="formula"> Recombination Frequency (RF) = total number recombinants / total number gametes </p>
      <p class="formula"> # non-recombinants always less >= # recombinants </p>
      <p class="formula">	1 cM = 1% recombination frequency </p>
      <p class="formula"> RF flanking genes = RF1 + RF2 </p>
      <p class="formula">	Expected # DCOs = RF1 x RF2 x tot. # individuals </p>
      <p class="formula"> Coefficient of Coincidence (C) = observed DCOs / expected DCOs </p>
      <p class="formula">	Interference (I) = 1 - C </p>
    </div>
    <h1>Ratios</h1>
    <div class="ratios">
      <p class="ratio">	Reciprocal Translocation => 2 unbalanced : 1 balanced w/ translocation : 1 balanced w/o translocation </p>
      <p class="ratio"> Robertsonian Translocation => 4 unbalanced : 1 balanced w/ translocation : 1 balanced w/o translocation </p>
      <p class="ratio"> Trisomic Inheritance => 1 (AA) : 2 (Aa) : 2 (A) : 1 (a) </p>
      <p class="ratio"> Autopolyploidy Inheritance => 1 (AA) : 4 (Aa) : 1 (aa) </p>
    </div>
  </div>
</template>

<style>
.recombination, .formulas, .rations {
  margin-left: 20px;
  margin-bottom: 50px;
}

p {
  font-size: 24px;
}
</style>
