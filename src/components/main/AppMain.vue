<script>
import AppCardList from '../card/AppCardList.vue'
import AppSearch from '../general/AppSearch.vue';
import { store } from '../../store';

export default {
  name: 'AppMain',
  components: {
    AppCardList,
    AppSearch,
  },
  data() {
    return {
      store
    };
  }
}
</script>

<template>
    <main>
        <AppSearch/>
        <p>Carte Totali: {{ store.cardCount }}</p>
        <div class="container">
            <AppCardList />
        </div>
    </main>
  </template>

<style lang="scss" scoped>
@use '../../styles/partials/mixin.scss' as *;
@use '../../styles/partials/variables.scss' as *;
main {
    background-color: $bg-primary;
    .container {
        background-color: $color-white;
        padding: 50px;
        min-height: 90vh;
        @include container-size
    }
}


</style>