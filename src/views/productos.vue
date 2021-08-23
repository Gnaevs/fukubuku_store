<template>
  <v-main>
    <div>
      <h1>Productos</h1>
    </div>
    <v-card elevation="5">
      <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
  
    </v-card>

    <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam qui
        magnam commodi facere nisi, quas explicabo atque ex voluptatum
        aspernatur laboriosam unde amet sed velit provident ratione architecto
        voluptatem quod?
      </p>
  </v-main>
</template>

<script>
export default {
  name: "productos",
  data() {
    return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ]
    };
  },
};
</script>

<style>
</style>