<template>
  <main-template>
    
    <div class="container mt-md-5 pt-5" id="home-container">
      <div class="row">
        <div class="col-md-6 text-center text-md-left">
          <img :src="require('~/images/aku.png')" height="100px" class="rounded-circle d-lg-none" alt="Aku" />

          <h1>Hi, My Name is Adi</h1>
          <p class="subheading">I am a Fullstack Web Developer with Frontend Web Developer skill specialization based in Ngawi, East Java, Indonesia. I am also a graphic designer that can design any purposes (banner, pamphlet, ID Card, etc.).</p>

          <div class="socmed mb-3 mb-xl-0">
            <a href="https://fb.me/cakadi.id" class="p-2 text-dark"><i class="fa-brands fa-facebook fa-fw"></i></a>
            <a href="https://twitter.com/cakadi190" class="p-2 text-dark"><i class="fa-brands fa-twitter fa-fw"></i></a>
            <a href="https://instagram.com/cakadi.id" class="p-2 text-dark"><i class="fa-brands fa-instagram fa-fw"></i></a>
            <a href="https://wa.me/send?phone=6281334991143" class="p-2 text-dark"><i class="fa-brands fa-whatsapp fa-fw"></i></a>
            <a href="https://www.youtube.com/channel/UCpetlZgdD8e8KBUvHEUY6Ig" class="p-2 text-dark"><i class="fa-brands fa-youtube fa-fw"></i></a>
          </div>

          <div class="d-flex align-items-center mt-3 justify-content-center justify-content-md-start">Officially the part of <a class="ml-2" href="https://www.dasakreativa.web.id"><img :src="require('~/images/logo-color.png')" height="30px" alt="Dasa Kreativa Group" /></a></div>
        </div>
      </div>
    </div>

    <img :src="require('~/images/fotoku.png')" alt="Fotoku" class="my-image d-none d-md-none d-lg-inline" />

  </main-template>
</template>

<script>
export default {
  name: 'IndexPage',
  head: {
    title: 'Beranda - Cak Adi'
  }
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 992px) {
  img.my-image {
    position: absolute;
    bottom: 0;
    height: 100%;
    right: 0;
    z-index: -1;
  }

  #home-container {
    h1.heading {
      font-size: 3em;
    }

    p.subheading {
      color: lighten(#000, 50%);
      font-size: 1.25em;
    }
  }
}

@media screen and (min-width: 1200px) {
  .socmed {
    position: absolute;
    margin-top: -13.75rem;
    margin-left: -4rem;
    display: flex;
    flex-direction: column;
  }
}

#home-container {
  p.subheading {
    color: lighten(#000, 50%);
  }
}
</style>
