<template>
    <div id="root-template" class="pt-5">
        <b-navbar toggleable="lg" fixed="top" type="light" variant="white">
            <b-container>
                <b-navbar-brand v-if="$route.path.includes('id')" to="/id">@cakadi190</b-navbar-brand>
                <b-navbar-brand v-if="!$route.path.includes('id')" to="/">@cakadi190</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <!-- Right aligned nav items -->
                    <b-navbar-nav v-if="!$route.path.includes('id')" class="ml-auto">
                        <b-nav-item to="/portofolio">Portofolio</b-nav-item>
                        <b-nav-item to="/certification">Achievement</b-nav-item>
                        <b-nav-item to="/education">Education</b-nav-item>
                        <b-nav-item to="/occupation">Occupation</b-nav-item>

                        <b-nav-item-dropdown text="English" right>
                            <b-dropdown-item active to="/">English</b-dropdown-item>
                            <b-dropdown-item to="/id">Indonesian</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                    <b-navbar-nav v-if="$route.path.includes('id')" class="ml-auto">
                        <b-nav-item to="/id/portofolio">Portofolio</b-nav-item>
                        <b-nav-item to="/id/certification">Sertifikasi</b-nav-item>
                        <b-nav-item to="/id/education">Pendidikan</b-nav-item>
                        <b-nav-item to="/id/occupation">Pekerjaan</b-nav-item>

                        <b-nav-item-dropdown text="Bahasa Indonesia" right>
                            <b-dropdown-item to="/">Bahasa Inggris</b-dropdown-item>
                            <b-dropdown-item active to="/id">Bahasa Indonesia</b-dropdown-item>
                        </b-nav-item-dropdown>
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