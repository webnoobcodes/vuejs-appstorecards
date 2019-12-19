<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  
};
</script>

<style lang="scss">
* {
  font-size: 1rem;
}

body {
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: "Segoe UI", Tahoma;
  background-color: #efefef;
}

#app {
  position: relative;
  width: calc(100% - 40px);
  min-height: calc(100vh - 40px);
  padding: 20px;
  color: #333;
  overflow: hidden;
}
</style>
