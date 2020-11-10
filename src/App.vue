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
  padding: 10px 100px;
  color: white;
}

#nav {
  display: flex;
  flex-direction: column;
  align-items: space-between;
}

#nav a {
  font-weight: bold;
  color: #fff;
}

#nav a.router-link-exact-active {
  color: #46D4FA;
}

.content {
  padding: 10px 100px;
}
</style>

