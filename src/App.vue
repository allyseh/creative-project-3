<template>
<div id="app">
  <div class="header">
    <h1>Genetics Midterm 2 Study Site</h1>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/vocab">Terms and Definitions</router-link>
      <router-link to="/reference">Formulas and Ratios</router-link>
    </div>
  </div>
  <div class="content">
    <router-view />
  </div>
  <hr>
  <div class="footer">
    <a href="https://github.com/allyseh/creative-project-3"> Github Repository </a>
  </div>
</div>
</template>

<style>
body {
  margin: 0px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.header {
  display: flex;
  justify-content: space-between;
  background: #1DC537;
  padding: 10px 50px;
  color: white;
}

#nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

#nav a {
  font-weight: bold;
  font-size: 20px;
  color: #fff;
  margin-right: 10px;
}

#nav a.router-link-exact-active {
  color: #0885A6;
}

.content {
  padding: 10px 100px;
}

.footer {
  display: flex;
  justify-content: center;
  margin: 30px 20px;
}
</style>

