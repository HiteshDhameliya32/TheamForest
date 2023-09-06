<script>
export default {
    name: 'App',
    data() {
        return {
            loading: true
        };
    },
    created() {
        setTimeout(() => (this.loading = false), 600);
    }
}
</script>

<template>
    <div>
        <div id="preloader" v-if="loading">
            <div id="status">
                <div class="sk-cube-grid">
                    <div class="sk-cube sk-cube1"></div>
                    <div class="sk-cube sk-cube2"></div>
                    <div class="sk-cube sk-cube3"></div>
                    <div class="sk-cube sk-cube4"></div>
                    <div class="sk-cube sk-cube5"></div>
                    <div class="sk-cube sk-cube6"></div>
                    <div class="sk-cube sk-cube7"></div>
                    <div class="sk-cube sk-cube8"></div>
                    <div class="sk-cube sk-cube9"></div>
                    <div class="sk-cube sk-cube10"></div>
                    <div class="sk-cube sk-cube11"></div>
                    <div class="sk-cube sk-cube12"></div>
                    <div class="sk-cube sk-cube13"></div>
                    <div class="sk-cube sk-cube14"></div>
                    <div class="sk-cube sk-cube15"></div>
                    <div class="sk-cube sk-cube16"></div>
                    <div class="sk-cube sk-cube17"></div>
                    <div class="sk-cube sk-cube18"></div>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>