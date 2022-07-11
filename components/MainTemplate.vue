<template>
    <div id="root-template">

        <!-- Navbar top Tablet/Desktop -->
        <b-navbar toggleable="lg" class="d-none d-xs-none d-sm-flex" fixed="top" id="main-navbar" type="light" variant="white">
            <b-navbar-brand :to="{ name: `index___${$i18n.locale}` }">
                <img :src="require('~/images/aku.png')" alt="Cak Adi" height="30px" class="rounded-circle" />
                <span class="ml-1 d-none d-sm-none d-md-inline">@cakadi190</span>
            </b-navbar-brand>

            <div class="d-flex d-lg-none">
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-dropdown class="no-caret" variant="transparent" :text="$t('changelang')" right>
                    <template #button-content>
                        <img :src="currentFlag" height="25px" class="rounded border" />
                    </template>
                    <b-dropdown-header>{{ $t('changelang') }}</b-dropdown-header>
                    <template v-for="lang in $i18n.locales">
                        <b-dropdown-item :to="switchLocalePath(lang.code)">
                            <img :src="require('~/images/flags/'+lang.flag+'.svg')" class="border rounded mr-1" height="25px" />
                            {{ lang.name }}
                        </b-dropdown-item>
                    </template>
                </b-dropdown>
            </div>

            <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item :to="{ name: `portofolio___${$i18n.locale}` }">{{ $t('portofolio.menu') }}</b-nav-item>
                    <b-nav-item :to="{ name: `certification___${$i18n.locale}` }">{{ $t('achievement.menu') }}</b-nav-item>
                    <b-nav-item :to="{ name: `education___${$i18n.locale}` }">{{ $t('education.menu') }}</b-nav-item>
                    <b-nav-item :to="{ name: `occupation___${$i18n.locale}` }">{{ $t('occupation.menu') }}</b-nav-item>
                </b-navbar-nav>
            </b-collapse>

            <b-dropdown variant="transparent" class="d-none d-md-none d-lg-inline no-caret" :text="$t('changelang')" right>
                <template #button-content>
                    <img :src="currentFlag" height="25px" class="rounded border" />
                </template>
                <b-dropdown-header>{{ $t('changelang') }}</b-dropdown-header>
                <template v-for="lang in $i18n.locales">
                    <b-dropdown-item :to="switchLocalePath(lang.code)">
                        <img :src="require('~/images/flags/'+lang.flag+'.svg')" class="border rounded mr-1" height="25px" />
                        {{ lang.name }}
                    </b-dropdown-item>
                </template>
            </b-dropdown>
        </b-navbar>

        <!-- Navbar top Mobile -->
        <div class="top-nav">
            <nuxt-link v-if="$route.name == `index___${$i18n.locale}`" :to="{ name: `index___${$i18n.locale}` }" class="nav-title text-dark text-decoration-none">
                <img :src="require('~/images/aku.png')" alt="Cak Adi" height="30px" class="rounded-circle" />
                <span class="ml-1">@cakadi190</span>
            </nuxt-link>
            <nuxt-link v-else :to="{ name: `index___${$i18n.locale}` }" class="nav-title text-dark text-decoration-none">
                <i class="fa-solid fa-arrow-left"></i>
            </nuxt-link>

            <div class="right">
                <b-dropdown class="no-caret" variant="transparent" :text="$t('changelang')" right>
                    <template #button-content>
                        <img :src="currentFlag" height="25px" class="rounded border" />
                    </template>
                    <b-dropdown-header>{{ $t('changelang') }}</b-dropdown-header>
                    <template v-for="lang in $i18n.locales">
                        <b-dropdown-item :to="switchLocalePath(lang.code)">
                            <img :src="require('~/images/flags/'+lang.flag+'.svg')" class="border rounded mr-1" height="25px" />
                            {{ lang.name }}
                        </b-dropdown-item>
                    </template>
                </b-dropdown>
            </div>
        </div>

        <!-- Navbar Bottom Mobile -->
        <div class="bottom-nav">
            <ul class="nav">
                <b-nav-item :active="$route.name == `index___${$i18n.locale}`" :to="{ name: `index___${$i18n.locale}` }">
                    <i class="ri-home-4-fill"></i>
                </b-nav-item>
                <b-nav-item :active="$route.name == `portofolio___${$i18n.locale}`" :to="{ name: `portofolio___${$i18n.locale}` }">
                    <i class="ri-folder-5-fill"></i>
                </b-nav-item>
                <b-nav-item :active="$route.name == `certification___${$i18n.locale}`" :to="{ name: `certification___${$i18n.locale}` }">
                    <i class="ri-trophy-fill"></i>
                </b-nav-item>
                <b-nav-item :active="$route.name == `education___${$i18n.locale}`" :to="{ name: `education___${$i18n.locale}` }">
                    <i class="ri-building-2-fill"></i>
                </b-nav-item>
                <b-nav-item :active="$route.name == `occupation___${$i18n.locale}`" :to="{ name: `occupation___${$i18n.locale}` }">
                    <i class="ri-briefcase-4-fill"></i>
                </b-nav-item>
            </ul>
        </div>

        <main id="content-wrapper">
            <div class="img-cover" :style="'background-image: url('+require('~/images/back-cover.jpg')+')'" />
            <div class="main-content">
                <!-- For Slot Here -->
                <div :class="$route.name == `index___${$i18n.locale}` ? 'mt-n5 my-md-auto' : ''"><slot /></div>
                <!-- For Slot Here -->
                <footer class="footer">
                    <p class="copyright">{{ $t('copyright') }} {{ $moment().format('YYYY') }} <a href="/">Cak Adi</a>.</p>
                </footer>
            </div>
        </main>

        <div class="socmed">
            <a href="https://fb.me/cakadi.id"><i class="fa-brands fa-facebook fa-fw"></i></a>
            <a href="https://twitter.com/cakadi190"><i class="fa-brands fa-twitter fa-fw"></i></a>
            <a href="https://instagram.com/cakadi.id"><i class="fa-brands fa-instagram fa-fw"></i></a>
            <a href="https://wa.me/send?phone=6281334991143"><i class="fa-brands fa-whatsapp fa-fw"></i></a>
            <a href="https://www.youtube.com/channel/UCpetlZgdD8e8KBUvHEUY6Ig"><i class="fa-brands fa-youtube fa-fw"></i></a>
        </div>
    </div>
