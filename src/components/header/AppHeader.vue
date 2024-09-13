<script>
import AppLogo from '../general/AppLogo.vue';

export default {
  name:'AppHeader',
    components: {
        AppLogo,
    }
};
</script>

<template>
    <header>
        <div id="navbar">
            <AppLogo></AppLogo>
            <h2>Yu-Gi-Oh Api</h2>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;
@use '../../styles/partials/mixin' as *;

    #navbar {
        @include flex;
        background-color: $color-white;
    } 

</style>