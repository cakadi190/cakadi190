<template>
    <div id="root-template">
        <b-navbar toggleable="lg" type="light" variant="white">
            <b-container>
                <b-navbar-brand to="/">@cakadi190</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item to="/portofolio">Portofolio</b-nav-item>
                        <b-nav-item to="/certification">Achievement</b-nav-item>
                        <b-nav-item to="/education">Education</b-nav-item>
                        <b-nav-item to="/occupation">Occupation</b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-container>
        </b-navbar>

        <main id="content-wrapper">
            <div class="main-content">
                <slot />
            </div>
        </main>
        <footer class="footer"></footer>
    </div>
</template>

<style lang="scss">
    @import '~/scss/app.scss';
    @import '@/node_modules/simplelightbox/src/simple-lightbox.scss';

    .btn-plain {
        outline: none !important;
        padding: 0;
        border: 0;
        vertical-align: baseline;

        &:focus {
            box-shadow: 0;
            box-shadow: none;
        }
    }
</style>