</template>

<script>
export default {
    name: "MainLayout",
    computed: {
        currentFlag() {
            let lang = this.$i18n;
            let currlang = lang.locale;
            let langlist = lang.locales;
            let searchlang = langlist.filter(el => el.code == currlang);

            return require('~/images/flags/'+searchlang[0].flag+'.svg');
        }
    },
    head() {
        return {
            meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' }],
            htmlAttrs: {
                lang: this.$i18n.locale
            }
        }
    }
}
</script>

<style lang="scss">
    @import '~/scss/app.scss';
    @import '@/node_modules/simplelightbox/src/simple-lightbox.scss';

    .list-icon li {
        display: inline-flex;

        &:before {
            margin-right: 0.25rem;
            font-family: "remixicon";
            font-weight: 900;
            min-width: 1.25rem;
            justify-content: center;
            display: flex;
        }

        &.author:before {
            content: "\f10c";
        }

        &.calendar:before {
            content: "\eb22";
        }

        &.calendar-2:before {
            content: "\eb27";
        }

        &.briefcase:before {
            content: "\eaf5";
        }

        &.building:before {
            content: "\eb0f";
        }

        &.globe:before {
            content: "\edd1";
        }

        &.book:before {
            content: "\ebce";
        }

        &.map:before {
            content: "\f08e";
        }

        &.job:before {
            content: "\eaf5";
        }

        &.globe:before {
            content: "\edd1";
        }
    }

    #global-tabs ul.nav-pills {
        border-bottom: 1px solid #eee;

        li.nav-item {
            margin-right: 1rem;

            a.nav-link {
                padding: 0.75rem 0;
                background: transparent;
                color: var(--dark);
                border-bottom: 2px solid transparent;
                border-radius: 0;
                font-size: .9em;
                transition: all .2s;

                &:hover, &:focus, &.active, &:active {
                    color: var(--success);
                    background: transparent;
                    border-color: var(--success);
                }
            }
        }
    }

    .heading {
        font-size: 2.5rem;
        font-weight: bold;
        letter-spacing: .1rem;
        text-transform: uppercase;

        @include media-breakpoint-down('md') {
            font-size: 1.5rem;
        }
    }

    .subheading {
        font-weight: bold;
        text-transform: uppercase;
        color: $success;
        letter-spacing: .25rem;
        font-size: 1rem;
        margin-bottom: 1.25rem;
        line-height: 1.35rem;

        @include media-breakpoint-down('md') {
            font-size: .9rem;
            letter-spacing: .05rem;
        }
    }

    .top-nav {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 100;
        padding: 1rem;
        display: flex;
        justify-content: space-between;

        @include media-breakpoint-up('sm') {
            display: none !important;
        }

        .no-caret {
            .dropdown-toggle {
                padding: 0;
                margin-left: 1rem;
                &:after {
                    display: none;
                }
            }

            .dropdown-menu {
                padding: .5rem;

                .dropdown-header {
                    padding: .25rem .5rem;
                }

                .dropdown-item {
                    padding: .5rem;
                }
            }
        }
    }

    .bottom-nav {
        position: fixed;
        width: 100%;
        bottom: 0;
        padding: 2.5rem 1.5rem;
        padding-top: 1rem;
        box-shadow: $box-shadow;
        border-radius: .75rem .75rem 0 0;
        z-index: 1090;
        background: $white;
        border-top: 1px solid $gray-300;

        @include media-breakpoint-up('sm') {
            display: none;
        }

        .nav {
            justify-content: space-between;

            li {
                a {
                    font-size: 1.5em;
                    color: $gray-700;
                    width: 4rem;
                    height: 4rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50%;
                    transition: all .2s;

                    &:hover {
                        background: $success;
                        color: $white;
                    }

                    &:active, &.active {
                        background: $success;
                        color: $white;
                        margin-top: -2.5rem;
                    }
                }
            }
        }
    }

    .navbar#main-navbar {
        margin: 1rem;
        border: 1px solid $gray-300;
        border-radius: 1.75rem;

        .navbar-toggler {
            padding: 0;
            outline: 0;
            border: 0;
        }

        .no-caret {
            .dropdown-toggle {
                padding: 0;
                margin-left: 1rem;
                &:after {
                    display: none;
                }
            }

            .dropdown-menu {
                padding: .5rem;

                .dropdown-header {
                    padding: .25rem .5rem;
                }

                .dropdown-item {
                    padding: .5rem;
                }
            }
        }
    }

    #content-wrapper {
        display: flex;
        flex-direction: row;
        overflow: hidden;
        min-height: 100vh;
        margin: 0;
        padding: 0;

        @include media-breakpoint-down('xs') {
            flex-direction: column;
            min-height: unset;
            padding-bottom: 9rem;
        }

        .img-cover {
            top: 0;
            left: 0;
            width: 32rem;
            position: fixed;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
            height: 100vh;

            @include media-breakpoint-down('lg') {
                width: 20rem;
            }

            @include media-breakpoint-down('md') {
                width: 16rem;
            }

            @include media-breakpoint-down('xs') {
                position: relative;
                width: 100%;
                height: 20rem;
            }
        }

        .main-content {
            margin-left: 32rem;
            width: calc(100% - (32rem + 5rem));
            min-height: 100vh;
            padding-top: 8rem;
            padding-right: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            @include media-breakpoint-down('lg') {
                margin-left: 20rem;
                width: calc(100% - (20rem + 5rem));
            }

            @include media-breakpoint-down('md') {
                margin-left: 16rem;
                width: calc(100% - (16rem + 5rem));
            }

            @include media-breakpoint-down('xs') {
                margin: 0;
                width: 100%;
                min-height: unset;
                padding: 0;
            }

            > div {
                padding: 1rem;
                margin: 0 1rem;
                margin-top: -3rem;
                z-index: 100;
                background: $white;
                border-radius: 0.75rem 0.75rem 0 0;
            }

            > footer {
                padding: 0 2rem;
            }

            footer.footer {
                border-top: 1px solid $gray-300;
                padding-top: 1rem !important;
                margin-top: 2rem;

                @include media-breakpoint-down('xs') {
                    display: none;
                }
            }
        }
    }

    .socmed {
        position: fixed;
        top: 0;
        right: 0;
        width: 5rem;
        border-left: 1px solid $gray-200;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;

        a {
            height: 3rem;
            width: 3rem;
            border-radius: 50%;
            color: $gray-700;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid $gray-200;
            margin-bottom: 1rem;
        }

        @include media-breakpoint-down('xs') {
            display: none;
        }
    }
</style>