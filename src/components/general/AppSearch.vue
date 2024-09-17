<script>
import axios from 'axios';
import { onMounted } from 'vue';
import { store } from '../../store';
    export default {
        name: 'AppSearch',
        data () {
        return {
            store,
        }
    },
    setup() {
    onMounted(() => {
      store.fetchArchetypes();
    });

    return { store };
  },
    created() {
        axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php').then((data) => {
            store.archetypes = data.data;
        });
    }
};
</script>

<template>
    <div class="search">
      <select v-model="store.selectedArchetype" @change="store.setSelectedArchetype(store.selectedArchetype)">
        <option value="">All Archetypes</option>
        <option v-for="archetype in store.archetypes" :key="archetype" :value="archetype">
          {{ archetype }}
        </option>
      </select>
    </div>
</template>

<style lang="scss" scoped> 

</style>