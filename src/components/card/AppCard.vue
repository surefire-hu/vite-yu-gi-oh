<script>
export default {
  name: 'AppCard',
  props: {
    card: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
    <div class="card">
      <img :src="card.card_images[0].image_url" :alt="card.name">
      <h3>{{ card.name }}</h3>
      <p>{{ card.type }}</p>
    </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/mixin.scss' as *;
.card {
  width: 200px;
  margin: 10px;
  text-align: center;
  @include uppercase;
    img {
    width: 100%;
    height: auto;
    }
}

</style>