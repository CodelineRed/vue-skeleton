<script>
    import ThemeSwitcher from '../partial/theme-switcher';

    export default {
        components: {
            'c-theme-switcher': ThemeSwitcher
        }
    };
</script>

<template>
    <div class="col-12 pb-3">
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'index' }">{{ $t("nav-home") }}</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'about' }">{{ $t("nav-about") }}</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/foobar">{{ $t("nav-error") }}</router-link>
            </li>
            <li class="nav-item">
                <span class="nav-link d-inline-block">
                    <c-theme-switcher />
                </span>
            </li>
        </ul>
    </div>
</template>
