<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import 'normalize.css/normalize.css'
import Vue from 'vue'
import VueBus from 'vue-bus'

Vue.use(VueBus)

export default {
  name: 'App'
}
</script>

<style>
* {
  outline: none;
}

::selection {
  background: #d3d3d3;
}

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.1);
}

::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.09);
  box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.1);
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.15);
}

@media screen {
  body {
    background: #403e3e;
  }
}
</style>
