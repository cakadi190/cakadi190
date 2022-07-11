<template>
  <main-template class="mx-auto">

    <h1 class="heading">Amir Zuhdi Wibowo</h1>
    <h2 class="subheading">{{ $t('home.subhead') }}</h2>

    <p class="m-0">{{ $t('home.desc') }}</p>

    <div class="d-flex cta-button my-4">
      <b-button variant="success align-items-center justify-content-center d-flex" :to="{name: `portofolio___${$i18n.locale}`}" size="lg"><span class="mr-2">{{ $t('home.cta') }}</span><i class="fa-solid fa-arrow-right"></i></b-button>
    </div>

    <div>{{ $t('home.partof') }} <a class="ml-2" href="https://www.dasakreativa.web.id"><img :src="require('~/images/logo-color.png')" height="25px" alt="Dasa Kreativa Group" /></a></div>
  </main-template>
</template>

<script>
export default {
  name: 'IndexPage',
  head: {
    title: 'Beranda - Cak Adi'
  },
}
</script>

<style lang="scss" scoped>
  .cta-button .btn {
    border-radius: 50rem;
    
    &:first-child {
      padding-left: 1.25rem;
      padding-right: 1.25rem;
      min-height: 50px;
      min-width: 50px;
    }
  }

  h1.heading {
  }
</style>
