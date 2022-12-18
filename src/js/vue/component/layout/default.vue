<script>
    import LangSwitch from '../partial/langswitch';
    import ModalCookiePolicy from '../partial/modal-cookie-policy';
    import Navigation from '../partial/navigation';
    import Version from '../partial/version';

    export default {
        components: {
            'c-langswitch': LangSwitch,
            'c-modal-cookie-policy': ModalCookiePolicy,
            'c-navigation': Navigation,
            'c-version': Version
        }
    };
</script>

<template>
    <div>
        <header>
            <div class="container">
                <div class="row">
                    <c-navigation />
                </div>
            </div>
        </header>
        <main>
            <div class="container">
                <router-view ref="view" />
            </div>
        </main>
        <footer>
            <div class="container">
                <div class="row">
                    <c-langswitch drop="up" />
                    <c-version />
                </div>
            </div>
        </footer>
        <c-modal-cookie-policy />
    </div>
</template>
