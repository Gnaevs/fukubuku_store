<template>
<v-main id="app">
    <v-app-bar app color="#d1adc8" dark >
      <router-link class="par" to="/home">
        <v-btn class="margin">Inicio</v-btn>
      </router-link>

      <router-link class="par" to="/productos">
        <v-btn class="margin">Productos</v-btn>
      </router-link>

      <router-link class="par" to="/redes">
        <v-btn class="margin">redes</v-btn>
      </router-link>

      <router-link class="par" to="/promos">
        <v-btn class="margin">Promos</v-btn>
      </router-link>

      <router-link class="par" to="/promos">
        <v-btn class="margin">Que onda</v-btn>
      </router-link>

      <v-spacer></v-spacer>

      <v-btn href="">
        <span class="mr-2"></span>
        <v-icon>mdi-cart-outline</v-icon>
      </v-btn>
    </v-app-bar>
    <v-card elevation="5">      
    <transition name="fade" mode="out-in">
    <router-view />
    </transition>
    </v-card>
    </v-main>
</template>

<script>

export default {
  data: () => ({ value: 1 }),
  computed:{
    color(){
      switch (this.value) {
          case 0: return 'blue-grey'
          case 1: return 'teal'
          case 2: return 'brown'
          case 3: return 'indigo'
          default: return 'blue-grey'
        }
    },
  }
};
</script>

<style lang="scss">
.nav{
  padding: auto;
  margin-bottom: 16px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.par{
  text-decoration: none;
}
.margin{
  margin-left: 3px;
}
</style>
