<template>
  <!-- Loader is shown when loading is false -->
  <div class="loader-container" :class="{ loader__loaded: !loading }">
    <div class="loader">Loading...</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    // This is the loading state coming from the loader store module
    ...mapGetters('loader', ['loading'])
  }
}
</script>

<style>
.loader-container {
  background: white;
  width: 100%;
  height: 100vh;
  position: fixed;
  transition: opacity 0.25s 0.25s ease-out;
}

.loader-container.loader__loaded {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.5s ease-out;
}

.loader,
.loader:after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}
.loader {
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(0, 252, 80, 0.2);
  border-right: 1.1em solid rgba(0, 252, 80, 0.2);
  border-bottom: 1.1em solid rgba(0, 252, 80, 0.2);
  border-left: 1.1em solid #056110;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
