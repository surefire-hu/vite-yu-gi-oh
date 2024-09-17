<script>
import { store } from '../../store';
import AppCard from './AppCard.vue'
import AppLoader from '../general/AppLoader.vue';

export default {
  name: 'AppCardList',
  components: {
    AppCard,
    AppLoader
  },
  data() {
    return {
      store
    };
  }
}
</script>

<template>
    <div>
        <AppLoader v-if="store.loading" />
        <div v-else-if="store.error">{{ store.error }}</div>
        <div v-else class="card-list">
        <AppCard v-for="card in store.cards" :key="card.id" :card="card" />
    </div>
    </div>
</template>

<style lang="scss" scoped>
.card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>