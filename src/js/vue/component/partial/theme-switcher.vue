<script>
    export default {
        data: function() {
            return {
                currentTheme: window.localStorage.getItem('theme') ? window.localStorage.getItem('theme') : 'dark',
                fallbackTheme: 'dark',
                themes: ['dark', 'light']
            };
        },
        watch: {
            currentTheme(newTheme) {
                window.localStorage.theme = newTheme;
                setCookie('theme', newTheme, 365);
                jQuery('html').attr('data-bs-theme', newTheme);
            }
        },
        mounted: function() {
            jQuery('html').attr('data-bs-theme', this.currentTheme);
        },
        methods: {
            changeTheme: function() {
                this.currentTheme = this.currentTheme === 'dark' ? 'light' : this.fallbackTheme;
            }
        }
    };
</script>

<template>
    <span class="nav-link d-inline-block">
        <span class="theme-switcher" :class="currentTheme" @click="changeTheme()">
            <fa icon="fa-solid fa-sun pe-1" />
            <fa icon="fa-solid fa-moon ps-1" />
        </span>
    </span>
</template>
